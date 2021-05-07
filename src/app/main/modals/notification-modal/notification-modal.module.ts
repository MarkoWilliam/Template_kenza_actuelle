import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';  
import {MatRadioModule} from '@angular/material/radio'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FileUploadModule,  
    MatRadioModule
  ]
})
export class NotificationModalModule { }
