import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../service/auth/auth.guard';
import { ProduitsComponent } from './produits.component';
import { MatCheckboxModule, MatIconModule, MatTableModule } from '@angular/material' 
import { MatPaginatorModule } from '@angular/material';

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
      MatCheckboxModule

  ],
  exports     : [
    ProduitsComponent,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatCheckboxModule
  ]
})

export class ProduitsModule
{
}
