import { Component, OnInit } from '@angular/core';
import { IMonth } from 'src/app/interfaces/month';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  // date = new Date();
  // months = [
  //   'January',
  //   'February',
  //   'March',
  //   'April',
  //   'May',
  //   'June',
  //   'July',
  //   'August',
  //   'September',
  //   'October',
  //   'November',
  //   'December',
  // ];
  // days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  dayOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  month: IMonth;
  isLoading: boolean;
  today: number;
  constructor(private calendarService: CalendarService) {
    this.isLoading = true;
    this.today = new Date().getDate();
  }

  ngOnInit(): void {
    this.calendarService.getMonth().subscribe({
      next: (data) => {
        this.month = data[0];
        this.month.days = this.calendarService.addEmpty(
          this.dayOfWeek[this.calendarService.firstDay.getDay()],
          this.month.days
        );
        console.log(this.month);
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
