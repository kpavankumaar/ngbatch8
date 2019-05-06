import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerEditComponent } from './customer-edit.component';
import { CustomerOrdersComponent } from './customer-orders.component';
import { CustomerRoutingModule } from './customerrouting.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule, SharedModule, FormsModule
  ],
  declarations: [CustomerComponent, CustomerDetailsComponent, CustomerEditComponent, CustomerOrdersComponent]
})
export class CustomerModule { }
