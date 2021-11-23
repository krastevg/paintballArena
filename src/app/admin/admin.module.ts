import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { RevenueByDateComponent } from './revenue-by-date/revenue-by-date.component';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { StatisticComponent } from './statistic/statistic.component';
import { SearchUserComponent } from './search-user/search-user.component';

@NgModule({
  declarations: [AdminPanelComponent, CreateComponent, DeleteComponent, RevenueByDateComponent, AdminTableComponent, StatisticComponent, SearchUserComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [AdminPanelComponent],
})
export class AdminModule {}
