import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ProReferralsComponent } from './pro-referrals/pro-referrals.component';
import { ProPatientsComponent } from './pro-patients/pro-patients.component';
import { ProDashboardComponent } from './pro-dashboard/pro-dashboard.component';
import { ProVisitsComponent } from './pro-visits/pro-visits.component';
import { ProSetupComponent } from './pro-setup/pro-setup.component';
import { ProReportsComponent } from './pro-reports/pro-reports.component';

const routes: Routes = [

    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

    {
        path: 'dashboard',
        component: ProDashboardComponent,
        pathMatch: 'full',
        data: { breadcrumb: ' Dashboard', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },

    {
        path: 'patients',
        component: ProPatientsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Patients', description: 'Provider can manage the list of patients.  These patients are either logged by the provider or are incoming / outgoing referrals.' }
    },

    {
        path: 'referrals',
        component: ProReferralsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Referrals', description: 'These are patient orders that are referred to this provider.' }
    },

    {
        path: 'visits',
        component: ProVisitsComponent,
        loadChildren: () =>
            import('./pro-visits/pro-visits.module').then((m) => m.ProVisitsModule),
    },

    {
        path: 'reports',
        component: ProReportsComponent,
        loadChildren: () =>
            import('./pro-reports/pro-reports.module').then((m) => m.ProReportsModule),
    },

    {
        path: 'setup',
        component: ProSetupComponent,
        loadChildren: () =>
            import('./pro-setup/pro-setup.module').then((m) => m.ProSetupModule),
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

        ProReferralsComponent,
        ProPatientsComponent,
        ProDashboardComponent,
        ProVisitsComponent,
        ProSetupComponent,
    ]
})
export class ProviderLoginModule { }