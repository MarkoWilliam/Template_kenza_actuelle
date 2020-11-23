import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../service/auth/auth.guard';
import { ProduitsComponent } from './produits.component';
import { MatCheckboxModule, MatInputModule, MatIconModule, MatSortModule, MatTableModule, MatDialogModule, MatGridListModule, MatCardModule } from '@angular/material' 
import { MatPaginatorModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpParams } from '@angular/common/http';
const routes = [
  {
      path     : 'produits',
      component: ProduitsComponent,
      canActivate: [AuthGuard],
  }
];

@NgModule({
  declarations: [
    ProduitsComponent
  ],
  imports     : [
      RouterModule.forChild(routes),
      MatTableModule,
      MatPaginatorModule ,
      MatIconModule,
      MatCheckboxModule,
      MatSortModule,
      FormsModule,
      ReactiveFormsModule,
      MatInputModule,
      BrowserModule,
      MatDialogModule,
      MatGridListModule,
      MatCardModule,
      HttpClientModule
    
          
  ],
  exports     : [
    ProduitsComponent,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatCheckboxModule,
    MatSortModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    BrowserModule,
    MatDialogModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule,   
  ]
})

export class ProduitsModule
{
}
