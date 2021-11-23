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
import { LoadingComponent } from './loading/loading.component';
import { MaterialModule } from '../material/material.module';
import { DayQueryComponent } from './day-query/day-query.component';
import { OnlinePaymentComponent } from './online-payment/online-payment.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ProfileModule } from '../profile/profile.module';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    CalendarComponent,
    NotfoundComponent,
    ReservationDetailComponent,
    RegisterComponent,
    LoadingComponent,
    DayQueryComponent,
    OnlinePaymentComponent,
    PasswordResetComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    ProfileModule,
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
