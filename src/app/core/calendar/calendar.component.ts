import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  date = new Date();
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  dayOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  firstDay = new Date(
    `${
      this.months[this.date.getMonth()]
    } 1, ${this.date.getFullYear()} 00:00:00`
  );

  testArr = [];
  counter = this.firstDay.getDay();

  constructor() {}

  changeCounter(): void {
    if (this.counter <= 5) {
      this.counter++;
    } else {
      this.counter = 0;
    }
  }

  ngOnInit(): void {
    //this.counter = 1;
    for (let i = 0; i < this.days[this.date.getMonth()]; i++) {
      this.testArr.push({
        day: i + 1,
        dayOfWeek: this.dayOfWeek[this.counter],
        month: this.months[this.firstDay.getMonth()],
        _id: 'xxxxxxxxxxxxxxxxxxxxxxxx1',
      });
      this.changeCounter();
    }
    this.testArr.unshift({
      day: '',
      dayOfWeek: 'test',
      month: '',
      _id: 'xxxxxx33331',
    });

    console.log(this.testArr);
  }
}
