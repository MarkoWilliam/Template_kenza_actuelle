import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GlobaleService } from 'app/main/service/globale.service';


@Component({
  selector: 'app-offres-modal',
  templateUrl: './offres-modal.component.html',
  styleUrls: ['./offres-modal.component.scss']
})
export class OffresModalComponent implements OnInit {
  ishidden0=true;
  ishidden1=true;
  prod={
    nom:'',
    id_categorie:0,
    id_page:5,
    url_img:'',
    text_ban:'',
    position_text:'',

    titre_body:'',
    contenu_body:'',
    check1:false,
    num_position_icon:0
  }
  images;

  constructor(
    private api:GlobaleService
  ) { }

  ngOnInit() {
  }

  afficher_bloc(tmp){
   /*  alert(tmp); */
    if(tmp==0){
      this.ishidden0=false;
      this.ishidden1=true;
    }else{
      this.ishidden1=false;
      this.ishidden0=true;
    }
  }

  onFileSelected(event){
    const file =event.target.files[0];
    this.images = file;
  }
  async Updatemodif(){
    console.log(this.prod);
      this.api.uploadimage(this.images).pipe().subscribe((data: any) => { 
         if(data){
            this.prod.url_img=data.name_img;
         }
         this.api.majbanniere(this.prod).pipe().subscribe((data: any) => { 
            
        });
      }); 
  }
}
