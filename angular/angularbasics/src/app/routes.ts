import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DetailedOrderComponent } from './detailed-order/detailed-order.component';

export const routes:Routes = [
    {path:'',redirectTo:'customers',pathMatch:'full'},
    {path:'customers',component:CustomersComponent},
    { path:'orders',
      component:OrdersComponent,
      children:[
        {path:'detailedorder',component:DetailedOrderComponent}
      ]
    },
    {path:'**',component:PagenotfoundComponent},
  ];
