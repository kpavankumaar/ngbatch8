import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomersCardComponent } from './customers-card.component';
import { CustomersGridComponent } from './customers-grid.component';
import { OrdersModule } from '../orders/orders.module';
import { CustomersRoutingModule } from './customersrouting.module';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
   
  ],
  declarations: [CustomersComponent, CustomersCardComponent, CustomersGridComponent],
  
})
export class CustomersModule { }
