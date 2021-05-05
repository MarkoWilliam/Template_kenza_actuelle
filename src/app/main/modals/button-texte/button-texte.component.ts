import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { GlobaleService } from 'app/main/service/globale.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-button-texte',
  templateUrl: './button-texte.component.html',
  styleUrls: ['./button-texte.component.scss']
})
export class ButtonTexteComponent implements OnInit {

  prod={
    id:null, 
    texte:'', 
  }
  mode=0;
  images=null;
  base_url=null;
  constructor(
    private api:GlobaleService,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: {event}
  ) {
    if(data.event){ 
      this.prod.id = data.event.id;     
      this.prod.texte = data.event.texte;        
      this.mode = 1; 
      
    }
  }

  ngOnInit() {
    this.base_url=this.api.base_Url_Api_Bo;
  }
 
  onFileSelected(event){
    const file =event.target.files[0];
    this.images = file;
  }
  
  async Updatemodif(){
      if(this.mode==0){
        this.api.insertButton(this.prod).pipe().subscribe((data: any) => {
          if (data) {
              this.toastr.success('enregistrer', 'Donnée');
              window.location.reload();
          }
        },(error) => {
          this.toastr.error(error.message,'Erreur'); 
        });
      }else{         
        this.api.updatButton(this.prod).pipe().subscribe((data: any) => {
          if (data) {
              this.toastr.success('enregistrer', 'Donnée');
              window.location.reload();
          }
        },(error) => {
          this.toastr.error(error.message,'Erreur'); 
        }); 
      }
  }

}
