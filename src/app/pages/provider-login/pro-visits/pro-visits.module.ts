import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { ProCalenderComponent } from './pro-calender/pro-calender.component';
import { ProGridViewComponent } from './pro-grid-view/pro-grid-view.component';

const routes: Routes = [

    { path: '', redirectTo: 'grid-view', pathMatch: 'full' },

    {
        path: 'grid-view',
        component: ProGridViewComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Grid View', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'calender-view',
        component: ProCalenderComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Calender View', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },


]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        ScheduleModule,
        CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    ],
    declarations: [
        ProGridViewComponent,
        ProCalenderComponent
    ]
})
export class ProVisitsModule { }