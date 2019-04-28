import { Component, OnChanges, OnInit } from '@angular/core';
import { DataService } from './core/service/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit {
  title = 'app';
  data = [1,2,3,4];
  updateTheArr(val){
    this.data.push(val);
  }
  constructor( public dataService: DataService) {
    console.log('AppComponent constructor');
  }
  ngOnChanges(val) {
    console.log('AppComponent ngOnChanges',val);
  }
  ngOnInit() {
    // console.log(this.dataService.getCustomers())
    console.log('AppComponent ngOnInit');
  }
}
