import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginLogoutText = 'Login';
  loginOrOut(){
    // const isAuthenticated = 
  }
  randomName;
  constructor() {
    console.log('Navbar Component Constructor ');
  }
  ngOnChanges(val){
    console.log('Navbar Compnent ngOnChanges',val);
    // this.randomName = val.currentValue
  }
  ngOnInit() {
    console.log('Navbar Component ngOnInit');
  }
  ngDoCheck(){
    console.log('ngDoCheck')
  }
}
