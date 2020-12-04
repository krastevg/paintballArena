import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.css'],
})
export class DayDetailComponent implements OnInit {
  dayId: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.dayId = this.route.snapshot.paramMap.get('id');
    console.log(this.dayId);
  }
}
