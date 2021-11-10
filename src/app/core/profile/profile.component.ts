import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IReservation } from 'src/app/interfaces/reservation';
import { ReservationService } from 'src/app/services/reservation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  isLoading: boolean;

  reservations: IReservation[];
  constructor(
    private reservationService: ReservationService,
    private userService: UserService,
    private router: Router
  ) {
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.reservationService.getReservation().subscribe({
      next: (data) => {
        this.reservations = data;
        this.isLoading = false;
        console.log(this.reservations);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  // deleteHandler(reservationId, day, hour): void {
  //   console.log(reservationId, day, hour);
  //   this.isLoading = true;
  //   const frame = {
  //     '08:00 - 12:00': 'firstFrame',
  //     '13:00 - 17:00': 'secondFrame',
  //     '17:00 - 21:00': 'thirdFrame',
  //   };
  //   this.reservationService
  //     .deleteReservation(reservationId, day, frame[hour])
  //     .subscribe({
  //       next: (data) => {
  //         console.log(data);
  //         this.isLoading = false;
  //         this.ngOnInit();
  //       },
  //       error: (err) => {
  //         this.isLoading = false;
  //         console.log(err);
  //       },
  //     });
  // }
}
