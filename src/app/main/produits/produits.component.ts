import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';  
import { GlobaleService } from '../service/globale.service';
//import { locale as english } from './i18n/en';
//import { locale as turkish } from './i18n/tr';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent  
{
  listProduit: MatTableDataSource<any>;
 
  displayedColumns: string[] = ['position', 'nom', 'couleur', 'stock_dispo', 'statue', 'prix', 'prix_solde', 'actions'];
  searchKey: string;

  @ViewChild(MatPaginator,  {static: true}, ) paginator: MatPaginator;
  @ViewChild(MatSort,  {static: true}, ) sort: MatSort;
  constructor(public servGlobal : GlobaleService) {}
  ngOnInit() {
    this.ListeProduit();
  }


ListeProduit() {
  this.servGlobal.listeProduit().subscribe(results => {
   this.listProduit = new MatTableDataSource(results.body);
   this.listProduit.sort = this.sort;
   this.listProduit.paginator = this.paginator;
   console.log("list produit", this.listProduit);
   console.log("list produit pagination",    this.listProduit.paginator);
  })
}
 

applyFilter() {
  this.listProduit.filter =this.searchKey.trim().toLowerCase();
}

onSearchClear() {
  this.searchKey="";
  this.applyFilter();
}
}


