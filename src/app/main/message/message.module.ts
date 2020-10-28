import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessageComponent } from './message.component';



const routes = [
  {
      path     : 'message',
      component: MessageComponent
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
