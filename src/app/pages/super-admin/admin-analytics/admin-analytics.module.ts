import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AnalyticsProvidersComponent } from './analytics-providers/analytics-providers.component';
import { AnalyticsRequestorsComponent } from './analytics-requestors/analytics-requestors.component';
import { AnalyticsSalesComponent } from './analytics-sales/analytics-sales.component';
import { AnalyticsLendersComponent } from './analytics-lenders/analytics-lenders.component';

// import { ManageUsersComponent } from './manage-users.component';

const routes: Routes = [
  { path: '', redirectTo: 'analytics-sales', pathMatch: 'full' },

  {
    path: 'analytics-providers',
    component: AnalyticsProvidersComponent,
    // pathMatch: 'full',
    data: {
      breadcrumb: 'Providers',
      description: 'This page is used to manage User',
    },
  },

  {
    path: 'analytics-requestors',
    component: AnalyticsRequestorsComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Law Firms',
      description: 'This page is used to manage Roles',
    },
  },
  {
    path: 'analytics-sales', component: AnalyticsSalesComponent,
    pathMatch: 'full', data: {
      breadcrumb: 'Networks', description: 'This page is used to manage Roles',
    },
  },

  {
    path: 'analytics-lenders', component: AnalyticsLendersComponent,
    pathMatch: 'full', data: {
      breadcrumb: 'Lenders', description: 'This page is used to manage Roles',
    },
  },
];
@NgModule({
  declarations: [
    AnalyticsProvidersComponent,
    AnalyticsRequestorsComponent,
    AnalyticsSalesComponent,
    AnalyticsLendersComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class AdminAnalyticsComponent { }
