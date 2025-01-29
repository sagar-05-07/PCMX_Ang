import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { GridViewComponent } from './grid-view/grid-view.component';
import { CalenderViewComponent } from './calender-view/calender-view.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AddVisitComponent } from './grid-view/add-visit/add-visit.component';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { VisitMergeComponent } from './grid-view/visit-merge/visit-merge.component';

const routes: Routes = [

    { path: '', redirectTo: 'grid-view', pathMatch: 'full' },

    {
        path: 'grid-view',
        component: GridViewComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Visits', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'calender-view',
        component: CalenderViewComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Visits', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
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
        GridViewComponent,
        CalenderViewComponent,
        AddVisitComponent,
        VisitMergeComponent
    ]
})
export class VisitsModule { }