import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lien } from '../models/lien';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
// import { ToastrService } from 'ngx-toastr'; 
@Injectable({
  providedIn: 'root'
})
export class GlobaleService {
 
  public isUserLoggeIn = false;
  private CreationUser = 'auth/register';
  private LoginUser = 'auth/login';
  private ListeProduit = "produit/produitList";
  private UpadateProduitCheck = "produit/produits/";
  private insertban = "produit/insertban";
  private insertnotification = "produit/insertnotif";
  private UpadateProduit="";
  private recupallelement="produit/pageelement/";
  private allnotif = "produit/allnotif"
  private lien: Lien = new Lien();
  public base_Url_Api_Bo=this.lien.lienCmd;


  constructor(private http: HttpClient
              ) { }


    //------------------Création user------------------
  creationUser(ModelCLient: object): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.lien.lienCmd + `${this.CreationUser}`,ModelCLient, {headers, observe:'response'});
  }

    //------------------Login user------------------
  Loginuser(ModelCLient: object): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.lien.lienCmd + `${this.LoginUser}`,ModelCLient, {headers, observe:'response'});
  }

  getUserLoggeIn() {
    return this.isUserLoggeIn;
  }

  loggedIn() {
    return !!sessionStorage.getItem('token');
  }

    //------------------Liste produit------------------

    listeProduit(): Observable<any> {
      const headers = new HttpHeaders({ 'content-type': 'application/json' });
      return this.http.get(this.lien.lienCmd + `${this.ListeProduit}`, {headers, observe: 'response'});
    }

    //----------------Update produit par id-----------------

    UpdatProduit(id: number,ModelProduit): Observable<any> {
      const headers = new HttpHeaders({'content-type': 'application/json'});
      // return this.http.patch(this.lien.lienCmd + `${this.UpadateProduit}` + id,  {headers, observe:'response'});
      return this.http.patch(this.lien.lienCmd + `${this.UpadateProduit}` + id  ,ModelProduit, {headers, observe:'response'});
    }

    UpdatProduitck(id: number,ModelProduit): Observable<any> {
      const headers = new HttpHeaders({'content-type': 'application/json'});
      // return this.http.patch(this.lien.lienCmd + `${this.UpadateProduit}` + id,  {headers, observe:'response'});
      return this.http.patch(this.lien.lienCmd + `${this.UpadateProduitCheck}` + id  ,ModelProduit, {headers, observe:'response'});
    }

   
    ///maj bannniere
    majbanniere(model: any): Observable<any> {
      const headers = new HttpHeaders({'content-type': 'application/json'});
      return this.http.post(this.lien.lienCmd + `${this.insertban}`,model, {headers, observe:'response'});
    }
    // recupe all element page config
    recupelement(id:number): Observable<any> {
      const headers = new HttpHeaders({'content-type': 'application/json'});
      return this.http.patch(this.lien.lienCmd + `${this.recupallelement}` + id , {headers, observe:'response'});
    }
    //insert new notif
    insertnotif(model: any): Observable<any> {
      const headers = new HttpHeaders({'content-type': 'application/json'});
      return this.http.post(this.lien.lienCmd + `${this.insertnotification}`,model, {headers, observe:'response'});
    }
    //recup all notification
    getAllNotification(): Observable<any> {
      const headers = new HttpHeaders({'content-type': 'application/json'});
      return this.http.get(this.lien.lienCmd + `${this.allnotif}`,{headers, observe:'response'});
    }


    //------------------Liste user------------------
    listeUser(): Observable<any> {
      return this.http.get(`${this.lien.lienCmd}auth/listeUser`);
    }
    ///upload image
    uploadimage(model: any) {
      let formData = new FormData();
      formData.append("file",model);
      return this.http.post(`${this.lien.lienCmd}upload`,formData);
    } 
}
