import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { GlobaleService } from '../globale.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{
constructor(private _global: GlobaleService,
            private _router: Router,
            private toastr: ToastrService,) {}


canActivate(): boolean {
  if (this._global.loggedIn()) {
    return true;
  } else {
    this._router.navigate(['/login']);
    this.toastr.warning('Vous d\'abord !', 'Connecter'); 
    return false;
  }
}
}
