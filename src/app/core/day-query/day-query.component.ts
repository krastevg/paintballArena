import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-query',
  templateUrl: './day-query.component.html',
  styleUrls: ['./day-query.component.css'],
})
export class DayQueryComponent implements OnInit {
  @Input() isTouched: boolean;
  @Input() isDisabled: boolean;
  @Input() dayData;
  constructor() {}

  ngOnInit(): void {}
}
