import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDay } from '../interfaces/day';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  //apiString: string; // `${environment.apiUrl}/months?month=January&year=2020`;
  // date: Date;
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
  // dayOfWeek = [
  //   'Sunday',
  //   'Monday',
  //   'Tuesday',
  //   'Wednesday',
  //   'Thursday',
  //   'Friday',
  //   'Saturday',
  // ];
  // firstDay: Date;
  selectedDay: IDay;
  constructor(private http: HttpClient) {
    // this.date = new Date();
    // this.firstDay = new Date(
    //   `${
    //     this.months[this.date.getMonth()]
    //   } 1, ${this.date.getFullYear()} 00:00:00`
    // );
    // this.apiString = `${environment.apiUrl}/months?month=${
    //   this.months[this.date.getMonth()]
    // }&year=${this.date.getFullYear()}`;
    // this.apiString = environment.apiUrl;
  }

  // getMonth(): Observable<IMonth> {
  //   return this.http.get<IMonth>(this.apiString);
  // }

  // addEmpty(firstDayOfWeek: string, daysArray: IDay[]): IDay[] {
  //   console.log('first day of week', firstDayOfWeek);

  //   const toAdd = {
  //     Sunday: 6,
  //     Monday: 0,
  //     Tuesday: 1,
  //     Wednesday: 2,
  //     Thursday: 3,
  //     Friday: 4,
  //     Saturday: 5,
  //   };

  //   const dayArr = [
  //     'Monday',
  //     'Tuesday',
  //     'Wednesday',
  //     'Thursday',
  //     'Friday',
  //     'Saturday',
  //     'Sunday',
  //   ];

  //   for (let i = toAdd[firstDayOfWeek] - 1; i > -1; i--) {
  //     daysArray.unshift({
  //       date: 0,
  //       dayOfWeek: dayArr[i],
  //       month: 'month',
  //       year: 2020,
  //       firstFrame: [],
  //       secondFrame: [],
  //       thirdFrame: [],
  //       _id: 'xxxxxx',
  //       __v: 'xxxxx',
  //     });
  //   }

  //   return daysArray;
  // }

  getDay(date: Date): Observable<IDay> {
    const requestBody = {
      //convert date to API specifications
      year: date.toLocaleString('default', { year: 'numeric' }),
      month: date.toLocaleString('default', { month: 'long' }),
      weekday: date.toLocaleString('default', { weekday: 'long' }),
      day: date.toLocaleString('default', { day: 'numeric' }),
    };
    return this.http.post<IDay>(`${environment.apiUrl}/days`, requestBody);
  }
}
