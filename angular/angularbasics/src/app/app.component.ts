import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data;
  updateInputVal(val){
    console.log(val);
    this.data = val;
  }
  color = 'red';
  constructor(){
    this.title = 'angular'
    console.log(this.title);
  }
  widthVal = '200px';
}
