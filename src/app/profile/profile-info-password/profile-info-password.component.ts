import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { rePasswordValidatorFactory } from 'src/app/validators/validator';

@Component({
  selector: 'app-profile-info-password',
  templateUrl: './profile-info-password.component.html',
  styleUrls: ['./profile-info-password.component.css'],
})
export class ProfileInfoPasswordComponent implements OnInit {
  isLoading: boolean;
  myForm: FormGroup;
  message: string;
  constructor(private _fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.message = null;
    const newPassControl = this._fb.control('', [
      Validators.required,
      Validators.minLength(5),
    ]);
    this.myForm = this._fb.group({
      newPass: newPassControl,
      rePass: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          rePasswordValidatorFactory(newPassControl),
        ],
      ],
    });
    this.isLoading = false;
  }

  submitHandler(): void {
    this.isLoading = true;
    this.userService.changePassword(this.myForm.value).subscribe({
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
