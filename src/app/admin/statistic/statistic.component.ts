import { Component, Input, OnInit } from '@angular/core';
import { IStatistic } from 'src/app/interfaces/statistic';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css'],
})
export class StatisticComponent implements OnInit {
  @Input() data: IStatistic;
  constructor() {}

  ngOnInit(): void {}
}
