import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDay } from '../interfaces/day';
import { IMonth } from '../interfaces/month';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  apiString: string; // `http://localhost:3000/months?month=January&year=2020`;
  date: Date;
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

  firstDay: Date;
  constructor(private http: HttpClient) {
    this.date = new Date();

    this.firstDay = new Date(
      `${
        this.months[this.date.getMonth()]
      } 1, ${this.date.getFullYear()} 00:00:00`
    );

    this.apiString = `http://localhost:3000/months?month=${
      this.months[this.date.getMonth()]
    }&year=${this.date.getFullYear()}`;
  }

  getMonth(): Observable<IMonth> {
    return this.http.get<IMonth>(this.apiString);
  }

  addEmpty(firstDayOfWeek: string, daysArray: IDay[]): IDay[] {
    const toAdd = {
      Sunday: 6,
      Monday: 0,
      Tuesday: 1,
      Wednesday: 2,
      Thursday: 3,
      Friday: 4,
      Saturday: 5,
    };

    const dayArr = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];

    for (let i = 0; i < toAdd[firstDayOfWeek]; i++) {
      daysArray.unshift({
        date: 0,
        dayOfWeek: dayArr[i],
        month: 'month',
        year: 2020,
        firstFrame: [],
        secondFrame: [],
        thirdFrame: [],
        _id: 'xxxxxx',
        __v: 'xxxxx',
      });
    }

    return daysArray;
  }
}
