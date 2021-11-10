import { Component, Input, OnInit } from '@angular/core';
import { IReservation } from 'src/app/interfaces/reservation';

@Component({
  selector: 'app-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.css'],
})
export class ProfileTableComponent implements OnInit {
  displayedColumns: string[] = ['day', 'timeframe', 'price', '_id'];
  @Input() reservations: IReservation[];

  constructor() {}

  ngOnInit(): void {}

  deleteHandler(id): void {
    console.log(id);
  }
}
