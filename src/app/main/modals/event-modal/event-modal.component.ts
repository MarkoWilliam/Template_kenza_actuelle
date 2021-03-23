import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { GlobaleService } from 'app/main/service/globale.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss']
})
export class EventModalComponent implements OnInit {
  prod={
    id_event:null,
    nom_image:'',
    titre:'',
    texte:'',
    lien:'',
    etat:1
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
      //console.log(data);
     
      this.prod.etat = data.event.etat;
      this.prod.id_event = data.event.id_event;
      this.prod.lien = data.event.lien;
      this.prod.nom_image = data.event.nom_image;     
      this.prod.texte = data.event.texte;    
      this.prod.titre = data.event.titre;    
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
        this.api.uploadimage(this.images).pipe().subscribe(async (data: any) => { 
          if(data){
             this.prod.nom_image=await data.file.filename;
          }
          this.api.insertevent(this.prod).pipe().subscribe((data: any) => {
            if (data) {
                this.toastr.success('enregistrer', 'Donnée');
                window.location.reload();
            }
          },(error) => {
            this.toastr.error(error.message,'Erreur'); 
          }); 
       });
      }else{         
          if(this.images==null){
            //console.log( this.prod.nom_image);
            this.api.updateevent(this.prod).pipe().subscribe((data: any) => {
              if (data) {
                  this.toastr.success('enregistrer', 'Donnée');
                  window.location.reload();
              }
            },(error) => {
              this.toastr.error(error.message,'Erreur'); 
            }); 
          }else{
            this.api.uploadimage(this.images).pipe().subscribe(async (data: any) => { 
              if(data){
                 this.prod.nom_image=await data.file.filename;
              }
              this.api.updateevent(this.prod).pipe().subscribe((data: any) => {
                if (data) {
                    this.toastr.success('enregistrer', 'Donnée');
                    window.location.reload();
                }
              },(error) => {
                this.toastr.error(error.message,'Erreur'); 
              }); 
           });
          }
      }
  }
}

