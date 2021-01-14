import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatSort,MatSortable,MatPaginator,MatTableDataSource,MatDialog,MatDialogConfig} from '@angular/material';
import { GlobaleService } from 'app/main/service/globale.service';
import { EventModalComponent } from '../modals/event-modal/event-modal.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent{
  listeelement: MatTableDataSource<any>;
  base_url="";
  searchKey: string;
  displayedColumns: string[] = ['index','nom','ID Categorie','Background Image','Texte','Postion Texte','Titre Evenement','Contenu Evenement'];


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
      this.api.recupelement(3).pipe().subscribe((data: any) => { 
        if(data){
          /*  console.log(data); */
          this.listeelement = new MatTableDataSource(data);
          this.listeelement.sort = this.sort;
          this.listeelement.paginator = this.paginator;
        }
     });
  }

  newnevent(){
      this.dialog.open(EventModalComponent,{
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