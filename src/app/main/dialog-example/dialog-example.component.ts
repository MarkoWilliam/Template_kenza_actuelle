import { Component,Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { GlobaleService } from '../service/globale.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent implements OnInit {
  offreuitId: any;
  checked_oui = false;
  checked_nom = false;
  base_url : any;
  images=null;
  offre = {
    code_offre: null,
    nom_image: '',
    titre: '', 
    texte: '',
    etat: '', 
    lien: '',
  };
  mode=0;
  donner: any;
  constructor(private route: ActivatedRoute, 
    private api: GlobaleService,
    private toastr: ToastrService,
    // Récuperer les données envoyées depuis offreuit component
    @Inject(MAT_DIALOG_DATA) public data: {element}) { 
      console.log('Donner modal', data);
      if(data.element) {
        this.donner = data.element;
        this.offre.code_offre = data.element.code_offre;
        this.offre.nom_image = data.element.nom_image;
        console.log('Image *************', data.element.nom_image)
        this.offre.titre = data.element.titre;
        this.offre.texte = data.element.texte;
        this.offre.etat = data.element.etat;
        this.offre.lien = data.element.lien;
        this.mode=1;
      }
  }

  ngOnInit() {
    this.base_url=this.api.base_Url_Api_Bo;
  }

  onFileSelected(event){
    const file =event.target.files[0];
    this.images = file;
  }
//   Updatemodif(offreuitId) {
//   this.globalServ.Updatoffreuit(offreuitId,this.data).subscribe(results=> {
//     if(results) {
//       this.toastr.success('Donner bien modifier', 'Success')
//     } else {
//       this.toastr.warning('Il y a une ereeur', 'Erreur')
//     }
//   }, (error) => {
//     if(error.status === 501) {
//       console.log("Erreur", error.status)
//       this.toastr.warning('Il y a une champ vide', 'Erreur')
//     }else {
//       console.log("Erreur Trouver")
//     }

//   })
// }

async Updatemodif(){
  if(this.mode==0){
    this.api.uploadimage(this.images).pipe().subscribe(async (data: any) => { 
      if(data){
         this.offre.nom_image=await data.file.filename;
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
  }else{         
      if(this.images==null){
    console.log( this.offre.nom_image);
        this.api.updateOffre(this.offre).pipe().subscribe((data: any) => {
          if (data) {
              this.toastr.success('enregistrer', 'Donnée');
              window.location.reload();
          }
        },(error) => {
          this.toastr.error(error.message,'Erreur'); 
        }); 
      }else{
        this.api.uploadimage(this.images).pipe().subscribe(async (data: any) => { 
          if(data){
             this.offre.nom_image=await data.file.filename;
          }
          this.api.updateOffre(this.offre).pipe().subscribe((data: any) => {
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
}

}
