import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm= new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('')
  })
 

  get email() {
    return this.loginForm.get('email')
  }

  get message() {
    return this.registrationForm.get('message');
  }

  public registrationForm = this.formBuilder.group({
    message: ['', [Validators.maxLength(70),
    Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
    ]],
  });

  public errorMessages = {
    message: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Votre email n\'est pas valider' }
    ],
  };

  /**
   * Constructor
   *
   * @param {FuseConfigService} _fuseConfigService 
   */
  constructor(
      private formBuilder: FormBuilder,
      private _fuseConfigService: FuseConfigService,
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

}
