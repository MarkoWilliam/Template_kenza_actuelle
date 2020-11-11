import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FuseConfigService } from '@fuse/services/config.service';
import { ToastrService } from 'ngx-toastr';
import { GlobaleService } from '../service/globale.service';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {


  modelCLient = {
    nom: null,
    email: null,
    password: null,
  }
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
 
 

  get pass() {
    return this.registrationForm.get('pass')
  }

  get name() {
    return this.registrationForm.get('name');
  }


  get message() {
    return this.registrationForm.get('message');
  }

  public registrationForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
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

    pass: [
      { type: 'required', message: 'Compléter le champ svp' },
      { type: 'maxlength', message: 'Auw max 100 caractères' }
    ],
  };

  confirm_password = '';

  /**
   * Constructor
   *
   * @param {FuseConfigService} _fuseConfigService 
   */
  constructor(
      private toastr: ToastrService,
      private formBuilder: FormBuilder,
      private _fuseConfigService: FuseConfigService,
      private router: Router,
      private servInscr: GlobaleService,
      // private toastr : ToastrService
  )
  {
      // Apparition du menu ou pas
      this._fuseConfigService.config = {
          layout: {
              navbar   : {
                  hidden: true
              },
              toolbar  : {
                  hidden: true
              },
              footer   : {
                  hidden: true
              },
              sidepanel: {
                  hidden: true
              }
          }
      };
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
 
  }


  registerEntrer() {

    // if(this.modelCLient.nom === '') {
    //   this.toastr.warning('Remplissez le champ Nom!', 'Champ vide'); 
    // }else if(this.modelCLient.email === '') {
    //   this.toastr.warning('Remplissez le champ Email!', 'Champ vide'); 
    // }else if(this.modelCLient.password === '') {
    //   this.toastr.warning('Remplissez le champ Password!', 'Champ vide'); 
    // }else {
 
      this.servInscr.creationUser(this.modelCLient).subscribe( results => {
        if (results.status == 200) {
          console.log('Message rerour', results);
          this.router.navigate(['/login']);
          this.toastr.success('enregistrer', 'Donnée');
        }
        else {
          console.log("Il y a une erreur");
          this.toastr.warning('Déja utiliser par une autre utilisateur', 'Email');
        }
      },(error) => {
        console.log("Erreur",  error.status)
        this.toastr.error(' !', 'Erreur'); 
      }
      ); 
    // }
  }


  retour() {
    this.router.navigate(['/login']);
  }


}
