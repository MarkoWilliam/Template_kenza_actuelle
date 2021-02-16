import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosServiceComponent } from './nos-service.component';
import { AuthGuard } from '../service/auth/auth.guard';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
const routes = [
  {
      path     : 'nosService',
      component: NosServiceComponent,
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
  ],
  entryComponents:[NosServiceComponent]
})
export class NosServiceModule { }
