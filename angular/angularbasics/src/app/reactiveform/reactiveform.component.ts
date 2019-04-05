import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';

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
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      emailControl: new FormControl('',[Validators.required,Validators.email]),
      checkin: new FormControl('true')
      // password: new FormControl('',[Validators.required,Validators.minLength(6)]),


    })
  }
  sendData(){
    console.log(this.customerInfo);
  }

}
