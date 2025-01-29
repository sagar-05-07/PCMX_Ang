import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as Highcharts from 'highcharts';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import { SharedModule } from 'src/app/shared/shared.module';
import { LawEodReportsComponent } from './law-eod-reports/law-eod-reports.component';
import { LawCasesReportsComponent } from './law-cases-reports/law-cases-reports.component';
import { LawClaimsReportsComponent } from './law-claims-reports/law-claims-reports.component';
import { LawPaymentsReportsComponent } from './law-payments-reports/law-payments-reports.component';

// Initialize Highcharts modules
HighchartsAccessibility(Highcharts);

const routes: Routes = [
    { path: '', redirectTo: 'autometed-eod', pathMatch: 'full' },
    {
        path: 'autometed-eod',
        component: LawEodReportsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Automated EOD Report', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'case-report',
        component: LawCasesReportsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Case Reports', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'payments-report',
        component: LawPaymentsReportsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Payment Reports', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'claims-report',
        component: LawClaimsReportsComponent,
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
        LawPaymentsReportsComponent,
        LawClaimsReportsComponent,
        LawEodReportsComponent,
        LawCasesReportsComponent,


    ],
})
export class LawReportsModule { }
