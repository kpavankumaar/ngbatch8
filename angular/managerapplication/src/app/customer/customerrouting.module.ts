import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from '../customer/customer.component';
import { CustomerDetailsComponent } from '../customer/customer-details.component';
import { CustomerEditComponent } from '../customer/customer-edit.component';

import { CustomerOrdersComponent } from './customer-orders.component';
import { CanActivateGaurd } from './can-activate.gaurd';
import { CanDeactivateGaurd } from './can-deactivate.gaurd';

const routes: Routes = [
    {
        path: '',
        component: CustomerComponent,
        children: [
            { path: 'details', component: CustomerDetailsComponent },
            { path: 'orders', component: CustomerOrdersComponent },
            { path: 'edit',
              component: CustomerEditComponent,
              canActivate: [CanActivateGaurd],
              canDeactivate: [CanDeactivateGaurd]
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [CanActivateGaurd, CanDeactivateGaurd]
})
export class CustomerRoutingModule {
    constructor() {

    }
}
