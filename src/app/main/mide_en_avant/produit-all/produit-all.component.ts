import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatSort, MAT_DIALOG_DATA } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';   
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
  selector: 'app-produit-all',
  templateUrl: './produit-all.component.html',
  styleUrls: ['./produit-all.component.scss']
})
export class ProduitAllComponent implements OnInit {

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

  displayedColumns: string[] = ['position', 'nom','date','prix','id_category','Image','actions1'];
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
   await this.servGlobal.getAllProduit().subscribe(async results => {
     results = results.body; 

     await results.forEach(async (element, index) => {
      if(this.liste.includes(element.id_product)) {
        results[index].active = 1; 
       } else {
        results[index].active = 0;
       }
       results[index]['link'] = `https://` + `${element.domain}` + `${element.physical_uri}` +  `${element.id_image}` + '-' + `home_default` + '/' + `${element.link_rewrite}` + `.jpg`;
       results[index]['date'] = element.date_add;
       console.log("Date",        results[index]['date'].split('').join('') );
       results[index]['lien'] =  `https://` + `${element.domain}` + `${element.physical_uri}` + 'accueil' + '/' +  `${element.id_product}` + '-' + `${element.id_product_attribute}` + '-' + `${element.link_rewrite}` + `.html#` + '/' + `${element.id_attribute}` + '.' + 'couleur' + '-' + `${element.link_rewrite}`;
      results[index]['color_pr'] = element.color;
      results[index]['image_url'] =  `https://` + `${element.domain}` + `${element.physical_uri}` +  'img/co/' + `${element.id_attribute}` + '.jpg' ;
      this.prix = element.meta_title.split("|")
      results[index]['price'] = this.prix[2];   
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
  this.servGlobal.insertionNew(model).subscribe(results => {
    if (results.status == 200) {
      this.toastr.success('Pris en compte', 'Changement');
      this.ListeProdMise();
    }
    else {
      this.toastr.warning('Cette numéro de product existe déja dans la table!', 'Code produit');
    }
  },
  
  );
}

ListeProdMise() {
return new Promise((resolve) => {
  this.servGlobal.getProduitMise().subscribe(results => {
    this.liste = results.body;
    resolve(results.body) 
  })
}) 
}

  async actualiser() {
 await this.ListeProduit();
}

checkValue(event: any){
  if(  event === "A") {
    this.toastr.warning('Contactez l\'administrateur du site!', 'S\'il vous plait'); 
  } 
}
}
