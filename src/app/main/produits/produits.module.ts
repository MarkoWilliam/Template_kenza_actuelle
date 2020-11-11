import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../service/auth/auth.guard';
import { ProduitsComponent } from './produits.component';



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
      RouterModule.forChild(routes)
  ],
  exports     : [
    ProduitsComponent
  ]
})

export class ProduitsModule
{
}
