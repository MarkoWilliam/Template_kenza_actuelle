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
  selector: 'app-produit-mf',
  templateUrl: './produit-mf.component.html',
  styleUrls: ['./produit-mf.component.scss']
})


export class ProduitMFComponent implements OnInit {
  url: any;
  liste: any = [];
  prix: any;
  donnerProduit: any;
  idProduit: number;
  checked: boolean = false;
  indeterminate:boolean = false;
  disabled:boolean = false;
  listMF: MatTableDataSource<any>;
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

  displayedColumns: string[] = ['position', 'nom','prix','Image','actions1'];
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
    this.showLoader = true;
   await this.servPresta.ListProduitMF().subscribe(async results => {
     results = results.body;
     await results.forEach((element, index) => {
       if(this.liste.includes(element.id_product)) {
        results[index].active = 0;
       }
     });
 
     await results.forEach(async (element, index) => {
      results[index]['url_image'] = `http://` + `${element.domain}` + `${element.physical_uri}` +  'modules/wkshopthelook/views/img/looks/'  + `${element.img_name}` + '.jpg';
      results[index]['image_bc'] =  `http://` + `${element.domain}` + `${element.physical_uri}` +  'img/co/' + `${element.id_attribute}` + '.jpg' ;
      results[index]['lien'] = `http://` + `${element.domain}` + `${element.physical_uri}` + `wkshopcollection/1/collection-mere-fille-kenza?wk_id_look=` + `${element.id_look}`;
     this.prix = element.meta_title.split("|")
     results[index]['price'] = this.prix[2];
       this.url = results[index]['url_image'] ;
       results[index]['name_produit'] = element.name;
       index++;
      });

    this.listMF = new MatTableDataSource(results);
    this.listMF.sort = this.sort;
    this.listMF.paginator = this.paginator;
    this.showLoader = false;
    });
}




applyFilter() {
  this.listMF.filter =this.searchKey.trim().toLowerCase();
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
    this.servPresta.getProduitMise().subscribe(results => {
      this.liste = results.body;
      resolve(results.body)
    })
  }) 
  }

  actualiser() {
    this.ListeProduit();
  }
}
