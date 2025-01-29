import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as Highcharts from 'highcharts';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import { AutomaticAodReportComponent } from './automatic-aod-report/automatic-aod-report.component';
import { CaseReportComponent } from './case-report/case-report.component';
import { ReferralsStatusComponent } from './referrals-status/referrals-status.component';
import { VisitReportComponent } from './visit-report/visit-report.component';
import { ClaimsReportComponent } from './claims-report/claims-report.component';
import { SettlementReportComponent } from './settlement-report/settlement-report.component';
import { FundingReportComponent } from './funding-report/funding-report.component';
import { PaymentReportComponent } from './payment-report/payment-report.component';
import { RepaymentReportComponent } from './repayment-report/repayment-report.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddAodComponent } from './automatic-aod-report/add-aod/add-aod.component';

// Initialize Highcharts modules
HighchartsAccessibility(Highcharts);

const routes: Routes = [
    { path: '', redirectTo: 'autometed-eod', pathMatch: 'full' },
    {
        path: 'autometed-eod',
        component: AutomaticAodReportComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'EOD Report', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'case-report',
        component: CaseReportComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Case Reports', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'referral-report',
        component: ReferralsStatusComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Referral Status Reports', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'visit-report',
        component: VisitReportComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Visit  Reports', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'settlments-report',
        component: SettlementReportComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Settlment Reports', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'fundings-report',
        component: FundingReportComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Funding Reports', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'payments-report',
        component: PaymentReportComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Payment Reports', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'repayments-report',
        component: RepaymentReportComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Repayment Reports', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'claims-report',
        component: ClaimsReportComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Claim Reports', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
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
        AutomaticAodReportComponent,
        CaseReportComponent,
        ReferralsStatusComponent,
        VisitReportComponent,
        ClaimsReportComponent,
        SettlementReportComponent,
        FundingReportComponent,
        PaymentReportComponent,
        RepaymentReportComponent,
        AddAodComponent,
    ],
})
export class ReportsModule { }
