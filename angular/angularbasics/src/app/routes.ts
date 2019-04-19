import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes:Routes = [
    {path:'',redirectTo:'customers',pathMatch:'full'},
    {path:'customers',component:CustomersComponent},
    {path:'orders',component:OrdersComponent},
    {path:'**',component:PagenotfoundComponent},
  ];
