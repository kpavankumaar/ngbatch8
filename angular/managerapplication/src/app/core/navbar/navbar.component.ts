import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() dataFromAppC;
  test(val){
    console.log(val);
    this.dataFromAppC.push(val);
  }
  randomName;
  constructor() {
    console.log('Navbar Component Constructor ');
  }
  ngOnChanges(val,val1){
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
