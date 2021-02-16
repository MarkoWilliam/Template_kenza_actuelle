import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatSort,MatSortable,MatPaginator,MatTableDataSource,MatDialog,MatDialogConfig} from '@angular/material';
import { GlobaleService } from 'app/main/service/globale.service';
import { ToastrService } from 'ngx-toastr';
import { NewUserModalComponent } from '../modals/new-user-modal/new-user-modal.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  listuser: MatTableDataSource<any>;
  searchKey: string;
  displayedColumns: string[] = ['index','Nom','Prenom','Email','Type','Action'];
  constructor(
    private dialog: MatDialog,
    private api:GlobaleService,
    private toastr: ToastrService,
  ) { }

  @ViewChild(MatSort, {static: true})
  sort: MatSort;

  @ViewChild(MatPaginator, {static: true})
  paginator: MatPaginator;

  ngOnInit() {
    this.recupListeUser();
  }

  async recupListeUser(){
    this.api.listeUser().subscribe((data: any) => { 
     
      if(parseInt(data.length)>0){
        //console.log(data);
        this.listuser = new MatTableDataSource(data);
        this.listuser.sort = this.sort;
        this.listuser.paginator = this.paginator; 
      }
   });
  }

  newUser(){
    this.dialog.open(NewUserModalComponent,{
      width:'35%',
      data :{}
    }); 
  }

  applyFilter() {
    this.listuser.filter =this.searchKey.trim().toLowerCase();
  }
  
  onSearchClear() {
    this.searchKey="";
    this.applyFilter();
  }


  majuser(user){
    //console.log(user);
    this.dialog.open(NewUserModalComponent,{
      width:'35%',
      data :{user}
    }); 
  }
  majStatUser(id,etat){
    let newetat = !etat;
    let model={
      id:id,
      etat:newetat
    }
    this.api.majEtatUser(model).subscribe(results=> {
      if(results) { 
        this.toastr.success('Mis à jours effectuer', 'Success');
      }
    }, 
    (error) => {
        this.toastr.warning(error.message, 'Erreur');
    });
  }
}
