import { Component, OnInit } from '@angular/core'; 

import { FuseConfigService } from '@fuse/services/config.service';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 

  /**
   * Constructor
   *
   * @param {FuseConfigService} _fuseConfigService 
   */
  constructor(
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

}
