import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotificationComponent } from './notification.component';



const routes = [
  {
      path     : 'notification',
      component: NotificationComponent
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
