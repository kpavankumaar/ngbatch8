import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/service/data.service';
import { ICustomer } from '../shared/interfaces';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customersData;
  cardViewStatus = true;
  listViewStatus = false;
  loadPage(value){
    if(value === 'cardView'){
      this.cardViewStatus = true;
      this.listViewStatus = false;
    }else{
      console.log('value')
      this.cardViewStatus = false;
      this.listViewStatus = true;
      
    }
  }
 
  ngOnChanges(){
    console.log('CustomersComponent ngOnChanges')
  }
  ngOnInit() {
    console.log('customers ngOnInit');
    this.data.getCustomers("api/customers").subscribe(
      (response:ICustomer[]) =>{
        this.customersData = response;
        console.log(this.customersData);
      },
      (err)=>{ console.log(err)},
      ()=>{ console.log('completed communicating')})
  }
  constructor(public data:DataService) { 
    console.log('customers constructor');
  }
}
