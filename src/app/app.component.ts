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
  
  title = 'google-calendar';

  view: CalendarView = CalendarView.Day

  CalendarView = CalendarView;

  constructor(){
    console.log(this.CalendarView)
  }
  clickDay(day){
    console.log(day)
  }
}
