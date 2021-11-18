import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { emailValidator } from 'src/app/validators/validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-info-email',
  templateUrl: './profile-info-email.component.html',
  styleUrls: ['./profile-info-email.component.css'],
})
export class ProfileInfoEmailComponent implements OnInit {
  myForm: FormGroup;
  message: string;
  codeMessage: string;
  isLoading: boolean;
  sentCode: boolean;
  constructor(
    private _fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myForm = this._fb.group({
      code: [
        '',
        [
          Validators.required,
          Validators.maxLength(12),
          Validators.minLength(12),
        ],
      ],
      email: ['', [Validators.required, emailValidator]],
    });
    this.isLoading = false;
    this.sentCode = false;
    this.codeMessage = '';
    this.message = '';
  }
  submitHandler(): void {
    this.isLoading = true;
    this.userService.emailChange(this.myForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this.message = data.message;
        this.isLoading = false;
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000);
      },
      error: (err) => {
        console.log(err);
        this.message = err;
        this.isLoading = false;
      },
    });
  }

  sendCode(): void {
    this.isLoading = true;
    this.userService.sendEmailChangeCode().subscribe({
      next: (data) => {
        this.codeMessage = data.message;
        this.sentCode = true;
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.codeMessage = err.error.message;
        this.isLoading = false;
      },
    });
  }
}
