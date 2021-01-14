import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../service/auth/auth.guard';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { RouterModule } from '@angular/router';
import { CarteCadeauComponent } from './carte-cadeau.component';
import { CartecardeauModalComponent } from '../modals/cartecardeau-modal/cartecardeau-modal.component';

const routes = [
  {
      path     : 'carte-cadeau',
      component: CarteCadeauComponent,
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
  entryComponents:[CartecardeauModalComponent]
})
export class CarteCadeauModule { }
