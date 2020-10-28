import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { AdminComponent } from './admin.component';


const routes = [
  {
      path     : 'admin',
      component: AdminComponent
  }
];

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    TranslateModule,

    FuseSharedModule
  ]})
export class AdminModule { }
