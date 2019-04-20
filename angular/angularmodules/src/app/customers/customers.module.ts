import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomersCardComponent } from './customers-card.component';
import { CustomersGridComponent } from './customers-grid.component';
import { OrdersModule } from '../orders/orders.module';

@NgModule({
  imports: [
    CommonModule,
    OrdersModule
  ],
  declarations: [CustomersComponent, CustomersCardComponent, CustomersGridComponent],
  exports:[CustomersComponent]
})
export class CustomersModule { }
