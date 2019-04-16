import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

function verifyEmail(c:AbstractControl):{[key:string]:Boolean} | null {
  
  let emailControl = c.get('emailControl');
  let confirmEmailControl = c.get('confirmEmailControl');
  console.log('verify Email');
  if(emailControl.value == confirmEmailControl.value){
    return null;
  }else{
    return {
      emailComparison: true
    }
  }
}
function ratingValidator(){
  return function ratingCheck(c:AbstractControl):{[key:string]:boolean} | null{
    if(c.value > 0 && c.value < 6){
      return null
    }else{
      return {
        ratingMatch: true
      }
    }
  }
}
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
      },verifyEmail),
      checkin: new FormControl('true'),
      phoneControl: new FormControl('',phoneLengthValidation),
      // password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      rating:new FormControl('',ratingValidator())
    })
  }
  sendData(){
    console.log(this.customerInfo);
  }

}
