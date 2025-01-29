import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PreferencesComponent } from './preferences/preferences.component';
import { IntegrationComponent } from './integration/integration.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContractsComponent } from './contracts/contracts.component';
import { PartnerUsersComponent } from './partner-users/partner-users.component';

const routes: Routes = [
    { path: '', redirectTo: 'staff-users', pathMatch: 'full' },
    // {
    //     path: 'staff-users',
    //     loadChildren: () =>
    //         import('./staff-users/staff-users.module').then((m) => m.StaffUsersModule),
    // },
    {
        path: 'funding-contract',
        component: ContractsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Contracts', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'staff-users',
        component: PartnerUsersComponent,
        loadChildren: () =>
                  import('./partner-users/partner-users.module').then((m) => m.PartnerUsersModule),
    },
    {
        path: 'preferences',
        component: PreferencesComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Preferences', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'integrations',
        component: IntegrationComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Integrations', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
      
    ],
    declarations: [],
})
export class PartnerSetupModule {}
