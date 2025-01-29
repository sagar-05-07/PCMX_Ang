import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CompletedComponent } from '../../rcm-funds/payments/completed/completed.component';
import { PendingComponent } from '../../rcm-funds/payments/pending/pending.component';

const routes: Routes = [

    { path: '', redirectTo: 'pending', pathMatch: 'full' },


    {
        path: 'pending',
        component: PendingComponent,
        pathMatch: 'full',
        data: { breadcrumb: '', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'completed',
        component: CompletedComponent,
        pathMatch: 'full',
        data: { breadcrumb: '', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
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
    ]
})
export class LenderFundingModule { }