import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lien } from 'app/main/models/lien';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiPrestaService {
  // private lien: Lien = new Lien();
  private lien = environment;
  private produitNewOffr ="produit/prodnewetoffre";
  private produitMise = "produit_bo/insertcurvy";
  private deleteProduit = "produit_bo/supprimer/";
  constructor(
    private http: HttpClient
  ) { }
 //recup all notification
  getProdNewOffre(): Observable<any> {
    const headers = new HttpHeaders({'content-type': 'application/json'});
    return this.http.get(this.lien.lienPresta + `${this.produitNewOffr}`,{headers, observe:'response'});
  }
 

  insertionProduit(ModelCLient: object): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.lien.lienCmd + `${this.produitMise}`,ModelCLient, {headers, observe:'response'});
  }

    //-----------Delete produit Mise en avant-----------
    DeleteProduitMise(id): Observable<any> {
      const headers = new HttpHeaders({'content-type': 'application/json'});
      return this.http.delete(this.lien.lienCmd + `${this.deleteProduit}${id}`,{headers, observe:'response'});
      // return this.http.get(`${this.lien.lienCmd}produit_bo/supprimer?ids=${id}`);
    }

}

