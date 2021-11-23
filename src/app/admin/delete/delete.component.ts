import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { emailValidator } from 'src/app/validators/validator';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  myForm: FormGroup;
  message: string;
  isLoading: boolean;
  isErr: boolean;
  constructor(private adminService: AdminService, private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this._fb.group({
      email: ['', [Validators.required, emailValidator]],
    });
    this.isLoading = false;
    this.message = '';
    this.isErr = false;
  }
  submitHandler(): void {
    this.isLoading = true;
    this.adminService.deleteUser(this.myForm.value).subscribe({
      next: (data) => {
        this.isErr = false;
        this.message = data.message;
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
