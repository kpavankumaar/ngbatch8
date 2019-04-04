import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  customerInfo:FormGroup
  constructor() { }

  ngOnInit() {
    this.customerInfo = new FormGroup({
      userName: new FormControl('pavan@gmail.com'),
      password: new FormControl('')
    })
  }
  sendData(){
    console.log(this.customerInfo);
  }

}
