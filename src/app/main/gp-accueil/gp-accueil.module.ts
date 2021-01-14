import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../service/auth/auth.guard';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { RouterModule } from '@angular/router';
import { BanniereModalComponent } from '../modals/banniere-modal/banniere-modal.component';
import { GpAccueilComponent } from './gp-accueil.component';



const routes = [
  {
      path     : 'gp-accueil',
      component: GpAccueilComponent,
      canActivate: [AuthGuard],
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    FuseSharedModule
  ],
  entryComponents:[BanniereModalComponent]
})
export class GpAccueilModule { }
