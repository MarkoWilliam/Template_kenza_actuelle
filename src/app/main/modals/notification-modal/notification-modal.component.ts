import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ApiPrestaService } from 'app/main/service/Api-Bd-Presta/api-presta.service';
import { GlobaleService } from 'app/main/service/globale.service';

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
    etat:1
  }
  listprod=[];
  mode=null;
  


  constructor(
    private api:GlobaleService,
    private apipresta:ApiPrestaService,
    @Inject(MAT_DIALOG_DATA) public data: {majnotif}
   
    ) { 
         /*  if(data.majnotif){
            this.notif.id = data.majnotif.id;
            this.notif.titre = data.majnotif.titre;
            this.notif.contenu = data.majnotif.contenu;     
            this.notif.etat = data.majnotif.etat;    
            this.notif.tmp = data.majnotif.nom+"||"+data.majnotif.id_category+"||"+data.majnotif.id_image+"||"+data.majnotif.id_product+"||"+data.majnotif.id_attribute+"||"+data.majnotif.link_rewrite+"||"+data.majnotif.id_product_attribute;    
            this.mode = 1; 
            console.log(this.notif.tmp); 
            
          } */
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
  }
  async ListeProduit() {
    this.apipresta.getProdNewOffre().subscribe(results => {
         /*  console.log(results.body); */
          if(results.body){
              this.listprod=results.body;
          }
    })
  }

 


  async Updatemodif(){
    /* console.log(this.notif.tmp); */
    const val = (this.notif.tmp).split('||');  
    this.notif.nom=val[0]; 
    this.notif.id_category=val[1];
    this.notif.id_image=val[2];
    this.notif.id_product=val[3];
    this.notif.id_attribute=val[4];
    this.notif.link_rewrite=val[5];
    this.notif.id_product_attribute=val[6];
    /* console.log(this.notif); */
    this.api.insertnotif(this.notif).pipe().subscribe((data: any) => { 
       if(data){
          
       }
    });
  }
}
