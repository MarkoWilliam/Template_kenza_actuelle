import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../service/auth/auth.guard';
import { EventComponent } from './event.component';



const routes = [
  {
      path     : 'event',
      component: EventComponent,
      canActivate: [AuthGuard],
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
