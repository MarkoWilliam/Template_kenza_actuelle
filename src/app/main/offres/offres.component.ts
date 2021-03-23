import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatSort,MatSortable,MatPaginator,MatTableDataSource,MatDialog,MatDialogConfig} from '@angular/material';
import { GlobaleService } from 'app/main/service/globale.service';
import { ToastrService } from 'ngx-toastr';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
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
  displayedColumns: string[] = ['index','Image','Titre','Texte','Lien','Action'];
  showLoader: boolean;
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
      this.api.getOffres().subscribe((data: any) => { 
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
      this.dialog.open(DialogExampleComponent,{
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
    this.dialog.open(DialogExampleComponent,{
      width:'35%',
      data :{element}
    }); 
  }


  majStatEvent(code_offre,etat){
    let newetat = !etat;
    let model={
      code_offre:code_offre,
      etat:newetat
    }
    this.api.updateEtat(model).subscribe(results=> {
      if(results) { 
        this.toastr.success('Mis à jours effectuer', 'Success');
      }
    }, 
    (error) => {
        this.toastr.warning(error.message, 'Erreur');
    });
  }
}