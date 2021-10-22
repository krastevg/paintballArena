import { Component, OnInit } from '@angular/core';
import { IDay } from 'src/app/interfaces/day';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  isLoading: boolean;
  selectedDay: IDay | null;
  minDate: Date;
  isDisabled: boolean;
  isTouched: boolean;
  constructor(private calendarService: CalendarService) {
    this.isLoading = true;
    this.minDate = new Date(); // should return today's date
    this.isTouched = false;
  }

  ngOnInit(): void {
    this.isLoading = false;
    this.isDisabled = false;
  }

  onSelect(date: Date): Promise<IDay> {
    if (this.isDisabled) {
      return;
    }
    this.isDisabled = true; // disbale the input so the user cannot select another date while the first query has not ended
    this.isTouched = true;
    // call service here and await it after the data is gathered send it to the day-query component
    this.calendarService.getDay(date).subscribe({
      next: (response) => {
        console.log(response);
        this.selectedDay = response;
        this.calendarService.selectedDay = response; // maybe comment this out
        this.isDisabled = false;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
