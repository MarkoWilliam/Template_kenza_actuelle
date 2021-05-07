import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../service/auth/auth.guard';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { RouterModule } from '@angular/router';
import { NotificationComponent } from './notification.component';
import { NotificationModalComponent } from '../modals/notification-modal/notification-modal.component';
import {MatRadioModule} from '@angular/material/radio'



const routes = [
  {
      path     : 'notification',
      component: NotificationComponent,
      canActivate: [AuthGuard],
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    FuseSharedModule,
    MatRadioModule
  ],
  entryComponents:[NotificationModalComponent]
})

export class NotificationModule
{
}
