import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TexteButtonComponent } from './texte-button.component';
import { AuthGuard } from 'app/main/service/auth/auth.guard';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { ButtonTexteComponent } from 'app/main/modals/button-texte/button-texte.component';


const routes = [
  {
    path : 'text',
    component: TexteButtonComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    FuseSharedModule
  ],
  entryComponents:[ButtonTexteComponent]
})
export class TexteButtonModule { }
