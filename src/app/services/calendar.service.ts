import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDay } from '../interfaces/day';
import { environment } from '../../environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  selectedDay: IDay;
  constructor(private http: HttpClient, private userService: UserService) {}

  getDay(date: Date): Observable<IDay> {
    const requestBody = {
      //convert date to API specifications
      year: date.toLocaleString('en-GB', { year: 'numeric' }),
      month: date.toLocaleString('en-GB', { month: 'long' }),
      weekday: date.toLocaleString('en-GB', { weekday: 'long' }),
      day: date.toLocaleString('en-GB', { day: 'numeric' }),
    };
    return this.http.post<IDay>(`${environment.apiUrl}/days`, requestBody);
  }
}
