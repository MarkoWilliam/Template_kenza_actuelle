import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { FuseConfigService } from '@fuse/services/config.service';
import { GlobaleService } from 'app/main/service/globale.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-new-user-modal',
  templateUrl: './new-user-modal.component.html',
  styleUrls: ['./new-user-modal.component.scss']
})
export class NewUserModalComponent implements OnInit {
  
  modelUser = {
    id:null,
    nom: '',
    email: '',
    password: '',
    prenom:'',
    nom_image: '',
    id_type:1,
    etat:1
  }
  mode=0;
  images=null;
  typeUser: any;
  ishidden0=true;
  ishidden1=true;
  get pass() {
    return this.registrationForm.get('pass')
  }

  get name() {
    return this.registrationForm.get('name');
  }

  get firstname() {
    return this.registrationForm.get('firstname');
  }

  get typeuser() {
    return this.registrationForm.get('typeuser');
  }
 


  get message() {
    return this.registrationForm.get('message');
  }

  public registrationForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    firstname: ['', [Validators.required, Validators.maxLength(100)]],
    typeuser: ['', [Validators.required]],
    pass: ['', [Validators.required, Validators.maxLength(100)]], 
    message: ['', [Validators.maxLength(70),
    Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
    ]],
  });

  public errorMessages = {
    message: [
      { type: 'required', message: 'Compléter le champ svp' },
      { type: 'pattern', message: 'Votre email n\'est pas valider' }
    ],
    name: [
      { type: 'required', message: 'Compléter le champ svp' },
      { type: 'maxlength', message: 'Auw max 100 caractères' }
    ],
    firstname: [
      { type: 'required', message: 'Compléter le champ svp' },
      { type: 'maxlength', message: 'Auw max 100 caractères' }
    ],
    typeuser: [
      { type: 'required', message: 'Compléter le champ svp' },
      { type: 'maxlength', message: 'Auw max 100 caractères' }
    ],

    pass: [
      { type: 'required', message: 'Compléter le champ svp' },
      { type: 'maxlength', message: 'Auw max 100 caractères' }
    ], 
  };

  confirm_password = '';
  base_url=null;
  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private _fuseConfigService: FuseConfigService,
    private router: Router,
    private servInscr: GlobaleService,
    private api:GlobaleService,
    @Inject(MAT_DIALOG_DATA) public data: {user}
   
  ) { 
        if(data.user){
          this.modelUser.id = data.user.id;
          this.modelUser.nom = data.user.nom;
          this.modelUser.prenom = data.user.prenom;
          this.modelUser.id_type = data.user.id_type;
          this.modelUser.email = data.user.email;     
          this.modelUser.etat = data.user.etat;    
          this.modelUser.nom_image = data.user.nom_image;  
          this.mode = 1; 
          
        }
    }

  ngOnInit() {
    this.base_url=this.servInscr.base_Url_Api_Bo;
    this.ListeTypeUser();
  }

  onFileSelected(event){
    const file =event.target.files[0];
    this.images = file;
    this.api.uploadimage(this.images).subscribe(async (data: any) => { 
      console.log("File 1",this.images);
      if(data){
        console.log("************** image", data);
          this.modelUser.nom_image=   data.file.filename;
      }; } )
  }

  registerEntrer(modesave) {
    if(modesave == 0){ 
this.servInscr.uploadimage(this.images).pipe().subscribe(async (data: any) => { 
  if(data){
    console.log("Image 1", data.file.filename);
     this.modelUser.nom_image = await data.file.filename;
  }
  this.servInscr.creationUser(this.modelUser).subscribe( results => {
    console.log("Donnée", results);
    if (results) {
      this.toastr.success('enregistrer', 'Donnée');
     window.location.reload();
    }
  },(error) => {
    this.toastr.error('Cette email est déja utilisé','Erreur'); 
  }); 
});
    }else{

      if(this.images==null){
        this.servInscr.majUser(this.modelUser).subscribe( results => {
          if (results) {
              this.toastr.success('enregistrer', 'Donnée');
         window.location.reload();
          }
        },(error) => {
          this.toastr.error(error.message,'Erreur'); 
        }); 
      } 
else {
  this.servInscr.uploadimage(this.images).pipe().subscribe(async (data: any) => { 
    if(data){
      console.log("Image 2", data.file.filename);
       this.modelUser.nom_image=await data.file.filename;
    }
    this.servInscr.majUser(this.modelUser).subscribe( results => {
      if (results) {
        this.toastr.success('enregistrer', 'Donnée');
        window.location.reload();
      }
    },(error) => {
      this.toastr.error('Cette email est déja utilisé','Erreur'); 
    });  
  });
}
    }
  }


  ListeTypeUser(){
this.servInscr.GetTypeUser().subscribe(async results =>{
this.typeUser = await results.body;
console.log("Type user", this.typeUser);
})
  }

  afficher_bloc(tmp){
    /*  alert(tmp); */
     if(tmp==0){
       this.ishidden0=false;
       this.ishidden1=true;
     }else{
       this.ishidden1=false;
       this.ishidden0=true;
     }
   }
 
}

