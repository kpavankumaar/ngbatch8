import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data = [1,2,3,4];
  updateTheArr(val){
    this.data.push(val);
  }
  constructor(){
    console.log('AppComponent constructor');
  }
  ngOnChanges(){
    console.log('AppComponent ngOnChanges')
  }
  ngOnInit(){
    console.log('AppComponent ngOnInit');
  }
}
