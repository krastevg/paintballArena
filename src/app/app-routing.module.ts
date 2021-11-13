import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './core/calendar/calendar.component';
import { ReservationDetailComponent } from './core/reservation-detail/reservation-detail.component';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { ProfileComponent } from './core/profile/profile.component';
import { RegisterComponent } from './core/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/noAuth.guard';
import { OnlinePaymentComponent } from './core/online-payment/online-payment.component';
import { PasswordResetComponent } from './core/password-reset/password-reset.component';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NoAuthGuard],
  },
  {
    path: 'reserve',
    component: CalendarComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'reserve/:id',
    component: ReservationDetailComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NoAuthGuard],
  },
  {
    path: 'pay',
    component: OnlinePaymentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'reset',
    component: PasswordResetComponent,
    canActivate: [NoAuthGuard],
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
