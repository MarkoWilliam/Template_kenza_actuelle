import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatSort, MAT_DIALOG_DATA } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';  
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { GlobaleService } from '../service/globale.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
//import { locale as english } from './i18n/en';
//import { locale as turkish } from './i18n/tr';
export interface DialogData {
  animal: string;
  name: string;
}

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
  donnerProduit: any;
  idProduit: number;
  checked: boolean = false;
  indeterminate:boolean = false;
  disabled:boolean = false;
  listProduit: MatTableDataSource<any>;
  dataProduit : {
    id: 0,
    nom: '',
    couleur: '',
    stock_dispo: '',
    statue: '',
    prix: '',
    prix_solde: '',
    etat: '',
    image: '',
  }


  displayedColumns: string[] = ['position', 'nom', 'couleur', 'stock_dispo','image', 'statue', 'prix', 'prix_solde','etat', 'actions'];
  searchKey: string;

  @ViewChild(MatPaginator,  {static: true}, ) paginator: MatPaginator;
  @ViewChild(MatSort,  {static: true}, ) sort: MatSort;

  constructor(public servGlobal : GlobaleService,public route: Router,
              private toastr: ToastrService,
              public dialog: MatDialog) {}
  ngOnInit() {
    this.ListeProduit();
  }

 
//   changeValue() {
//   this.etat
//  }

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
openModal(element) {
  this.dialog.open(DialogExampleComponent, {data: element})
// onvoie id seulement
//  this.route.navigate(['/dialog'], { queryParams: { order: 'elementId' } });
}

// Updatemodif(idProduit, etat) {
//   console.log(idProduit, etat);
//   this.UpdatemodifProduit(idProduit, etat);
// }

UpdatemodifProduit(produitId) {
  this.servGlobal.UpdatProduitck(produitId,this.etat).subscribe(results=> {
    if(results) {
      console.log("ok");
      this.toastr.success('Donner bien modifier', 'Success')
    } else {
      this.toastr.warning('Il y a une ereeur', 'Erreur')
    }
  }, 
  (error) => {
    if(error.status === 501) {
      console.log("Erreur", error.status)
      this.toastr.warning('Il y a une champ vide', 'Erreur')
    }else {
      console.log("Erreur Trouver")
    }

 }
  )
}

recuperation(donner) {
  console.log("Donner", donner);
  
// this.donnerProduit = donner;
//  this.donnerProduit.etat === true
//  if(donner.etat) {
//    donner.etat = false
//  } else {
//   donner.etat = true
//  }
donner.etat = !donner.etat;
// donner.etat = false;
 this.servGlobal.UpdatProduit(donner.id,donner).subscribe(results=> {
  if(results) {
    console.log("ok");
    this.toastr.success('Donner bien modifier', 'Success')
  } else {
    this.toastr.warning('Il y a une ereeur', 'Erreur')
  }
}, 
(error) => {
  if(error.status === 501) {
    console.log("Erreur", error.status)
    this.toastr.warning('Il y a une champ vide', 'Erreur')
  }else {
    console.log("Erreur Trouver")
  }

}
)

}


}