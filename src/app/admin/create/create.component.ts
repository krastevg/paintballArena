import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { emailValidator } from 'src/app/validators/validator';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  myForm: FormGroup;
  message: string;
  isLoading: boolean;
  constructor(private adminService: AdminService, private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this._fb.group({
      email: ['', [Validators.required, emailValidator]],
    });
    this.isLoading = false;
    this.message = '';
  }
  submitHandler(): void {
    this.isLoading = true;
    this.adminService.createAdmin(this.myForm.value).subscribe({
      next: (data) => {
        this.message = data.message;
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.message = err;
        this.isLoading = false;
      },
    });
  }
}
