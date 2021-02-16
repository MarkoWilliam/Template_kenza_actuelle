import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatSort, MAT_DIALOG_DATA } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';  
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GlobaleService } from 'app/main/service/globale.service';
import { ApiPrestaService } from 'app/main/service/Api-Bd-Presta/api-presta.service';

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
  selector: 'app-produit-promo',
  templateUrl: './produit-promo.component.html',
  styleUrls: ['./produit-promo.component.scss']
})
export class ProduitPromoComponent implements OnInit {


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
  showLoader: boolean;
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
    this.listProduit ;
  }

 

  async ListeProduit() {
    await this.ListeProdMise();
    this.showLoader = true;
   await this.servPresta.getAllPromotion().subscribe(async results => {
     results = results.body;
     console.log("les donnéer", results);
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
    this.showLoader = false;
    });
}




applyFilter() {
  this.listProduit.filter =this.searchKey.trim().toLowerCase();
}

onSearchClear() {
  this.searchKey="";
  this.applyFilter();
}



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
      this.ListeProdMise();
    }
    else {
      console.log("Il y a une erreur");
      this.toastr.warning('Cette numéro de product existe déja dans la table!', 'Code produit');
    }
  },
  );
}

ListeProdMise() {
return new Promise((resolve) => {
  this.servPresta.getProduitMise().subscribe(results => {
    this.liste = results.body;
    console.log("Liste mise en avant", this.liste);
    resolve(results.body)
    //console.log("Liste mise en avant", this.listePro);
  })
}) 
}

  async actualiser() {
 await this.ListeProduit();
}

}
