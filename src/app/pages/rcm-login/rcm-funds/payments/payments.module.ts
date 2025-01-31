import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CompletedComponent } from './completed/completed.component';
import { PendingComponent } from './pending/pending.component';
import { InnerInvoiceComponent } from './inner-invoice/inner-invoice.component';

const routes: Routes = [

    { path: '', redirectTo: 'pending', pathMatch: 'full' },


    {
        path: 'pending',
        component: PendingComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Funding', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'completed',
        component: CompletedComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Funding(Completed)', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'inner-invoice',
        component: InnerInvoiceComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Invoice', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
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
        PendingComponent,
        CompletedComponent,
        InnerInvoiceComponent
    ]
})
export class PaymentsModule { }