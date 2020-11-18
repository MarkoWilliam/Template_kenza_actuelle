import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { AuthGuard } from '../service/auth/auth.guard';
import { NotificationComponent } from './notification.component';



const routes = [
  {
      path     : 'notification',
      component: NotificationComponent,
      // canActivate: [AuthGuard],
  }
];

@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports     : [
      RouterModule.forChild(routes)
  ],
  exports     : [
    NotificationComponent
  ]
})

export class NotificationModule
{
}
