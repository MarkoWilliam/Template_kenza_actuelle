import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../service/auth/auth.guard';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { RouterModule } from '@angular/router';
import { MagasinComponent } from './magasin.component';
import { MagasinModalComponent } from '../modals/magasin-modal/magasin-modal.component';


const routes = [
  {
      path     : 'magasin',
      component: MagasinComponent,
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
  entryComponents:[MagasinModalComponent]
})
export class MagasinModule { }
