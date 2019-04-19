import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showCustomer = false;
  showOrder = false;
  @ViewChild('userContent') elementFromTemplate:ElementRef;
  receiveDataFromNavbar(val){
    if(val == "customers"){
      this.showCustomer = true;
      this.showOrder = false;
    }else{
      this.showCustomer = false;
      this.showOrder = true;
    }
  }
  testClick(val){
    console.log(val);
    this.elementFromTemplate.nativeElement.style.color='green';
    this.elementFromTemplate.nativeElement.style.backgroundColor = 'lightgrey'
  }
  sampleData = [1,2,3,4,5,6];
  title = 'app';
  data;
  ngData:string;
  blurData:string;
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
  blurFn(val){
    this.blurData = val;
  }
}
