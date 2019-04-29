import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute ,private dataService:DataService) { }
  customer;
  ngOnInit() {
    this.route.parent.params.subscribe((params) => {
      const id = +params['id'];
      this.dataService.getCustomerById(id).subscribe((customer)=>{
        this.customer = customer;
      })
    })
    
  }

}
