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
    nom: null,
    email: null,
    password: null,
    prenom:null,
    id_type:1,
    etat:1
  }
  mode=0;
  
  
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

  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private _fuseConfigService: FuseConfigService,
    private router: Router,
    private servInscr: GlobaleService,
    @Inject(MAT_DIALOG_DATA) public data: {user}
   
  ) { 
        if(data.user){
          this.modelUser.id = data.user.id;
          this.modelUser.nom = data.user.nom;
          this.modelUser.prenom = data.user.prenom;
          this.modelUser.id_type = data.user.id_type;
          this.modelUser.email = data.user.email;     
          this.modelUser.etat = data.user.etat;    
          this.mode = 1; 
          
        }
    }

  ngOnInit() {
  }


  registerEntrer(modesave) {
    if(modesave == 0){
        this.servInscr.creationUser(this.modelUser).subscribe( results => {
          if (results) {
            this.toastr.success('enregistrer', 'Donnée');
            window.location.reload();
          }
        },(error) => {
          this.toastr.error(error.message,'Erreur'); 
        }); 
    }else{
        this.servInscr.majUser(this.modelUser).subscribe( results => {
          if (results) {
            this.toastr.success('enregistrer', 'Donnée');
            window.location.reload();
          }
        },(error) => {
          this.toastr.error(error.message,'Erreur'); 
        }); 
    }
  }
}
