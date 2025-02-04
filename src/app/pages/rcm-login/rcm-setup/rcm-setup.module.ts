import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffUsersComponent } from './staff-users/staff-users.component';
import { CaseManagersComponent } from './case-managers/case-managers.component';
import { LawFirmComponent } from './law-firm/law-firm.component';
import { LocationsComponent } from './locations/locations.component';
import { ProvidersComponent } from './providers/providers.component';
import { FundingPartnerComponent } from './funding-partner/funding-partner.component';
import { FundingContractComponent } from './funding-contract/funding-contract.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { IntegrationComponent } from './integration/integration.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddFundingPartnerComponent } from './funding-partner/add-funding-partner/add-funding-partner.component';
import { AddFundingContractComponent } from './funding-contract/add-funding-contract/add-funding-contract.component';
import { LiaisonsPopComponent } from './case-managers/liaisons-pop/liaisons-pop.component';
import { AddLocationComponent } from './locations/add-location/add-location.component';
import { DocTypeComponent } from './doc-type/doc-type.component';
import { AddDocTypeComponent } from './doc-type/add-doc-type/add-doc-type.component';
import { TagMasterComponent } from './tag-master/tag-master.component';

const routes: Routes = [

    { path: '', redirectTo: 'staff-users', pathMatch: 'full' },

    {
        path: 'staff-users',
        component: StaffUsersComponent,
        loadChildren: () =>
            import('./staff-users/staff-users.module').then((m) => m.StaffUsersModule),
    },
    {
        path: 'case-mangers',
        component: CaseManagersComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Case Manager', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'law-firm',
        component: LawFirmComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Law Firm', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'location',
        component: LocationsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Location', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'providers',
        component: ProvidersComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Providers', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'funding-partner',
        component: FundingPartnerComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Funding Partner', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'funding-contract',
        component: FundingContractComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Funding Contract', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
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
    {
        path: 'doc-types',
        component: DocTypeComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Doc Type', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'tagmaster',
        component: TagMasterComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Tag Master', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
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
        StaffUsersComponent,
        CaseManagersComponent,
        LawFirmComponent,
        LocationsComponent,
        ProvidersComponent,
        FundingPartnerComponent,
        FundingContractComponent,
        PreferencesComponent,
        IntegrationComponent,
        AddFundingPartnerComponent,
        AddFundingContractComponent,
        LiaisonsPopComponent,
        AddLocationComponent,
        DocTypeComponent,
        AddDocTypeComponent,
        TagMasterComponent,
    ]
})
export class RcmSetupModule { }