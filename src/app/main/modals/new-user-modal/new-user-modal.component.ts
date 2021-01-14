import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  modelCLient = {
    nom: null,
    email: null,
    password: null,
    prenom:null,
    id_type:1,
    type_str:"Admin",
  }
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
  ) { }

  ngOnInit() {
  }


  registerEntrer() { 
      this.servInscr.creationUser(this.modelCLient).subscribe( results => {
        if (results.status == 200) {
          console.log('Message rerour', results);
         /*  this.router.navigate(['/login']); */
          this.toastr.success('enregistrer', 'Donnée');
        }
        else {
          console.log("Il y a une erreur");
          this.toastr.warning('Déja utiliser par une autre utilisateur', 'Email');
        }
      },(error) => {
        console.log("Erreur",  error.status)
        this.toastr.error(' !', 'Erreur'); 
      }); 
  }
}
