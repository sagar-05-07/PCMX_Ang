import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActiveAlertsComponent } from './active-alerts/active-alerts.component';
import { HistoryAlertsComponent } from './history-alerts/history-alerts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { ManageUsersComponent } from './manage-users.component';

const routes: Routes = [
  { path: '', redirectTo: 'active', pathMatch: 'full' },

  {
    path: 'active',
    component: ActiveAlertsComponent,
    // pathMatch: 'full',
    data: {
      breadcrumb: 'Active',
      description: 'This page is used to manage User',
    },
  },

  {
    path: 'history',
    component: HistoryAlertsComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'History',
      description: 'This page is used to manage Roles',
    },
  },
];
@NgModule({
  declarations: [ActiveAlertsComponent, HistoryAlertsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AdminAlertsComponent {}
