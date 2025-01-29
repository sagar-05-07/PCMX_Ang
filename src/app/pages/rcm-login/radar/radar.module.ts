import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MatricsComponent } from './matrics/matrics.component';
import { ActivityComponent } from './activity/activity.component';
import { NewMatricsComponent } from './new-matrics/new-matrics.component';
import { RadarPatientsComponent } from './radar-patients/radar-patients.component';
import { RadarProvidersComponent } from './radar-providers/radar-providers.component';
import { RadarLawFirmsComponent } from './radar-law-firms/radar-law-firms.component';
import { RadarReferralsComponent } from './radar-referrals/radar-referrals.component';
import { RadarVisitsComponent } from './radar-visits/radar-visits.component';
import { RadarClaimsComponent } from './radar-claims/radar-claims.component';
import { RadarCasesComponent } from './radar-cases/radar-cases.component';
import { RadarPaymentsComponent } from './radar-payments/radar-payments.component';
import { RadarFundsComponent } from './radar-funds/radar-funds.component';

const routes: Routes = [

    { path: '', redirectTo: 'matrics', pathMatch: 'full' },

    {
        path: 'analytics',
        component: AnalyticsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Analytics', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'matrics',
        component: NewMatricsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Metrics', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },

    {
        path: 'activity',
        component: ActivityComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Activity', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },

    {
        path: 'radar-patients',
        component: RadarPatientsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Patient', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'radar-providers',
        component: RadarProvidersComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Providers', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'radar-law-firms',
        component: RadarLawFirmsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Law Firms', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'radar-referrals',
        component: RadarReferralsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Referrals', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'radar-visits',
        component: RadarVisitsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Visits', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'radar-claims',
        component: RadarClaimsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Claims', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'radar-cases',
        component: RadarCasesComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Cases', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'radar-payments',
        component: RadarPaymentsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Payments', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'radar-funds',
        component: RadarFundsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Funds', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
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
        AnalyticsComponent,
        MatricsComponent,
        ActivityComponent,
        NewMatricsComponent,
        RadarPatientsComponent,
        RadarProvidersComponent,
        RadarLawFirmsComponent,
        RadarReferralsComponent,
        RadarVisitsComponent,
        RadarClaimsComponent,
        RadarCasesComponent,
        RadarPaymentsComponent,
        RadarFundsComponent,

    ]
})
export class RadarModule { }