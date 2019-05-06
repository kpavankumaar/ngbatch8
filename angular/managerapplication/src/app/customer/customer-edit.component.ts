import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../core/service/data.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  states;
  customer;
  operationText = 'Insert';
  getCustomer(id: number) {
    this.dataService.getCustomerById(id).subscribe( (customer) => {
      this.customer = customer;
    });
  }



  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      const id = +params['id'];
      if (id !== 0) {
        this.operationText = 'update';
        this.getCustomer(id);
      }
    });
    this.dataService.getStates().subscribe((states) => {
      console.log('++++++++++++++', states);
      this.states = states;
    });
  }
  cancel(event) {

    this.router.navigate(['/customers']);
  }
  submit() {

  }
}
