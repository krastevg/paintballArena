import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDay } from '../interfaces/day';

@Injectable({
  providedIn: 'root',
})
export class DayService {
  // `http://localhost:3000/day?dayId=xxxxxx` get
  // `http://localhost:3000/day/xxxxxx?type=update/delete&frame=firstFrame/secondFrame/thirdFrame` patch
  date: Date;
  constructor(private http: HttpClient) {
    this.date = new Date();
  }

  getDay(id): Observable<IDay> {
    return this.http.get<IDay>(`http://localhost:3000/day?dayId=${id}`);
  }
}
