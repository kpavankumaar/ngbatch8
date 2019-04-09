import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';


function phoneLengthValidation (c:AbstractControl):{[key:string]:boolean} | null{
  if( c.value.toString().length == 10 ){
    return null;
  }else{
    return {
      match:true
    }
  }
}
  

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  customerInfo:FormGroup;
  constructor() { }

  ngOnInit() {
    this.customerInfo = new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      emailGroup: new FormGroup({
        emailControl: new FormControl('',[Validators.required,Validators.email]),
        confirmEmailControl: new FormControl('',[Validators.required,Validators.email]),
      }),
      checkin: new FormControl('true'),
      phoneControl: new FormControl('',phoneLengthValidation)
      // password: new FormControl('',[Validators.required,Validators.minLength(6)]),


    })
  }
  sendData(){
    console.log(this.customerInfo);
  }

}
