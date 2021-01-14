import { Component, OnInit } from '@angular/core';
import { ApiPrestaService } from 'app/main/service/Api-Bd-Presta/api-presta.service';
import { GlobaleService } from 'app/main/service/globale.service';

@Component({
  selector: 'app-notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrls: ['./notification-modal.component.scss']
})
export class NotificationModalComponent implements OnInit {
  notif={
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
    etat:0
  }
  listprod=[];
  


  constructor(
    private api:GlobaleService,
    private apipresta:ApiPrestaService
  ) { }

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
