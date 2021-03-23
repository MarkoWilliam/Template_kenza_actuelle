import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatSort,MatSortable,MatPaginator,MatTableDataSource,MatDialog,MatDialogConfig} from '@angular/material';
import { GlobaleService } from 'app/main/service/globale.service';
import { NotificationModalComponent } from '../modals/notification-modal/notification-modal.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit{
   listnotif: MatTableDataSource<any>;
   showLoader: boolean;
   searchKey: string;
   displayedColumns: string[] = ['index','Date','Titre','Contenu','Produit','Action'];
  constructor(
      private dialog: MatDialog,
      private api:GlobaleService,
      private http:HttpClient,
      private toastr: ToastrService,
  ) { }
   
  @ViewChild(MatSort, {static: true})
  sort: MatSort;

  @ViewChild(MatPaginator, {static: true})
  paginator: MatPaginator;



  ngOnInit() 
  {this.recupListNotification()}


  async recupListNotification(){
    this.showLoader = true;
    this.api.getAllNotification().pipe().subscribe((data: any) => { 
      if(data){
        this.listnotif = new MatTableDataSource(data.body);
        this.listnotif.sort = this.sort;
        this.listnotif.paginator = this.paginator;
        this.showLoader = false;
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

 /*  majnotif(majnotif){
    console.log(majnotif);
    this.dialog.open(NotificationModalComponent,{
      width:'35%',
      data :{majnotif}
    }); 
  } */
  majStatNotif(id,etat){
    let newetat = !etat;
    let model={
      id:id,
      etat:newetat
    }
    this.api.majEtatNotif(model).subscribe(results=> {
      if(results) { 
        this.toastr.success('Mis à jours effectuer', 'Success');
      }
    }, 
    (error) => {
        this.toastr.warning(error.message, 'Erreur');
    });
  }

  renVnotif(notif){
    let etat = !notif.etat;
    if(etat == false){
      this.api.renVnotif(notif).subscribe(results=> {
        if(results) { 
          this.toastr.success('Renvoie avec succès', 'Success');
          this.recupListNotification();
        }
      }, 
      (error) => {
          this.toastr.warning(error.message, 'Erreur');
      }); 
    }else{
      this.toastr.warning("Renvoie impossible,activer d'abord la notification", 'Erreur');
    }
  }
}