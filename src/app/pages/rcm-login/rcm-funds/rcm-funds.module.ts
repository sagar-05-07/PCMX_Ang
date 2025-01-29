import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { InvoicesComponent } from './invoices/invoices.component';
import { BatchesComponent } from './batches/batches.component';
import { RequestsComponent } from './requests/requests.component';
import { PaymentsComponent } from './payments/payments.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RepaymentsComponent } from './repayments/repayments.component';
import { AddInvoiceComponent } from './invoices/add-invoice/add-invoice.component';
import { FundsPerspectiveComponent } from './invoices/funds-perspective/funds-perspective.component';

const routes: Routes = [

    { path: '', redirectTo: 'invoices', pathMatch: 'full' },

    {
        path: 'invoices',
        component: InvoicesComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Invoices', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'batches',
        component: BatchesComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Batches', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'requests',
        component: RequestsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Requests', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'calculators',
        component: CalculatorComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Calculator', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'repayments',
        component: RepaymentsComponent,
        loadChildren: () =>
            import('./repayments/repayments.module').then((m) => m.RepaymentsModule),
    },
    {
        path: 'payments',
        component: PaymentsComponent,
        loadChildren: () =>
            import('./payments/payments.module').then((m) => m.PaymentsModule),
    },

    // {
    //     path: 'payments/pending',
    //     component: PendingComponent,
    //     pathMatch: 'full',
    //     data: { breadcrumb: 'Payment Pending', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    // },
    // {
    //     path: 'payments/completed',
    //     component: CompletedComponent,
    //     pathMatch: 'full',
    //     data: { breadcrumb: 'Payment Completed', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    // },


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
        InvoicesComponent,
        BatchesComponent,
        RequestsComponent,
        PaymentsComponent,
        CalculatorComponent,
        RepaymentsComponent,
        AddInvoiceComponent,
        FundsPerspectiveComponent,
    ]
})
export class RcmFundsModule { }