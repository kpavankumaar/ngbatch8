import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ICustomer } from '../../shared/interfaces';
@Injectable()
export class DataService {
    constructor(private http: HttpClient) {

    }
    getCustomers(url): Observable<ICustomer[]> {
        return this.http.get<ICustomer[]>(url);
    }
}
