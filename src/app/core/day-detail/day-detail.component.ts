import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IDay } from 'src/app/interfaces/day';
import { DayService } from 'src/app/services/day.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.css'],
})
export class DayDetailComponent implements OnInit {
  dayId: string;
  isLoading: boolean;
  dayData: IDay;
  form: FormGroup;
  apiError: string;
  options = [];
  constructor(
    private route: ActivatedRoute,
    private dayService: DayService,
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private reservationService: ReservationService
  ) {
    this.form = this.fb.group({
      frame: ['', Validators.required],
      people: [
        '',
        [Validators.min(6), Validators.max(20), Validators.required],
      ],
    });
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.dayId = this.route.snapshot.paramMap.get('id');
    this.dayService.getDay(this.dayId).subscribe({
      next: (data) => {
        console.log(data);
        this.dayData = data;
        this.checkOptions();
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
      },
    });
    // console.log(this.dayId);
  }

  submitHandler(): void {
    const data = this.form.value;
    const frame = {
      '08:00 - 12:00': 'firstFrame',
      '13:00 - 17:00': 'secondFrame',
      '17:00 - 21:00': 'thirdFrame',
    };
    this.isLoading = true;
    // console.log(data);
    // do request
    this.reservationService
      .makeReservation(
        { people: data.people, hours: data.frame },
        this.dayId,
        this.userService.currentUser.id,
        Number(data.people) * 20,
        frame[data.frame]
      )
      .subscribe({
        next: (res) => {
          console.log('From component hello there: ', res);
          this.isLoading = false;
          this.router.navigate(['/profile']);
        },
        error: (err) => {
          // alert(err);
          this.apiError = err;
          this.isLoading = false;
        },
      });
  }

  checkOptions(): void {
    // if (this.dayData.firstFrame.length === 0) {
    //   this.options.push('08:00 - 12:00');
    // }
    // if (this.dayData.secondFrame.length === 0) {
    //   this.options.push('13:00 - 17:00');
    // }
    // if (this.dayData.thirdFrame.length === 0) {
    //   this.options.push('17:00 - 21:00');
    // }
  }
}
