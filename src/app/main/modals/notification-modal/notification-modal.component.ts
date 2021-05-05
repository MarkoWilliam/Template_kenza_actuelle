import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ApiPrestaService } from 'app/main/service/Api-Bd-Presta/api-presta.service';
import { GlobaleService } from 'app/main/service/globale.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrls: ['./notification-modal.component.scss']
})
export class NotificationModalComponent implements OnInit {
  notif={
    id:null,
    titre:'',
    contenu:'',
    id_product:'',
    nom:'',
    link_rewrite:'',
    id_image:'',
    id_attribute:'',
    id_category:'',
    id_product_attribute:'',
    tmp:'',
    nom_image: '', 
    date_add: '',
    etat:1
  }
  listprod=[];
  mode=null;
  isImage = true;
  isLibre = true;
  isDate = true;
  idDateTime = false;
  isimage = false;
  base_url = null;
  images=null;
  minDate: Date;
  maxDate: Date;

  range = new FormGroup({
    start: new FormControl(), 
  });
  constructor(
    private api:GlobaleService,
    private apipresta:ApiPrestaService,
    private toastr: ToastrService,
    private datepipe: DatePipe,
    @Inject(MAT_DIALOG_DATA) public data: {majnotif}
   
    ) {  
      const currentYear = new Date().getFullYear();
      this.minDate = new Date();
      this.maxDate = new Date(currentYear + 1, 11, 31);
      }
      id_attribute: 282
id_category: 13
id_image: 5945
id_notification: 46
id_product: 861
id_product_attribute: 8385
link_rewrite: "gilet-oriental-masque-"
nom: " GILET ORIENTAL + MASQUE"
titre: "titre"
      

  ngOnInit() 
  {
    this.ListeProduit();
    this.isImage=false;
    this.base_url=this.api.base_Url_Api_Bo;
  }
  async ListeProduit() {
    this.apipresta.getProdNewOffre().subscribe(results => {
         /*  console.log(results.body); */
          if(results.body){
              this.listprod=results.body;
          }
    })
  }

  onFileSelected(event):Promise<any>{
    return new Promise(async (resole)=> {
      const file =event.target.files[0];
      this.images =   file;
      console.log("File **",this.images);
      resole(this.images);
    })
      }


  async Updatemodif(){ 
    if(   this.isLibre == false  ) {
      this.api.uploadimage(this.images).pipe().subscribe((data: any) => { 
        if(data){
           this.notif.nom_image=data.file.filename;
        } 
        this.notif.date_add = this.range.value.start; 
        console.log("***Date*****",      this.notif.date_add);
        this.notif.date_add = this.datepipe.transform(this.notif.date_add, 'yyyy/MM/dd ');
        console.log("***1*****", this.notif);
       
     }); } else {
      console.log("****2****", this.notif);
     }

    // if(this.notif.nom_image !== '') {
    //   this.api.uploadimage(this.images).pipe().subscribe((data: any) => { 
    //     if(data){
    //        this.notif.nom_image=data.name_img;
    //     }
    //     this.notif.nom= ''; 
    //     this.notif.id_category='';
    //     this.notif.id_image='';
    //     this.notif.id_product='';
    //     this.notif.id_attribute= '';
    //     this.notif.link_rewrite= '';
    //     this.notif.id_product_attribute= ''; 
    //     this.api.insertnotif(this.notif).pipe().subscribe((data: any) => {
    //       if (data) {
    //           this.toastr.success('enregistrer', 'Donnée');
    //           window.location.reload();
    //       }
    //     },(error) => {
    //       this.toastr.error(error.message,'Erreur'); 
    //     }); 
    //  });
    // }   
    // else {
    //   const val = (this.notif.tmp).split('||');   
    //   this.notif.nom=val[0]; 
    //   this.notif.id_category=val[1];
    //   this.notif.id_image=val[2];
    //   this.notif.id_product=val[3];
    //   this.notif.id_attribute=val[4];
    //   this.notif.link_rewrite=val[5];
    //   this.notif.id_product_attribute=val[6]; 
    //   this.notif.nom_image = '';
    //   this.api.insertnotif(this.notif).pipe().subscribe((data: any) => { 
    //      if(data){
    //       window.location.reload();
    //      }
    //   });
    // }

  }

  Is_Image(tmp){
    /*  alert(tmp); */
     if(tmp==0){
       this.isLibre=true;
       this.isImage=false;
     }else{
       this.isImage=true;
       this.isLibre=false;
     }
   }

   Is_Date(a) {
if(a == 1) {
  this.isDate = false
} else {
  this.isDate = true
}
   }

   
}
