import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobaleService } from 'app/main/service/globale.service';
import { ToastrService } from 'ngx-toastr';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-nos-service-modal',
  templateUrl: './nos-service-modal.component.html',
  styleUrls: ['./nos-service-modal.component.scss']
})
export class NosServiceModalComponent implements OnInit {

  mode=0;
  donner: any;
  offre = {
    code_service: null,
    nom_image: '',
    etat: '', 
    lien: '',
  };
  base_url="";
  images=null;
  constructor(private route: ActivatedRoute, 
    private api: GlobaleService,
    private toastr: ToastrService,
    // Récuperer les données envoyées depuis offreuit component
    @Inject(MAT_DIALOG_DATA) public data: {element}) { 
      if(data.element) {
        this.donner = data.element;
        this.offre.code_service = data.element.code_service;
        this.offre.nom_image = data.element.nom_image;
        this.offre.etat = data.element.etat;
        this.offre.lien = data.element.lien;
        this.mode=1;
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
      this.api.uploadimage(this.images).pipe().subscribe((data: any) => { 
        if(data){
           this.offre.nom_image=data.name_img;
        }
        this.api.insertService(this.offre).pipe().subscribe((data: any) => {
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
          this.api.updateOffre(this.offre).pipe().subscribe((data: any) => {
            if (data) {
                this.toastr.success('enregistrer', 'Donnée');
                window.location.reload();
            }
          },(error) => {
            this.toastr.error(error.message,'Erreur'); 
          }); 
        }else{
          this.api.uploadimage(this.images).pipe().subscribe((data: any) => { 
            if(data){
               this.offre.nom_image=data.name_img;
            }
            this.api.updateService(this.offre).pipe().subscribe((data: any) => {
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
