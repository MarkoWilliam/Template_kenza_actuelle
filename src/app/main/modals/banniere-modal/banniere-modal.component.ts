import { Component, OnInit } from '@angular/core';
import { GlobaleService } from 'app/main/service/globale.service';


@Component({
  selector: 'app-banniere-modal',
  templateUrl: './banniere-modal.component.html',
  styleUrls: ['./banniere-modal.component.scss']
})
export class BanniereModalComponent implements OnInit {
  prod={
    nom:'',
    id_categorie:0,
    id_page:1,
    url_img:'',
    text_ban:'',
    position_text:''
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
