import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    isAuthenticated = false;
    authUrl = '/api/auth';
    redirectUrl:string;
    @Output() authChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

    userAuthChanged(status: boolean) {
        this.authChanged.emit(status);
    }
    login(userLogin): Observable<boolean> {
        return this.http.post<boolean>(this.authUrl + '/login', userLogin)
            .pipe(
                map(loggedIn => {
                    this.isAuthenticated = loggedIn;
                    this.userAuthChanged(loggedIn);
                    return loggedIn;
                })
                
            );
    }
    logout() {
        return this.http.post<boolean>(this.authUrl + '/logout', null)
            .pipe(
                map(loggedOut => {
                    console.log(loggedOut);
                    this.isAuthenticated = !loggedOut;
                    this.userAuthChanged(loggedOut);
                })
            );
    }
    constructor(private http: HttpClient) {

    }
}
