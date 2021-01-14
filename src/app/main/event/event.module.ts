import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../service/auth/auth.guard';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { RouterModule } from '@angular/router';
import { EventModalComponent } from '../modals/event-modal/event-modal.component';
import { EventComponent } from './event.component';



const routes = [
  {
      path     : 'event',
      component: EventComponent,
      canActivate: [AuthGuard],
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    FuseSharedModule
  ],
  entryComponents:[EventModalComponent]
})

export class EventModule
{
}
