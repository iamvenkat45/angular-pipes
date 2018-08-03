import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Pipes';
  date = new Date();

  users = [{
    firstName: 'Venkat',
    lastName: 'Sandeep',
    date: new Date(),
    age: 25,
    price: 1000000000000
  }, {
    firstName: 'Vijay',
    lastName: 'Soppa',
    date: new Date(),
    age: 25,
    price: 1000.123123123123123
  }, {
    firstName: 'Srikanth',
    lastName: 'B',
    date: new Date(),
    age: 25,
    price: 1000
  }, {
    firstName: 'Jay',
    lastName: 'M',
    date: new Date(),
    age: 25,
    price: 1000
  }];
}
