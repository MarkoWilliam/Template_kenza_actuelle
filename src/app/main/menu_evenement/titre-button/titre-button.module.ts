import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { RouterModule } from '@angular/router';
import { TitreButtonComponent } from './titre-button.component';
import { AuthGuard } from 'app/main/service/auth/auth.guard';
import { ButtonTitreComponent } from 'app/main/modals/button-titre/button-titre.component';


const routes = [
  {
      path     : 'titre',
      component: TitreButtonComponent,
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
  entryComponents:[ButtonTitreComponent]
})
export class TitreButtonModule { }
