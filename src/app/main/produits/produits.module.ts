import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits.component';



const routes = [
  {
      path     : 'produits',
      component: ProduitsComponent
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
