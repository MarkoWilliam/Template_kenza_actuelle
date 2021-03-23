import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { GlobaleService } from 'app/main/service/globale.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-banniere-modal',
  templateUrl: './banniere-modal.component.html',
  styleUrls: ['./banniere-modal.component.scss']
})
export class BanniereModalComponent implements OnInit {
  prod={
    id_ban:0,
    nom_image:null,
    num_ban:null,
    id_page:null,
    etat:1
  }
  images;
  mode=0;
  base_url=null;

  constructor(
    private api:GlobaleService,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: {ban}
  ) { 
    if(data.ban){
      //console.log(data);
     
      this.prod.etat = data.ban.etat;
      this.prod.id_ban = data.ban.id_ban;
      this.prod.nom_image = data.ban.nom_image;     
      this.prod.num_ban = data.ban.num_ban;    
      this.prod.id_page = data.ban.id_page;    
      this.mode = 1;       
      console.log(" Image", data.ban.nom_image);
    }
  }

  ngOnInit() {
    this.base_url=this.api.base_Url_Api_Bo;
  }

  onFileSelected(event):Promise<any>{
return new Promise(async (resole)=> {
  const file =event.target.files[0];
  this.images = await file;
  console.log("File **",this.images);
 
  resole(this.images);
})
  }
  async Updatemodif(){
    if(this.mode==0){
      // alert("ato111");
      this.api.uploadimage(this.images).subscribe(async (data: any) => { 
        console.log("File 1",this.images);
        if(data){
          console.log("************** image", data);
            this.prod.nom_image= await data.file.filename;
        }
        this.api.insertbann(this.prod).subscribe((data: any) => { 
            if(data){
              this.toastr.success('enregistrer', 'Donnée');
             window.location.reload();
                  console.log("Insertion data", data);
            }
          },(error) => {
            this.toastr.error(error.message,'Erreur'); 
          }); 
      });
    }else{
     
        if(this.images==null){
          console.log("File 2",this.images)
            //console.log( this.prod.nom_image);
            this.api.updateBann(this.prod).pipe().subscribe((data: any) => {
              if (data) {
                  this.toastr.success('enregistrer', 'Donnée');
                 window.location.reload();
                 console.log("Update data  1 si image est null", data);
              }
            },(error) => {
              this.toastr.error(error.message,'Erreur'); 
            }); 
        }else{
         
            this.api.uploadimage(this.images).pipe().subscribe(async (data: any) => { 
              //console.log("File 3",this.images)
            
            //  console.log("ato222");
              console.log("ato222",data.file.filename);
                if(data){
                   this.prod.nom_image = await data.file.filename;
                }
                this.api.updateBann(this.prod).pipe().subscribe((data: any) => {
                  if (data) {
                      this.toastr.success('enregistrer', 'Donnée');
                      console.log("Upadate 2 data", data);
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
