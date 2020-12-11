import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DayDetailComponent } from './day-detail/day-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    CalendarComponent,
    NotfoundComponent,
    DayDetailComponent,
    RegisterComponent,
    ProfileComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  exports: [
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    CalendarComponent,
    NotfoundComponent,
    DayDetailComponent,
    RegisterComponent,
  ],
})
export class CoreModule {}
