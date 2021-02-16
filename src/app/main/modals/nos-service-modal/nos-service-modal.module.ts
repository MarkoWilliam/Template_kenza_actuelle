import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosServiceModalComponent } from './nos-service-modal.component';
import { AuthGuard } from 'app/main/service/auth/auth.guard';
import {  MatCardImage, MatCheckbox, MatCheckboxModule, MatDialogModule, MatFormField, MatInputModule, MatOptionModule, MatSelectModule,   } from '@angular/material' 
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { FormsModule } from '@angular/forms';
const routes = [
  {
    path : 'modalService',
    component: NosServiceModalComponent,
    canActivate: [AuthGuard],
  }
]

@NgModule({
  declarations: [NosServiceModalComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    TranslateModule,
    FuseSharedModule,
    MatInputModule,
    MatCheckboxModule
  ],
  exports: [
    MatOptionModule,
    MatSelectModule
  ]
})
export class NosServiceModalModule { }
