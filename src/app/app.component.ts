import { Component } from '@angular/core';
import { CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewDate: Date = new Date();
  events = [];

  view: CalendarView = CalendarView.Month;
  
  title = 'google-calendar';

  constructor(){
    console.log(this.view)
  }
}
