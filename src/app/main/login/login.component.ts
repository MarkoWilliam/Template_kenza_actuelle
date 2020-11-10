import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FuseConfigService } from '@fuse/services/config.service';
import { GlobaleService } from '../service/globale.service';
import { ToastrService } from 'ngx-toastr';

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
 

  get email() {
    return this.loginForm.get('email')
  }

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
    this.router.navigate(['/inscription']);
  }

  loginUser() {
    this.servInscr.Loginuser(this.modelCLient).subscribe(results => {
      if(results != null) {
        console.log("C'est ok", results)
        this.router.navigate(['/analytique']);
      } else {
        console.log("Il y a une erreur");
      }
    })
  }


  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
 
}
