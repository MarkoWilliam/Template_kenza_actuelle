import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { EmployerComponent } from './employer.component';


const routes = [
  {
      path     : 'employer',
      component: EmployerComponent
  }
];

@NgModule({
  declarations: [
      EmployerComponent
  ],
  imports     : [
      RouterModule.forChild(routes),

      TranslateModule,

      FuseSharedModule
  ],
  exports     : [
    EmployerComponent
  ]
})

export class EmployerModule { }
