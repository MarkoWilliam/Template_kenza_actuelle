import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignedGuardService {

  constructor() { }
}

// export class SignedGuardService implements CanActivate {
//   import { CanActivate, Router } from '@angular/router';
//   constructor(public auth: AuthService, public router: Router) {}
//   canActivate(): boolean {
//     if (!this.auth.isAuthenticated()) {
//       this.router.navigate(['login']);
//       return false;
//     }
//     return true;
//   }
// }