import { AuthService } from "../../../framework/helpers/auth.service";
import { CanActivate,Router } from '@angular/router';
import { Injectable } from "@angular/core";

@Injectable()
export class UserGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {
    }
    canActivate(): boolean {

        if (this.authService.isAuthunticated() && (this.authService.isSuperAdminAuthenticated() ||this.authService.isUserAuthenticated())) {
            return true;
        } else if (this.authService.isAuthunticated()) {
            this.router.navigate(["/dashboard"]);
            return false;
        } 
        else {
            localStorage.removeItem('tokenExpireIn');
            localStorage.removeItem('currentUser');
            this.router.navigate(["/login"]);
            return false;
        }
    }
}  