import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RePendingComponent } from './re-pending/re-pending.component';
import { ReCompletedComponent } from './re-completed/re-completed.component';

const routes: Routes = [

    { path: '', redirectTo: 'pending', pathMatch: 'full' },


    {
        path: 'pending',
        component: RePendingComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Payback', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'completed',
        component: ReCompletedComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Payback ( Completed )', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
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


        RePendingComponent,
        ReCompletedComponent
    ]
})
export class RepaymentsModule { }