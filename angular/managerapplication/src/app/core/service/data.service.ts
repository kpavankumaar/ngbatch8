import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { ICustomer } from '../../shared/interfaces';
@Injectable()
export class DataService {
    constructor(private http: HttpClient) {

    }
    getCustomers(url): Observable<ICustomer[]> {
        return this.http.get<ICustomer[]>(url);
    }

    getCustomerById(id): Observable<ICustomer> {
        const url = '/api/customers/';
        console.log(' data service' + id);
        return this.http.get<ICustomer>(url + id)
        .pipe(
            map((customer) => {
                return customer;
            })
        );
    }
    getStates():Observable<any> {
        return this.http.get('api/states');
    }
}
