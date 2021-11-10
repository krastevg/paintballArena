import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDay } from '../interfaces/day';
import { concatMap, tap } from 'rxjs/operators';
import { IReservation } from '../interfaces/reservation';
import { environment } from '../../environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  date: Date;
  constructor(private http: HttpClient, private userService: UserService) {
    this.date = new Date();
  }

  createReservation(data): Observable<any> {
    return this.http.post<IReservation>(
      `${environment.apiUrl}/reservations?userId=${this.userService.currentUser.id}`,
      data
    );
  }

  getReservation(): Observable<IReservation[]> {
    return this.http.get<IReservation[]>(
      `${environment.apiUrl}/reservations/?userId=${this.userService.currentUser.id}`
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
