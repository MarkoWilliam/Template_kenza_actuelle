import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitCurvyComponent } from './produit-curvy.component';
import { AuthGuard } from 'app/main/service/auth/auth.guard';
import { MatCheckboxModule, MatInputModule, MatIconModule, MatSortModule, MatTableModule, MatDialogModule, MatGridListModule, MatCardModule, MatPaginatorModule } from '@angular/material' 
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar'
const routes = [
  {
      path     : 'produitCurvy',
      component: ProduitCurvyComponent,
      canActivate: [AuthGuard],
  }
];

@NgModule({
  declarations: [ProduitCurvyComponent],
  imports: [
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
  ],exports     : [
    ProduitCurvyComponent,
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
export class ProduitCurvyModule { }
