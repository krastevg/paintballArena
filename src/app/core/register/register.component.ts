import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import {
  rePasswordValidatorFactory,
  usernameValidator,
} from 'src/app/validators/validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isLoading = false;
  constructor(private fb: FormBuilder, private userService: UserService) {
    const passwordControl = this.fb.control('', [
      Validators.required,
      Validators.minLength(5),
    ]);
    this.form = this.fb.group({
      username: [
        '',
        [Validators.required, Validators.minLength(5), usernameValidator],
      ],
      password: passwordControl,
      rePassword: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          rePasswordValidatorFactory(passwordControl),
        ],
      ],
    });
  }

  submitHandler(): void {
    const data = this.form.value;
    this.isLoading = true;
    this.userService.register(data).subscribe({
      next: (resData) => {
        this.isLoading = false;
        console.log(resData);
      },
      error: (err) => {
        this.isLoading = false;
        console.error(err);
      },
    });
  }

  ngOnInit(): void {}
}
