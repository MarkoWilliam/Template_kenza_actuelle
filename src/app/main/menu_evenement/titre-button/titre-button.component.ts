import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatSort,MatSortable,MatPaginator,MatTableDataSource,MatDialog,MatDialogConfig} from '@angular/material';
import { ButtonTitreComponent } from 'app/main/modals/button-titre/button-titre.component';
import { GlobaleService } from 'app/main/service/globale.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-titre-button',
  templateUrl: './titre-button.component.html',
  styleUrls: ['./titre-button.component.scss']
})
export class TitreButtonComponent implements OnInit {
  listeelement: MatTableDataSource<any>;
  base_url="";
  searchKey: string;
  displayedColumns: string[] = ['index', 'Titre','libellee','Texte','Bouton','lien', 'Action'];
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
      this.api.getListTitre().subscribe((data: any) => { 
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
      this.dialog.open(ButtonTitreComponent,{
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
  
  majevent(event){
    this.dialog.open(ButtonTitreComponent,{
      width:'35%',
      data :{event}
    }); 
  }


  majStatEvent(id,etat){
    let newetat = !etat;
    let model={
      id:id,
      etat:newetat
    }
    this.api.majEtatEvent(model).subscribe(results=> {
      if(results) { 
        this.toastr.success('Mis à jours effectuer', 'Success');
      }
    }, 
    (error) => {
        this.toastr.warning(error.message, 'Erreur');
    });
  }

}
