import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDay } from '../interfaces/day';
import { concatMap, tap } from 'rxjs/operators';
import { IReservation } from '../interfaces/reservation';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  // `${environment.apiUrl}/day/xxxxxx?type=update/delete&frame=firstFrame/secondFrame/thirdFrame` patch
  date: Date;
  constructor(private http: HttpClient) {
    this.date = new Date();
  }

  makeReservation(body, dayid, userid, price, frame): Observable<any> {
    return this.http
      .post<IReservation>(
        `${environment.apiUrl}/reservation/makeReservation?dayId=${dayid}&userId=${userid}&price=${price}`,
        body
      )
      .pipe(
        tap((res) => console.log('from Service', res)),
        concatMap((res: IReservation) =>
          this.http.patch(
            `${environment.apiUrl}/day/${dayid}?type=update&frame=${frame}`,
            {
              reservId: res._id,
            }
          )
        )
      );
  }

  getReservation(userId): Observable<IReservation[]> {
    return this.http.get<IReservation[]>(
      `${environment.apiUrl}/reservation/getByUser/${userId}`
    );
  }

  deleteReservation(reservationId, dayid, frame): Observable<any> {
    return this.http
      .delete<IReservation>(
        `${environment.apiUrl}/reservation/delete/${reservationId}`
      )
      .pipe(
        tap((res) => console.log('from Service', res)),
        concatMap((res: IReservation) =>
          this.http.patch(
            `${environment.apiUrl}/day/${dayid}?type=delete&frame=${frame}`,
            {
              reservId: res._id,
            }
          )
        )
      );
  }
}
