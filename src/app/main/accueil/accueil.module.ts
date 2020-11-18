import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilRoutingModule } from './accueil-routing.module';
import { AccueilComponent } from './accueil.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { AuthGuard } from '../service/auth/auth.guard';

const routes = [
  {
    path : 'accueil',
    component: AccueilComponent,
    canActivate: [AuthGuard],
   }
];

@NgModule({
  declarations: [
    AccueilComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    TranslateModule,

    FuseSharedModule
  ]
})
export class AccueilModule { }
