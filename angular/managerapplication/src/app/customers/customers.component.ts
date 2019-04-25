import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  
 
  ngOnChanges(){
    console.log('CustomersComponent ngOnChanges')
  }
  ngOnInit() {
    console.log('customers ngOnInit');
  }
  constructor() { 
    console.log('customers constructor');
  }
}
