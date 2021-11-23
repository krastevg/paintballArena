import { Component, Input, OnInit } from '@angular/core';
import { IReservation } from 'src/app/interfaces/reservation';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css'],
})
export class AdminTableComponent implements OnInit {
  displayedColumns: string[] = [
    'date',
    'timeframe',
    'madeAt',
    'status',
    'payment',
    'price',
    'user',
  ];
  @Input() reservations: IReservation[]; // reservations are passed to the components from the parrent
  constructor() {}

  ngOnInit(): void {}
}
