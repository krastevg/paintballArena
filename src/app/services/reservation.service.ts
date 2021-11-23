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
      `${environment.apiUrl}/reservations`,
      data
    );
  }

  getReservation(): Observable<IReservation[]> {
    return this.http.get<IReservation[]>(
      `${environment.apiUrl}/reservations?userId=${this.userService.currentUser.id}`
    );
  }

  cancelReservation(reservationId): Observable<any> {
    return this.http.patch(
      `${environment.apiUrl}/reservations/${reservationId}`,
      { status: 'canceled' }
    );
  }
}
