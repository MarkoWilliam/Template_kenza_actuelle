import { NgModule } from '@angular/core';

import { UtilisateurComponent } from './utilisateur.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { AuthGuard } from '../service/auth/auth.guard';


const routes = [
  {
      path     : 'utlisateur',
      component: UtilisateurComponent,
      canActivate: [AuthGuard],
  }
];

@NgModule({
  declarations: [
    UtilisateurComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    TranslateModule,

    FuseSharedModule
  ]
})
export class UtilisateurModule { }
