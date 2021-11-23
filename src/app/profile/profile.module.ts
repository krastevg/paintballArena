import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ProfileComponent } from '../profile/profile/profile.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProfileInfoEmailComponent } from './profile-info-email/profile-info-email.component';
import { ProfileInfoPasswordComponent } from './profile-info-password/profile-info-password.component';
import { ProfileTableComponent } from './profile-table/profile-table.component';
import { AdminModule } from '../admin/admin.module';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileInfoComponent,
    ProfileInfoEmailComponent,
    ProfileInfoPasswordComponent,
    ProfileTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    AdminModule,
  ],
  exports: [
    ProfileComponent,
    ProfileInfoComponent,
    ProfileInfoEmailComponent,
    ProfileInfoPasswordComponent,
    ProfileTableComponent,
  ],
})
export class ProfileModule {}
