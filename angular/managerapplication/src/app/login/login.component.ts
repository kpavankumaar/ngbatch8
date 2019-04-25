import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { 
    console.log('LoginComponent Constructor')
  }
  ngOnChanges(){
    console.log('LoginComponent ngOnChanges')
  }
  ngOnInit() {
    console.log('LoginComponent ngOnInit');
  }

}
