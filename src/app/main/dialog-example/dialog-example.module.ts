import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  MatCardImage, MatCheckbox, MatCheckboxModule, MatDialogModule, MatFormField, MatInputModule, MatOptionModule, MatSelectModule,   } from '@angular/material' 
import { DialogExampleComponent } from './dialog-example.component';
import { AuthGuard } from '../service/auth/auth.guard';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';

const routes = [
  {
    path : 'dialog',
    component: DialogExampleComponent,
    canActivate: [AuthGuard],
  }
]

@NgModule({
  declarations: [
    DialogExampleComponent
  ],
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
export class DialogExampleModule { }
