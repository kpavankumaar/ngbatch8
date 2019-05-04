import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';


const routes: Routes = [
    // {path:'customers', component:CustomersComponent},
    {path: '', redirectTo: 'customers', pathMatch: 'full'},
    {path: 'customers/:id', loadChildren: './customer/customer.module#CustomerModule' },
    {path: 'customers', loadChildren: './customers/customers.module#CustomersModule'},
    {path: 'orders', loadChildren: './orders/orders.module#OrdersModule'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

