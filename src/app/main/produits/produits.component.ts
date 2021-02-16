import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatSort, MAT_DIALOG_DATA } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';  
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { GlobaleService } from '../service/globale.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiPrestaService } from '../service/Api-Bd-Presta/api-presta.service';
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
  url: any;
  liste: any = [];
  prix: any;
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

  dataMise : {
    id_product: '',
    statue: 0
  }

  statue :any;

  displayedColumns: string[] = ['position', 'nom','prix','id_category','Image','actions1'];
  searchKey: string;

  @ViewChild(MatPaginator,  {static: true}, ) paginator: MatPaginator;
  @ViewChild(MatSort,  {static: true}, ) sort: MatSort;

  constructor(public servGlobal : GlobaleService,
              public servPresta : ApiPrestaService,
              public route: Router,
              private toastr: ToastrService,
              public dialog: MatDialog) {}
  ngOnInit() {
    this.ListeProduit();
  }

 

  async ListeProduit() {
    await this.ListeProdMise();
   await this.servPresta.getAllProduit().subscribe(async results => {
     results = results.body;
    //  console.log("les donnéer", results);
     await results.forEach((element, index) => {
       if(this.liste.includes(element.id_product)) {
        results[index].active = 0;
       }
     });
 
     await results.forEach(async (element, index) => {
      results[index]['link'] = `http://` + `${element.domain}` + `${element.physical_uri}` +  `${element.id_image}` + '-' + `home_default` + '/' + `${element.link_rewrite}` + `.jpg`;
      //console.log(     results[index]['link']);
      results[index]['lien'] =  `http://` + `${element.domain}` + `${element.physical_uri}` + 'accueil' + '/' +  `${element.id_product}` + '-' + `${element.id_product_attribute}` + '-' + `${element.link_rewrite}` + `.html#` + '/' + `${element.id_attribute}` + '.' + 'couleur' + '-' + `${element.link_rewrite}`;
     results[index]['color_pr'] = element.color;
     results[index]['image_url'] =  `http://` + `${element.domain}` + `${element.physical_uri}` +  'img/co/' + `${element.id_attribute}` + '.jpg' ;
     results[index]['couleur'] = element.id_product;
     this.prix = element.meta_title.split("|")
     results[index]['price'] = this.prix[2];
     index++;
      });

    this.listProduit = new MatTableDataSource(results);
    this.listProduit.sort = this.sort;
    this.listProduit.paginator = this.paginator;
    
    });
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

}


// recuperation(donner) {
//   console.log("Donner", donner);
// donner.etat = !donner.etat;
// // donner.etat = false;
//  this.servGlobal.UpdatProduit(donner.id,donner).subscribe(results=> {
//   if(results) {
//     console.log("ok");
//     this.toastr.success('Donner bien modifier', 'Success');
//     this.ListeProduit();
//   } else {
//     this.toastr.warning('Il y a une ereeur', 'Erreur')
//   }
// }, 
// (error) => {
//   if(error.status === 501) {
//     console.log("Erreur", error.status)
//     this.toastr.warning('Il y a une champ vide', 'Erreur')
//   }else {
//     console.log("Erreur Trouver")
//   }

// }
// )

// }

recuperation(donner) {
console.log(donner);
this.statue = 0;
let model={
  id:donner
}
  this.servPresta.insertionProduit(model).subscribe(results => {
    if (results.status == 200) {
      console.log('Message retour', results);
      this.toastr.success('Pris en compte', 'Changement');
      this.ListeProduit();
    }
    else {
      console.log("Il y a une erreur");
      this.toastr.warning('Cette numéro de product existe déja dans la table!', 'Code produit');
    }
  },
  );
}

ListeProdMise() {
this.servPresta.getProduitMise().subscribe(results => {
  this.liste = results.body;
  console.log("Liste mise en avant", this.liste);
})
}

}