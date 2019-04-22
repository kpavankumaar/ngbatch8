import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
const routes:Routes = [
    {path:"customers", loadChildren:"./customers/customers.module#CustomersModule"},
    {path:"orders", loadChildren:"./orders/orders.module#OrdersModule"}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}