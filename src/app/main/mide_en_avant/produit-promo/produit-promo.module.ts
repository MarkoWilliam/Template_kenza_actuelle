import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitPromoComponent } from './produit-promo.component';
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
      path     : 'produitPromos',
      component: ProduitPromoComponent,
      canActivate: [AuthGuard],
  }
];

@NgModule({
  declarations: [ProduitPromoComponent],
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
  ],
  exports : [
    ProduitPromoComponent
  ]
})
export class ProduitPromoModule { }
