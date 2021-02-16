import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FuseConfigService } from '@fuse/services/config.service';
import { GlobaleService } from '../service/globale.service';
import { ToastrService } from 'ngx-toastr'; 
import { error } from 'console';
import { HttpResponse } from '@angular/common/http';
import { User } from '../modelUser/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
  loginForm= new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('')
  })
  modelCLient = {
    email: null,
    password: null,
  }
 messageError = null;

  get email() {
    return this.loginForm.get('email')
  }


  fonction = null;
  fonctionSer = null;
  get message() {
    return this.registrationForm.get('message');
  }

  get pass() {
    return this.registrationForm.get('pass')
  }

  public registrationForm = this.formBuilder.group({
    pass: ['', [Validators.required, Validators.maxLength(100)]],
    message: ['', [Validators.maxLength(70),
    Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
    ]],
  });

  public errorMessages = {
    message: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Votre email n\'est pas valider' }
    ],
    pass: [
      { type: 'required', message: 'Compléter le champ svp' },
      { type: 'maxlength', message: 'Auw max 100 caractères' }
    ],
  };

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
      private servInscr: GlobaleService
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

  login() {
  
  }

  Manu() {
    this.router.navigate(['/analytique'], {skipLocationChange : true})
  }

  Inscription() {
    this.router.navigate(['/inscription'], {skipLocationChange: true});
  }

  loginUser() {
  this.servInscr.Loginuser(this.modelCLient).subscribe(results => {
    console.log("Test");
    if(results.status == 200) {
      console.log("C'est ok", results)
      this.router.navigate(['/analytique'], {skipLocationChange: true});
      this.toastr.success('avec succès', 'Authentification');   
      // stoquer token dans local Storage du navigateur  
      sessionStorage.setItem('token', results.body.token);
      sessionStorage.setItem('nom', results.body.reponse.nom);
      sessionStorage.setItem('email', results.body.reponse.email);
      sessionStorage.setItem('id', results.body.reponse.id);
      sessionStorage.setItem('prenom', results.body.reponse.prenom);
    }else {
      this.toastr.error('Login ou mot de passe incorrectes !', 'Erreur');
     }
  },(error) => {

    if(error.status === 401) {
      console.log("Erreur",  error.status)
      this.toastr.error('Login ou mot de passe incorrectes !', 'Erreur'); 
    } else if (error.status === 405) {
      this.toastr.warning('Il y a une champ vide', 'Erreur'); 
    } 
    else {
      console.log("Erreur Trover")
    }

  }
  ); 
 
 
  }

  showSuccess() {
    this.toastr.success('avec succès', 'Authentification');
  }
 
}
