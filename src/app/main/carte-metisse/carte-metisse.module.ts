import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarteMetisseComponent } from './carte-metisse.component';
import { AuthGuard } from '../service/auth/auth.guard';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { CarteMetisseModalComponent } from '../modals/carte-metisse-modal/carte-metisse-modal.component';

const routes = [
  {
      path     : 'carte_metisse',
      component: CarteMetisseComponent,
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
  ] , 
  entryComponents:[CarteMetisseModalComponent]
})
export class CarteMetisseModule { }
