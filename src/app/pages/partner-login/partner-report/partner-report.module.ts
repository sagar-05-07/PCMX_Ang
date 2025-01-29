import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as Highcharts from 'highcharts';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import { SharedModule } from 'src/app/shared/shared.module';
import { FundingEodReportsComponent } from './funding-eod-reports/funding-eod-reports.component';
import { FundingBatchesReportsComponent } from './funding-batches-reports/funding-batches-reports.component';
import { FundingReportsComponent } from './funding-reports/funding-reports.component';
import { FundingPaymentsReportsComponent } from './funding-payments-reports/funding-payments-reports.component';

// Initialize Highcharts modules
HighchartsAccessibility(Highcharts);

const routes: Routes = [
    { path: '', redirectTo: 'eod', pathMatch: 'full' },
    {
        path: 'eod',
        component: FundingEodReportsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Automated EOD Report', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'fundings-report',
        component: FundingReportsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Funding Reports', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'payments-report',
        component: FundingPaymentsReportsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Payment Reports', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'repayments-report',
        component: FundingBatchesReportsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Batches Reports', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
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

        FundingEodReportsComponent,
        FundingBatchesReportsComponent,
        FundingReportsComponent,
        FundingPaymentsReportsComponent
    ],
})
export class PartnerReportsModule { }
