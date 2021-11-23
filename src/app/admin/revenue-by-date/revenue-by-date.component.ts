import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IStatistic } from 'src/app/interfaces/statistic';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-revenue-by-date',
  templateUrl: './revenue-by-date.component.html',
  styleUrls: ['./revenue-by-date.component.css'],
})
export class RevenueByDateComponent implements OnInit {
  range: FormGroup;
  message: string;
  isLoading: boolean;
  searchComplete: boolean;
  reqData: IStatistic;
  constructor(private _fb: FormBuilder, private adminService: AdminService) {}

  ngOnInit(): void {
    this.range = this._fb.group({
      start: ['', [Validators.required]],
      end: ['', [Validators.required]],
    });
    this.isLoading = false;
    this.searchComplete = false;
    this.message = '';
  }

  submitHandler(): void {
    this.isLoading = true;
    this.adminService.getRevenueByDate(this.range.value).subscribe({
      next: (data) => {
        this.message = '';
        this.reqData = data;
        this.isLoading = false;
        this.searchComplete = true;
      },
      error: (err) => {
        console.log(err);
        this.message = err;
        this.isLoading = false;
      },
    });
  }
}
