import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DayDetailComponent } from './day-detail/day-detail.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    CalendarComponent,
    NotfoundComponent,
    DayDetailComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    CalendarComponent,
    NotfoundComponent,
    DayDetailComponent,
  ],
})
export class CoreModule {}
