import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as Highcharts from 'highcharts';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProEodReportComponent } from './pro-eod-report/pro-eod-report.component';
import { ProReportReferralsComponent } from './pro-report-referrals/pro-report-referrals.component';
import { ProReportVisitsComponent } from './pro-report-visits/pro-report-visits.component';
import { ProReportsComponent } from './pro-reports.component';

// Initialize Highcharts modules
HighchartsAccessibility(Highcharts);

const routes: Routes = [
    { path: '', redirectTo: 'eod', pathMatch: 'full' },

    {
        path: 'eod',
        component: ProEodReportComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Automated EOD Report', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'referral-report',
        component: ProReportReferralsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Referrals Report', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'visit-report',
        component: ProReportVisitsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Visits Report', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
    ],
    declarations: [
        ProReportsComponent,
        ProEodReportComponent,
        ProReportVisitsComponent,
        ProReportReferralsComponent
    ],
})
export class ProReportsModule { }
