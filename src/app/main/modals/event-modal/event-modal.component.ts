import { Component, OnInit } from '@angular/core';
import { GlobaleService } from 'app/main/service/globale.service';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss']
})
export class EventModalComponent implements OnInit {
  prod={
    nom:'',
    id_categorie:0,
    id_page:3,
    url_img:'',
    text_ban:'',
    position_text:'',

    titre_body:'',
    contenu_body:'',
  }
  images;
  constructor(
    private api:GlobaleService
  ) { }

  ngOnInit() {
  }
  onFileSelected(event){
    const file =event.target.files[0];
    this.images = file;
  }
  async Updatemodif(){
      this.api.uploadimage(this.images).pipe().subscribe((data: any) => { 
         if(data){
            this.prod.url_img=data.name_img;
         }
         this.api.majbanniere(this.prod).pipe().subscribe((data: any) => { 
            
        });
      });
  }
}

