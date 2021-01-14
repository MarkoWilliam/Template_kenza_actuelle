import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatSort,MatSortable,MatPaginator,MatTableDataSource,MatDialog,MatDialogConfig} from '@angular/material';
import { GlobaleService } from 'app/main/service/globale.service';
import { NotificationModalComponent } from '../modals/notification-modal/notification-modal.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit{
   listnotif: MatTableDataSource<any>;
  
   searchKey: string;
   displayedColumns: string[] = ['index','Date','Titre','Contenu','Produit'];
  constructor(
      private dialog: MatDialog,
      private api:GlobaleService,
      private http:HttpClient,
  ) { }
   
  @ViewChild(MatSort, {static: true})
  sort: MatSort;

  @ViewChild(MatPaginator, {static: true})
  paginator: MatPaginator;



  ngOnInit() 
  {this.recupListNotification()}


  async recupListNotification(){
    this.api.getAllNotification().pipe().subscribe((data: any) => { 
      if(data){
        this.listnotif = new MatTableDataSource(data.body);
        this.listnotif.sort = this.sort;
        this.listnotif.paginator = this.paginator;
      }
   });
  
  }

  newnotification(){
      this.dialog.open(NotificationModalComponent,{
        width:'35%',
        data :{}
      }); 
  }

  applyFilter() {
    this.listnotif.filter =this.searchKey.trim().toLowerCase();
  }
  
  onSearchClear() {
    this.searchKey="";
    this.applyFilter();
  }
}