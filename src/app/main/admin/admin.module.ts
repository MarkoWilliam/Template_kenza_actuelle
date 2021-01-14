import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../service/auth/auth.guard';
import { NewUserModalComponent } from '../modals/new-user-modal/new-user-modal.component';


const routes = [
  {
      path     : 'admin',
      component: AdminComponent,
      canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    FuseSharedModule
  ],
  entryComponents:[NewUserModalComponent]
})
export class AdminModule { }
