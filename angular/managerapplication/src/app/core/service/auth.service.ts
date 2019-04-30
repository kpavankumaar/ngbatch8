import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    isAuthenticated = false;
    authUrl = '/api/auth';
    login(userLogin): Observable<boolean> {
        return this.http.post<boolean>(this.authUrl + '/login', userLogin);
    }
    logout() {
        return this.http.post<boolean>(this.authUrl + '/logout', null);
    }
    constructor(private http: HttpClient) {

    }
}
