import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProviderPreferencesComponent } from './provider-preferences/provider-preferences.component';
import { ProviderIntegrationComponent } from './provider-integration/provider-integration.component';
import { ProManageUsersComponent } from './pro-manage-users/pro-manage-users.component';

const routes: Routes = [

    { path: '', redirectTo: 'manage-users', pathMatch: 'full' },

    // {
    //     path: 'manage-users',
    //     component: ProviderUsersComponent,
    //     loadChildren: () =>
    //         import('./provider-users/provider-users.module').then((m) => m.ProviderUsersModule),
    // },

    {
        path: 'manage-users',
        component: ProManageUsersComponent,
        loadChildren: () =>
            import('./pro-manage-users/pro-manage-users.module').then((m) => m.ProManageUsersModule),
    },

    {
        path: 'preferences',
        component: ProviderPreferencesComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Preferences', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'integrations',
        component: ProviderIntegrationComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Integration', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },


]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
    ],
    declarations: [

        ProviderPreferencesComponent,
        ProviderIntegrationComponent,
        ProManageUsersComponent
    ]
})
export class ProSetupModule { }