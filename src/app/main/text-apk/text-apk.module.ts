import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalTextApkComponent } from '../modals/modal-text-apk/modal-text-apk.component';
import { TextAPKComponent } from './text-apk.component';
import { AuthGuard } from '../service/auth/auth.guard';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';

const routes = [
  {
    path : 'text_apk',
    component: TextAPKComponent,
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
  entryComponents: [ModalTextApkComponent]
})
export class TextAPKModule { }
