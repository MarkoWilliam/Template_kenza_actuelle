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

    majEtatUser(model:any){
      return this.http.post(`${this.lien.lienCmd}auth/majEtatUser`,model);
    }

    majUser(model:any){
      return this.http.post(`${this.lien.lienCmd}auth/majUser`,model);
    }
    
    majEtatNotif(model:any){
      return this.http.post(`${this.lien.lienCmd}produit/majNotif`,model);
    }

    renVnotif(model:any){
      return this.http.post(`${this.lien.lienCmd}produit/renVnotif`,model);
    }
    getlistepage(){
      return this.http.get(`${this.lien.lienCmd}produit/allpage`);
    }
    getevent(){
      return this.http.get(`${this.lien.lienCmd}produit/allevenement`);
    }

    insertevent(model: any): Observable<any> {
      return this.http.post(`${this.lien.lienCmd}produit/insertevent`,model);
    }
    updateevent(model: any): Observable<any> {
      return this.http.post(`${this.lien.lienCmd}produit/updateevent`,model);
    }
    
    majEtatEvent(model:any){
      return this.http.post(`${this.lien.lienCmd}produit/majEtatEvent`,model);
    }

    getAllBan(){
      return this.http.get(`${this.lien.lienCmd}banniere/allban`);
    }
    
    insertbann(model: any): Observable<any> {
      return this.http.post(`${this.lien.lienCmd}banniere/insertbann`,model);
    }

    updateBann(model: any): Observable<any> {
      return this.http.post(`${this.lien.lienCmd}banniere/updateBann`,model);
    }
    
    majEtatBan (model:any){
      return this.http.post(`${this.lien.lienCmd}banniere/majEtatBann`,model);
    }

    //---------------Offres-------------------

    //------------get offre-------------
    getOffres(){
      return this.http.get(`${this.lien.lienCmd}offres/listeOffres`);
    }
    //-------------insert offre------------
    insertOffre(model: any): Observable<any> {
      return this.http.post(`${this.lien.lienCmd}offres/insertOffre`,model);
    }
   //-----------------Upadte etat-------------------        
    updateEtat(model:any){
      return this.http.post(`${this.lien.lienCmd}offres/updateEtat`,model);
    }

    //---------------Update offre-----------
    updateOffre(model: any): Observable<any> {
      return this.http.post(`${this.lien.lienCmd}offres/updateOffres`,model);
    }
 //-------------insert titre offre------------
    insertTitre(model: any): Observable<any> {
      return this.http.post(`${this.lien.lienCmd}offres/insertOffre`,model);
    }

      //------------get titre-------------
      getTitre(){
        return this.http.get(`${this.lien.lienCmd}offres/listeTitre`);
      }

        //-----------------Upadte etat-------------------        
    updateEtatList(model:any){
      return this.http.post(`${this.lien.lienCmd}offres/updateEtatTitre`,model);
    }


    getService(){
      return this.http.get(`${this.lien.lienCmd}offres/listeService`);
    }
    //-------------insert offre------------
    insertService(model: any): Observable<any> {
      return this.http.post(`${this.lien.lienCmd}offres/insertService`,model);
    }
   //-----------------Upadte etat-------------------        
    updateService(model:any){
      return this.http.post(`${this.lien.lienCmd}offres/updateService`,model);
    }

    //---------------Update offre-----------
    updateServiceEtat(model: any): Observable<any> {
      return this.http.post(`${this.lien.lienCmd}offres/updateEtatService`,model);
    }
}
