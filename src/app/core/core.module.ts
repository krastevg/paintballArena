import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { LoadingComponent } from './loading/loading.component';
import { MaterialModule } from '../material/material.module';
import { DayQueryComponent } from './day-query/day-query.component';
import { OnlinePaymentComponent } from './online-payment/online-payment.component';
import { ProfileTableComponent } from './profile-table/profile-table.component';
import { ProfileInfoPasswordComponent } from './profile-info-password/profile-info-password.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProfileInfoEmailComponent } from './profile-info-email/profile-info-email.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    CalendarComponent,
    NotfoundComponent,
    ReservationDetailComponent,
    RegisterComponent,
    ProfileComponent,
    LoadingComponent,
    DayQueryComponent,
    OnlinePaymentComponent,
    ProfileTableComponent,
    ProfileInfoPasswordComponent,
    ProfileInfoComponent,
    ProfileInfoEmailComponent,
    PasswordResetComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    CalendarComponent,
    NotfoundComponent,
    ReservationDetailComponent,
    RegisterComponent,
    LoadingComponent,
    DayQueryComponent,
  ],
})
export class CoreModule {}
