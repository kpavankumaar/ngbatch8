import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../core/service/auth.service";

@Injectable()
export class CanActivateGaurd implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        if (this.authService.isAuthenticated) {
            return true;
        }
        // track url user is trying to go to, so we can send them there after loggin in
        this.authService.redirectUrl = state.url;
        this.router.navigate(['/login']);
        return false;
    }
    constructor(private authService: AuthService, private router: Router) {

    }
}
