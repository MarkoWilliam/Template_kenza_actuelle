import { NgModule } from '@angular/core';

import { UtilisateurComponent } from './utilisateur.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';


const routes = [
  {
      path     : 'utlisateur',
      component: UtilisateurComponent
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
