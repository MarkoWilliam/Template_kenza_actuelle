import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { GlobaleService } from '../globale.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{
constructor(private global: GlobaleService,private router: Router,private toastr: ToastrService,) {}

canActivate(  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
    this.router.navigate(['/login']);
    this.toastr.warning('Vous d\'abord !', 'Connecter'); 
    return this.global.getUserLoggeIn();
}
}
