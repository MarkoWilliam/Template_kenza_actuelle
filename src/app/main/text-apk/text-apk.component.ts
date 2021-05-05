import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatSort,MatSortable,MatPaginator,MatTableDataSource,MatDialog,MatDialogConfig} from '@angular/material';
import { ButtonTexteComponent } from 'app/main/modals/button-texte/button-texte.component';
import { GlobaleService } from 'app/main/service/globale.service';
import { ToastrService } from 'ngx-toastr';
import { ModalTextApkComponent } from '../modals/modal-text-apk/modal-text-apk.component';

@Component({
  selector: 'app-text-apk',
  templateUrl: './text-apk.component.html',
  styleUrls: ['./text-apk.component.scss']
})
export class TextAPKComponent implements OnInit {

 
  listeelement: MatTableDataSource<any>;
  base_url="";
  searchKey: string;
  displayedColumns: string[] = ['index','Texte','Libelle' ,'Action'];
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
      this.api.getTexteApk().subscribe((data: any) => { 
        if(data){ 
          this.listeelement = new MatTableDataSource(data);
          this.listeelement.sort = this.sort;
          this.listeelement.paginator = this.paginator;
          this.showLoader = false;
          console.log("******",      this.listeelement)
        }
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
    this.dialog.open(ModalTextApkComponent,{
      width:'35%',
      data :{event}
    }); 
  }


 

}
