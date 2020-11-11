import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lien } from '../models/lien';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
// import { ToastrService } from 'ngx-toastr'; 
@Injectable({
  providedIn: 'root'
})
export class GlobaleService {

  private ListerUser = 'user';
  private CreationUser = 'auth/register';
  private LoginUser = 'auth/login';
  private lien: Lien = new Lien();

  constructor(private http: HttpClient) { }

  listeUser(): Observable<any> {
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    return this.http.get(this.lien.lienCmd +`${this.ListerUser}`, {headers, observe: 'response'});
  }

  creationUser(ModelCLient: object): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.lien.lienCmd + `${this.CreationUser}`,ModelCLient, {headers, observe:'response'});
  }

  Loginuser(ModelCLient: object): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.lien.lienCmd + `${this.LoginUser}`,ModelCLient, {headers, observe:'response'});
  }

 
}
