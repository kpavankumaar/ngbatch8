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
  operationText = 'Insert';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      const id = +params['id'];
      if (id !== 0) {
        this.operationText = 'update';
        this.getCustomer(id);
      }
    });
    this.dataService.getStates().subscribe((states) => {
      this.states = states
    }),
  }
  submit() {

  }
}
