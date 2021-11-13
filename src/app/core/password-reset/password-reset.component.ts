import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { emailValidator } from 'src/app/validators/validator';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css'],
})
export class PasswordResetComponent implements OnInit {
  myForm: FormGroup;
  message: string;
  isLoading: boolean;
  constructor(private _fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.myForm = this._fb.group({
      email: ['', [Validators.required, emailValidator]],
    });
    this.isLoading = false;
  }

  submitHandler(): void {
    this.isLoading = true;
    this.userService.resetPassword(this.myForm.value).subscribe({
      next: (data) => {
        this.isLoading = false;
        this.message = data.message;
        this.myForm.reset();
      },
      error: (err) => {
        console.log(err);
        this.message = 'An error occured, please try again later.';
        this.isLoading = false;
      },
    });
  }
}
