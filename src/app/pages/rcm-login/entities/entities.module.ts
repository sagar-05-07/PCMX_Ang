import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgxMatTimelineModule } from 'ngx-mat-timeline';
import { LocationComponent } from './location/location.component';
import { LawFirmComponent } from './law-firm/law-firm.component';
import { CaseManagerComponent } from './case-manager/case-manager.component';
import { LiaisonComponent } from './liaison/liaison.component';
import { ProviderComponent } from './provider/provider.component';
import { LenderComponent } from './lender/lender.component';
import { FundingPartnerComponent } from '../rcm-setup/funding-partner/funding-partner.component';
import { ProvidersComponent } from '../rcm-setup/providers/providers.component';
import { LocationsComponent } from '../rcm-setup/locations/locations.component';
import { RcmCaseManagerComponent } from '../rcm-case-manager/rcm-case-manager.component';
import { RcmLiaisonComponent } from '../rcm-liaison/rcm-liaison.component';
import { LawPerspcetivesComponent } from './law-perspcetives/law-perspcetives.component';
import { ProviderPerspectivesComponent } from './provider-perspectives/provider-perspectives.component';

const routes: Routes = [

    { path: '', redirectTo: 'rcm-case-manager', pathMatch: 'full' },

    {
        path: 'law-firm',
        component: LawFirmComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Law Firms', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'location',
        component: LocationsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Locations', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
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
        data: { breadcrumb: 'Funding Partners', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },

    {
        path: 'rcm-case-manager',
        component: RcmCaseManagerComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Case Managers', description: 'This page is used to respareas' }
    },

    {
        path: 'liaison',
        component: RcmLiaisonComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Liaisons', description: 'This page is used to respareas' }
    },

]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        NgScrollbarModule,
        NgxMatTimelineModule,
    ],
    declarations: [
        LocationComponent,
        LawFirmComponent,
        CaseManagerComponent,
        LiaisonComponent,
        ProviderComponent,
        LenderComponent,
        LawPerspcetivesComponent,
        ProviderPerspectivesComponent
    ]
})
export class EntityModule { }