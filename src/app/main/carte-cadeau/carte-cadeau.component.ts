import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatSort,MatSortable,MatPaginator,MatTableDataSource,MatDialog,MatDialogConfig} from '@angular/material';
import { CartecardeauModalComponent } from '../modals/cartecardeau-modal/cartecardeau-modal.component';
import { GlobaleService } from '../service/globale.service';

@Component({
  selector: 'app-carte-cadeau',
  templateUrl: './carte-cadeau.component.html',
  styleUrls: ['./carte-cadeau.component.scss']
})
export class CarteCadeauComponent implements OnInit {

  listeelement: MatTableDataSource<any>;
  base_url="";
  searchKey: string;
  displayedColumns: string[] = ['index','nom','ID Categorie','Background Image','Texte','Postion Texte'];

  constructor(
    private dialog: MatDialog,
    private api:GlobaleService,
    
  ) { }

  @ViewChild(MatSort, {static: true})
  sort: MatSort;

  @ViewChild(MatPaginator, {static: true})
  paginator: MatPaginator;

  ngOnInit() {
    this.base_url=this.api.base_Url_Api_Bo;
    this.recupListElement();
  }
  async recupListElement(){
    this.api.recupelement(2).pipe().subscribe((data: any) => { 
      if(data){
        /*  console.log(data); */
        this.listeelement = new MatTableDataSource(data);
        this.listeelement.sort = this.sort;
        this.listeelement.paginator = this.paginator;
      }
   });
  }
  newelement(){
    this.dialog.open(CartecardeauModalComponent,{
      width:'35%',
      data :{}
    }); 
  }
  applyFilter() {
    this.listeelement.filter =this.searchKey.trim().toLowerCase();
  }
  
  onSearchClear() {
    this.searchKey="";
    this.applyFilter();
  }
}
