import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IDay } from 'src/app/interfaces/day';
import { ITimeframe } from 'src/app/interfaces/timeframe';
import { ReservationService } from 'src/app/services/reservation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.css'],
})
export class ReservationDetailComponent implements OnInit {
  isLoading: boolean;
  dayData: IDay;
  form: FormGroup;
  apiError: string;
  options = [];
  timeframe: ITimeframe;
  price: {};
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    this.timeframe = history.state.data.timeframe;
    this.dayData = history.state.data.dayData;
    this.form = this.fb.group({
      people: [
        '',
        [
          Validators.min(1),
          Validators.max(this.timeframe.value),
          Validators.required,
        ],
      ],
      gear: ['', [Validators.required]],
      payment: ['', [Validators.required]],
    });

    for (let i = 1; i <= this.timeframe.value; i++) {
      this.options.push(i);
    }
    this.price = { true: 15, false: 10 };
    this.isLoading = false;
  }

  submitHandler(): void {
    const formData = this.form.value;
    formData.dayId = this.dayData._id;
    formData.price = Number(formData.people) * this.price[formData.gear];
    formData.user = this.userService.currentUser.id;
    formData.timeframe = this.timeframe.key;
    formData.priceWithGear = this.price['true'];
    formData.priceNoGear = this.price['false'];
    this.isLoading = true;
    this.reservationService.createReservation(formData).subscribe({
      next: (response) => {
        console.log(response);
        //if sucsesfull redirect
        this.isLoading = false;
        if (formData.payment === 'online') {
          this.router.navigate(['/pay']);
        } else {
          this.router.navigate(['/profile']);
        }
      },
      error: (err) => {
        console.log(err);
        this.apiError = err;
      },
    });
  }
}
