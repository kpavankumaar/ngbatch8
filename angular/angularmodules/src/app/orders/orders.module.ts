import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrdersComponent],
  exports:[OrdersComponent]
})
export class OrdersModule { }
