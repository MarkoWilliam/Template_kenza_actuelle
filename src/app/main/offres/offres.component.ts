import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatSort,MatSortable,MatPaginator,MatTableDataSource,MatDialog,MatDialogConfig} from '@angular/material';
import { GlobaleService } from 'app/main/service/globale.service';
import { OffresModalComponent } from '../modals/offres-modal/offres-modal.component';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.scss']
})
export class OffresComponent implements OnInit {

  listeelement: MatTableDataSource<any>;
  base_url="";
  searchKey: string;
  displayedColumns: string[] = ['index','nom','ID Categorie','Background Image','Texte','Postion Texte'];

  constructor(
      private dialog: MatDialog,
      private api:GlobaleService,
     
  ){}

  @ViewChild(MatSort, {static: true})
  sort: MatSort;

  @ViewChild(MatPaginator, {static: true})
  paginator: MatPaginator;

  ngOnInit() 
  { this.base_url=this.api.base_Url_Api_Bo;
      this.recupListElement();
  }

  async recupListElement(){
      this.api.recupelement(5).pipe().subscribe((data: any) => { 
        if(data){
          /*  console.log(data); */
          this.listeelement = new MatTableDataSource(data);
          this.listeelement.sort = this.sort;
          this.listeelement.paginator = this.paginator;
        }
     });
    }

  newnevent(){
      this.dialog.open(OffresModalComponent,{
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