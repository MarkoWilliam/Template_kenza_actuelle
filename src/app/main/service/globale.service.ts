import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lien } from '../models/lien';

@Injectable({
  providedIn: 'root'
})
export class GlobaleService {

  private ListerUser = 'user';
  private CreationUser = 'auth/register';
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
}
