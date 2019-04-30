import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginLogoutText = 'Login';
  loginOrOut(){
    const isAuthenticated = this.authService.isAuthenticated;
    if(isAuthenticated){
      this.authService.logout().subscribe((status:boolean)=>{
        this.loginLogOutText();
        this.router.navigate(['/customers']);
      });
     
    }else{
      this.router.navigate(['/login']);
      
    }
  }

  loginLogOutText(){
    this.loginLogoutText = this.authService.isAuthenticated ? 'Logout' : 'Login';
  }
  constructor(private authService:AuthService, private router:Router) {
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
