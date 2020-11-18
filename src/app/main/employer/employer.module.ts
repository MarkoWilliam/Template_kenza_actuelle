import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { EmployerComponent } from './employer.component';
import { AuthGuard } from '../service/auth/auth.guard';


const routes = [
  {
      path     : 'employer',
      component: EmployerComponent,
      canActivate: [AuthGuard],
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
