import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { GlobaleService } from 'app/main/service/globale.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-carte-metisse-modal',
  templateUrl: './carte-metisse-modal.component.html',
  styleUrls: ['./carte-metisse-modal.component.scss']
})
export class CarteMetisseModalComponent implements OnInit {

  prod={
    id:'', 
    nom_image: '',
    etat:1,  
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
      this.prod.nom_image = data.event.nom_image;    
      this.prod.etat = data.event.etat;   
      
    }
  }

  ngOnInit() {
    this.base_url=this.api.base_Url_Api_Bo;
  }
 
  onFileSelected(event){
    const file =event.target.files[0];
    this.images = file;
    this.api.uploadimage(this.images).subscribe(async (data: any) => { 
      console.log("File 1",this.images);
      if(data){
        console.log("************** image", data);
          this.prod.nom_image=   data.file.filename;
      }; } )
  }
  
  async Updatemodif(){ 
 
            this.api.uploadimage(this.images).pipe().subscribe(async (data: any) => { 
              if(data){
                 this.prod.nom_image=await data.file.filename;
              }
              this.api.updateCarte(this.prod).pipe().subscribe((data: any) => {
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
