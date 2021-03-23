import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatSort,MatSortable,MatPaginator,MatTableDataSource,MatDialog,MatDialogConfig} from '@angular/material';
import { GlobaleService } from 'app/main/service/globale.service';
import { ToastrService } from 'ngx-toastr';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { NosServiceModalComponent } from '../modals/nos-service-modal/nos-service-modal.component';

@Component({
  selector: 'app-nos-service',
  templateUrl: './nos-service.component.html',
  styleUrls: ['./nos-service.component.scss']
})
export class NosServiceComponent implements OnInit {

  listeelement: MatTableDataSource<any>;
  base_url="";
  searchKey: string;
  showLoader: boolean;
  displayedColumns: string[] = ['index','Image','Lien', 'Action'];
  constructor(
      private dialog: MatDialog,
      private api:GlobaleService,
      private toastr: ToastrService,
     
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
    this.showLoader = true;
      this.api.getService().subscribe((data: any) => { 
        if(data){
          /*  console.log(data); */
          this.listeelement = new MatTableDataSource(data);
          this.listeelement.sort = this.sort;
          this.listeelement.paginator = this.paginator;
          this.showLoader = false;
        }
     });
    }

  newnevent(){
      this.dialog.open(NosServiceModalComponent,{
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

  
  majevent(element){
    this.dialog.open(NosServiceModalComponent,{
      width:'35%',
      data :{element}
    }); 
  }


  majStatEvent(code_service,etat){
    let newetat = !etat;
    let model={
      code_service:code_service,
      etat:newetat
    }
    this.api.updateServiceEtat(model).subscribe(results=> {
      if(results) { 
        this.toastr.success('Mis à jours effectuer', 'Success');
      }
    }, 
    (error) => {
        this.toastr.warning(error.message, 'Erreur');
    });
  }

}
