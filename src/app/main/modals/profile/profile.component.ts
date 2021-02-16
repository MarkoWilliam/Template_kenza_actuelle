import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { GlobaleService } from 'app/main/service/globale.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  nom=null;
  prenom=null;
  email=null;
  type=null;
  constructor(
    private api:GlobaleService,
    @Inject(MAT_DIALOG_DATA) public data: {id_user}
  ) {console.log(data)}

  ngOnInit() {
    this.majStatUser()
  }
  majStatUser(){
   /*  sessionStorage.setItem('token', results.body.token);
    sessionStorage.setItem('nom', results.body.reponse.nom);
    sessionStorage.setItem('email', results.body.reponse.email);
    sessionStorage.setItem('id', results.body.reponse.id);
    sessionStorage.setItem('prenom', results.body.reponse.prenom); */
    /* let newetat = !etat;
    let model={
      id:id,
      etat:newetat
    }
    this.api.recupUserActif(model).subscribe(results=> {
      if(results) { 
        this.toastr.success('Mis à jours effectuer', 'Success');
      }
    }, 
    (error) => {
        this.toastr.warning(error.message, 'Erreur');
    }); */
    this.nom =  sessionStorage.getItem('nom');
    this.prenom =  sessionStorage.getItem('prenom');
    this.email =  sessionStorage.getItem('email');
    this.type =  sessionStorage.getItem('type_str');
    
  }
}
