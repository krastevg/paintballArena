import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IStatistic } from 'src/app/interfaces/statistic';
import { AdminService } from 'src/app/services/admin.service';
import { emailValidator } from 'src/app/validators/validator';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css'],
})
export class SearchUserComponent implements OnInit {
  myForm: FormGroup;
  message: string;
  isLoading: boolean;
  isErr: boolean;
  reqResult: IStatistic;
  constructor(private adminService: AdminService, private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this._fb.group({
      email: ['', [Validators.required, emailValidator]],
    });
    this.isLoading = false;
    this.message = '';
    this.isErr = true;
  }
  submitHandler(): void {
    this.isLoading = true;
    this.adminService.getRevenueByUser(this.myForm.value).subscribe({
      next: (data) => {
        this.message = '';
        this.reqResult = data;
        this.isErr = false;
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.message = err;
        this.isErr = true;
        this.isLoading = false;
      },
    });
  }
}
