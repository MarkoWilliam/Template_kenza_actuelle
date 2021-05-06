import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GlobaleService } from 'app/main/service/globale.service';
import { ToastrService } from 'ngx-toastr';


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

  images=null;
  offre = {
    code_offre: null,
    nom_image: '',
    titre: '', 
    texte: '',
    etat: '', 
    lien: '',
    position: '',
  }; 

  titre = {
    id: null,
    titre: '', 
    position: '',
    page: '',
  }; 
  base_url="";

  constructor(
    private api:GlobaleService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.base_url=this.api.base_Url_Api_Bo;
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
    this.api.uploadimage(this.images).subscribe(async (data: any) => { 
      console.log("File 1",this.images);
      if(data){
        console.log("************** image", data);
          this.offre.nom_image=   data.file.filename;
      }; } )
  }

insertion() {
  if(this.offre.nom_image !== '') {

    this.api.uploadimage(this.images).pipe().subscribe((data: any) => { 
      if(data){
         this.offre.nom_image=data.name_img;
      }
      this.api.insertOffre(this.offre).pipe().subscribe((data: any) => {
        if (data) {
            this.toastr.success('enregistrer', 'Donnée');
            window.location.reload();
        }
      },(error) => {
        this.toastr.error(error.message,'Erreur'); 
      }); 
   });
  } else {
    this.api.insertOffre(this.offre).pipe().subscribe((data: any) => {
      if (data) {
          this.toastr.success('enregistrer', 'Donnée');
          window.location.reload();
      }
    },(error) => {
      this.toastr.error(error.message,'Erreur'); 
    }); 
  }
}


inserteTitre() {
  this.api.insertTitre(this.titre).pipe().subscribe((data: any) => {
    if (data) {
        this.toastr.success('enregistrer', 'Donnée');
        window.location.reload();
    }
  },(error) => {
    this.toastr.error(error.message,'Erreur'); 
  }); 
}
  
}
