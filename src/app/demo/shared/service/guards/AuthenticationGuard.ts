import { AuthService } from "../../../framework/helpers/auth.service";
import { CanActivate,Router } from '@angular/router';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {
    }
    canActivate(): boolean {

        if (this.authService.isAuthunticated()) {
            return true;
        }
        else {
            localStorage.removeItem('tokenExpireIn');
            localStorage.removeItem('currentUser');
            this.router.navigate(["/login"]);
            return false;
        }
    }
}   