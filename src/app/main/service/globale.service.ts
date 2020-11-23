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
  private ListerUser = 'user';
  private CreationUser = 'auth/register';
  private LoginUser = 'auth/login';
  private ListeProduit = "produit/produitList";
  private ListeById = "produit/produitID"
  private lien: Lien = new Lien();

  constructor(private http: HttpClient
              ) { }


  //------------------Liste user------------------
  listeUser(): Observable<any> {
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    return this.http.get(this.lien.lienCmd +`${this.ListerUser}`, {headers, observe: 'response'});
  }

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

    //----------------Selecte par id-----------------

 
}
