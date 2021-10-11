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
import { LoadingComponent } from './loading/loading.component';
import { MaterialModule } from '../material/material.module';
import { DayQueryComponent } from './day-query/day-query.component';

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
    LoadingComponent,
    DayQueryComponent,
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
    DayDetailComponent,
    RegisterComponent,
    LoadingComponent,
    DayQueryComponent,
  ],
})
export class CoreModule {}
