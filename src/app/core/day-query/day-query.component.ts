import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDay } from 'src/app/interfaces/day';

@Component({
  selector: 'app-day-query',
  templateUrl: './day-query.component.html',
  styleUrls: ['./day-query.component.css'],
})
export class DayQueryComponent implements OnInit {
  @Input() isTouched: boolean;
  @Input() isDisabled: boolean;
  @Input() dayData: IDay;
  @Input() maxPeople: number;
  @Input() reservationRoute: string;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToReservation(timeframe): void {
    if (!!this.dayData._id && !!timeframe) {
      this.router.navigate([this.reservationRoute, this.dayData._id], {
        state: { data: { timeframe, dayData: this.dayData } },
      });
    } else {
      console.log('No timeframe or no dayData');
    }
  }
}
