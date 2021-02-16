import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitMFComponent } from './produit-mf.component';
import { AuthGuard } from 'app/main/service/auth/auth.guard';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule, MatInputModule, MatIconModule, MatSortModule, MatTableModule, MatDialogModule, MatGridListModule, MatCardModule } from '@angular/material' 
import { MatPaginatorModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar'
const routes = [
  {
      path     : 'produitMf',
      component: ProduitMFComponent,
      canActivate: [AuthGuard],
  }
];

@NgModule({
  declarations: [ProduitMFComponent],
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
    HttpClientModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  
  
        
],
exports     : [
  ProduitMFComponent,
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
export class ProduitMfModule { }
