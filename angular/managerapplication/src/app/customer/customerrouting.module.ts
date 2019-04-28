import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from '../customer/customer.component';
import { CustomerDetailsComponent } from '../customer/customer-details.component';
import { CustomerEditComponent } from '../customer/customer-edit.component';

import { CustomerOrdersComponent } from './customer-orders.component';

const routes: Routes = [
    {
        path: '',
        component: CustomerComponent,
        children: [
            { path: 'details', component: CustomerDetailsComponent },
            { path: 'orders', component: CustomerOrdersComponent },
            { path: 'edit', component: CustomerEditComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule {
    constructor() {

    }
}
