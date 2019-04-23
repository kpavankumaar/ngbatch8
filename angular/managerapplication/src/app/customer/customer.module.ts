import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerEditComponent } from './customer-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomerComponent, CustomerDetailsComponent, CustomerEditComponent]
})
export class CustomerModule { }
