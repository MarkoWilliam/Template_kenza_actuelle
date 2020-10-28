import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventComponent } from './event.component';



const routes = [
  {
      path     : 'event',
      component: EventComponent
  }
];

@NgModule({
  declarations: [
    EventComponent
  ],
  imports     : [
      RouterModule.forChild(routes)
  ],
  exports     : [
    EventComponent
  ]
})

export class EventModule
{
}
