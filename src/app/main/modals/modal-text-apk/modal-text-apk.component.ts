import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { GlobaleService } from 'app/main/service/globale.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-modal-text-apk',
  templateUrl: './modal-text-apk.component.html',
  styleUrls: ['./modal-text-apk.component.scss']
})
export class ModalTextApkComponent implements OnInit {

  
  prod={
    id:null, 
    value:'', 
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
      this.prod.value = data.event.value;         
      
    }
  }

  ngOnInit() {
    this.base_url=this.api.base_Url_Api_Bo;
  }
 
 
  
  async Updatemodif(){
    this.api.updatText(this.prod).pipe().subscribe((data: any) => {
      if (data) {
          this.toastr.success('enregistrer', 'Donnée');
          window.location.reload();
      }
    },(error) => {
      this.toastr.error(error.message,'Erreur'); 
    }); 
  }

}
