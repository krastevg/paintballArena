import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IReservation } from 'src/app/interfaces/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.css'],
})
export class ProfileTableComponent implements OnInit {
  displayedColumns: string[] = ['day', 'timeframe', 'price', '_id'];
  reservations: IReservation[];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.reservationService.getReservation().subscribe({
      next: (data) => {
        this.reservations = data;
        console.log(this.reservations);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  cancelHandler(id): void {
    this.reservationService.cancelReservation(id).subscribe({
      next: (response) => {
        console.log(response);
        this.ngOnInit();
      },
      error: (err) => {
        console.log(err);
        alert('Cancel FAILED');
      },
    });
  }
}
