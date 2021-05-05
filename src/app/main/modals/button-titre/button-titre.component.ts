import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { GlobaleService } from 'app/main/service/globale.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-button-titre',
  templateUrl: './button-titre.component.html',
  styleUrls: ['./button-titre.component.scss']
})
export class ButtonTitreComponent implements OnInit {

  prod={
    id:null, 
    tittre:'',
    libelle:'',
    texte:'',
    bouton: '', 
    lien: '',
  }
  mode=0;
  images=null;
  base_url=null;
  listTitre: any;
  constructor(
    private api:GlobaleService,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: {event}
  ) {
    if(data.event){ 
      this.prod.id = data.event.id;       
      this.prod.tittre = data.event.tittre;  
      this.prod.libelle = data.event.libelle;   
      this.prod.texte = data.event.texte;  
      this.prod.bouton = data.event.bouton;  
      this.prod.lien = data.event.lien;  
      this.mode = 1; 
      
    }
  }

  ngOnInit() {
    this.base_url=this.api.base_Url_Api_Bo;
    this.list();
  }
 
  onFileSelected(event){
    const file =event.target.files[0];
    this.images = file;
  }
  
  async Updatemodif(){
      if(this.mode==0){
        this.api.insertTittre(this.prod).pipe().subscribe((data: any) => {
          if (data) {
              this.toastr.success('enregistrer', 'Donnée');
              window.location.reload();
          }
        },(error) => {
          this.toastr.error(error.message,'Erreur'); 
        }); 
      }else{         
        this.api.updatTitre(this.prod).pipe().subscribe((data: any) => {
          if (data) {
              this.toastr.success('enregistrer', 'Donnée');
              window.location.reload();
          }
        },(error) => {
          this.toastr.error(error.message,'Erreur'); 
        }); 
      }
  }


  list() {
    this.api.getTexteButton().subscribe((data: any) => { 
      if(data){ 
        this.listTitre =  data;
      }
   });
  }
}
