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
    this.isLoading = false;
  }
}
