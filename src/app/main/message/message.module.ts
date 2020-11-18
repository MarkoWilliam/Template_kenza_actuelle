import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../service/auth/auth.guard';
import { MessageComponent } from './message.component';



const routes = [
  {
      path     : 'message',
      component: MessageComponent,
      canActivate: [AuthGuard],
  }
];

@NgModule({
  declarations: [
    MessageComponent
  ],
  imports     : [
      RouterModule.forChild(routes)
  ],
  exports     : [
    MessageComponent
  ]
})

export class MessageModule
{
}
