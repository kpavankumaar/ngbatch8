import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomersCardComponent } from './customers-card.component';
import { CustomersGridComponent } from './customers-grid.component';
import { CustomersRoutingModule } from './customersrouting.module';
import { DataService } from '../core/service/data.service';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [CustomersComponent, CustomersCardComponent, CustomersGridComponent],
  exports:[CustomersComponent]
})
export class CustomersModule { }
