import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { PartnerDashboardComponent } from './partner-dashboard/partner-dashboard.component';
import { PartnerRequestsComponent } from './partner-requests/partner-requests.component';
import { PartnerPaymentsComponent } from './partner-payments/partner-payments.component';
import { PartnerCalculatorComponent } from './partner-calculator/partner-calculator.component';
import { PartnerRepaymentsComponent } from './partner-repayments/partner-repayments.component';
import { PartnerSetupComponent } from './partner-setup/partner-setup.component';
import { CompletedComponent } from './partner-payments/completed/completed.component';
import { PendingComponent } from './partner-payments/pending/pending.component';
import { ContractsComponent } from './partner-setup/contracts/contracts.component';
import { PreferencesComponent } from './partner-setup/preferences/preferences.component';
import { IntegrationComponent } from './partner-setup/integration/integration.component';
import { PartnerUsersComponent } from './partner-setup/partner-users/partner-users.component';
import { RequestsGridComponent } from './partner-requests/requests-grid/requests-grid.component';
import { NewRequestComponent } from './partner-requests/new-request/new-request.component';
import { PartnerReportComponent } from './partner-report/partner-report.component';

const routes: Routes = [

    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

    {
        path: 'dashboard',
        component: PartnerDashboardComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Dashboard', description: 'Statistics, Charts and Metrics of activity, trend and distribution' }
    },
    {
        path: 'requests',
        component: PartnerRequestsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Batches', description: 'Batch payment requests are tracked here.' }
    },
    {
        path: 'payments',
        component: PartnerPaymentsComponent,
        loadChildren: () =>
            import('./partner-payments/partner-payments.module').then((m) => m.PartnerPaymentsComponent),
    },
    {
        path: 'calculator',
        component: PartnerCalculatorComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Calculator', description: 'This is a repayment calculator based on fees and interest rate in the contract.' }
    },
    {
        path: 'repayments',
        component: PartnerRepaymentsComponent,
        loadChildren: () =>
            import('./partner-repayments/partner-repayments.module').then((m) => m.PartnerRepaymentsComponent),
    },

    {
        path: 'setup',
        component: PartnerSetupComponent,
        loadChildren: () =>
            import('./partner-setup/partner-setup.module').then((m) => m.PartnerSetupModule),

    },

    {
        path: 'reports',
        component: PartnerReportComponent,
        loadChildren: () =>
            import('./partner-report/partner-report.module').then((m) => m.PartnerReportsModule),

    },

]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [

        PartnerDashboardComponent,
        PartnerRequestsComponent,
        PartnerPaymentsComponent,
        PartnerCalculatorComponent,
        PartnerRepaymentsComponent,
        PartnerSetupComponent,
        ContractsComponent,
        PreferencesComponent,
        IntegrationComponent,
        PartnerUsersComponent,
        RequestsGridComponent,
        NewRequestComponent,
        PartnerReportComponent

    ]
})
export class PartnerLoginModule { }