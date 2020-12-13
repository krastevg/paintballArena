import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDay } from '../interfaces/day';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DayService {
  // `${environment.apiUrl}/day?dayId=xxxxxx` get
  // `${environment.apiUrl}/day/xxxxxx?type=update/delete&frame=firstFrame/secondFrame/thirdFrame` patch
  date: Date;
  constructor(private http: HttpClient) {
    this.date = new Date();
  }

  getDay(id): Observable<IDay> {
    return this.http.get<IDay>(`${environment.apiUrl}/day?dayId=${id}`);
  }
}
