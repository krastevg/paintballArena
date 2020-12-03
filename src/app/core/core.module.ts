import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomeComponent, LoginComponent, HeaderComponent],
})
export class CoreModule {}
