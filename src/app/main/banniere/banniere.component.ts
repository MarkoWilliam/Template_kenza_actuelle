import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatSort,MatSortable,MatPaginator,MatTableDataSource,MatDialog,MatDialogConfig} from '@angular/material';
import { BanniereModalComponent } from '../modals/banniere-modal/banniere-modal.component';
import { GlobaleService } from 'app/main/service/globale.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-banniere',
  templateUrl: './banniere.component.html',
  styleUrls: ['./banniere.component.scss']
})
export class BanniereComponent implements OnInit {

  listeelement: MatTableDataSource<any>;
  base_url="";
  searchKey: string;
  showLoader: boolean;
displayedColumns: string[] = ['index','Image','N° banniere','Nom Page','Action'];
  
  constructor(
    private dialog: MatDialog,
    private api:GlobaleService,
    private toastr: ToastrService,
    
  ) { }


  @ViewChild(MatSort, {static: true})
    sort: MatSort;

  @ViewChild(MatPaginator, {static: true})
    paginator: MatPaginator;


  ngOnInit() 
  { this.base_url=this.api.base_Url_Api_Bo;
    this.recupListElement();
  }


  async recupListElement(){
    this.showLoader = true;
    this.api.getAllBan().subscribe((data: any) => { 
      if(data){
        /*  console.log(data); */
        this.listeelement = new MatTableDataSource(data);
        this.listeelement.sort = this.sort;
        this.listeelement.paginator = this.paginator;
        this.showLoader = false;
      }
   });
  }
  newbanniere(){
    this.dialog.open(BanniereModalComponent,{
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



  majBann(ban){
    this.dialog.open(BanniereModalComponent,{
      width:'35%',
      data :{ban}
    }); 
  }


  majStatban(id,etat){
    let newetat = !etat;
    let model={
      id:id,
      etat:newetat
    }
   
    this.api.majEtatBan(model).subscribe(results=> {
      if(results) { 
        this.toastr.success('Mis à jours effectuer', 'Success');
      }
    }, 
    (error) => {
        this.toastr.warning(error.message, 'Erreur');
    });
  }
}
