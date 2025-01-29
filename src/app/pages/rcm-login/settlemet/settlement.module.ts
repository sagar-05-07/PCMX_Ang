import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [

    { path: '', redirectTo: 'staff-users', pathMatch: 'full' },

    {
        path: 'staff-users',
        // component: StaffUsersComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Staff Users', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },


]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        // SharedModule
    ],
    declarations: [

    ]
})
export class SettlementModule { }