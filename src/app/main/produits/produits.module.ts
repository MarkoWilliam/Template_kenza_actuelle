import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../service/auth/auth.guard';
import { ProduitsComponent } from './produits.component';
import { MatCheckboxModule, MatInputModule, MatIconModule, MatSortModule, MatTableModule } from '@angular/material' 
import { MatPaginatorModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
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
      BrowserModule    
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
    BrowserModule     
  ]
})

export class ProduitsModule
{
}
