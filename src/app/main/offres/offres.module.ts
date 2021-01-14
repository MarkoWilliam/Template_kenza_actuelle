import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../service/auth/auth.guard';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { RouterModule } from '@angular/router';
import { OffresComponent } from './offres.component';
import { OffresModalComponent } from '../modals/offres-modal/offres-modal.component';


const routes = [
  {
      path     : 'offres',
      component: OffresComponent,
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
  entryComponents:[OffresModalComponent]
})
export class OffresModule { }
