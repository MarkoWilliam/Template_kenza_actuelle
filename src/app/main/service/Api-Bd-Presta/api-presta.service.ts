import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lien } from 'app/main/models/lien';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiPrestaService {
  private lien: Lien = new Lien();
  private produitNewOffr ="produit/prodnewetoffre";
  private produitMiseAvant = "produit_bo/listProduit";
  private produitMise = "produit_bo/insertionProduit";
  private selecteProduct = "produit_bo/selecteProduit";
  private deleteProduit = "produit_bo/supprimer/";

  constructor(
    private http: HttpClient
  ) { }


  //recup all notification
  getProdNewOffre(): Observable<any> {
    const headers = new HttpHeaders({'content-type': 'application/json'});
    return this.http.get(this.lien.lienPresta + `${this.produitNewOffr}`,{headers, observe:'response'});
  }

  //-----------Produit Mise en avant-----------
  getAllProduit(): Observable<any> {
    const headers = new HttpHeaders({'content-type': 'application/json'});
    return this.http.get(this.lien.lienPresta + `${this.produitMiseAvant}`,{headers, observe:'response'});
  }

  insertionProduit(ModelCLient: object): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.lien.lienCmd + `${this.produitMise}`,ModelCLient, {headers, observe:'response'});
  }

  //-----------Produit Mise en avant-----------
  getProduitMise(): Observable<any> {
    const headers = new HttpHeaders({'content-type': 'application/json'});
    return this.http.get(this.lien.lienCmd + `${this.selecteProduct}`,{headers, observe:'response'});
  }

    //-----------Delete produit Mise en avant-----------
    DeleteProduitMise(id): Observable<any> {
      const headers = new HttpHeaders({'content-type': 'application/json'});
      return this.http.delete(this.lien.lienCmd + `${this.deleteProduit}${id}`,{headers, observe:'response'});
      // return this.http.get(`${this.lien.lienCmd}produit_bo/supprimer?ids=${id}`);
    }


  //   getCol(id_prod:string,id_cat:string){
  //     return this.http.get(`${this.lien.lienApi}carousel/listCouleur?ids=${id_prod}&cat=${id_cat}`);
  //  }


}

