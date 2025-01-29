import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgxMatTimelineModule } from 'ngx-mat-timeline';
import { ClaimsOverviewComponent } from './claims-overview/claims-overview.component';
import { ReferralActivityComponent } from '../refferral-dashboard/referral-activity/referral-activity.component';
import { ReferralDocumentsComponent } from '../refferral-dashboard/referral-documents/referral-documents.component';
import { ReferralNotesComponent } from '../refferral-dashboard/referral-notes/referral-notes.component';

const routes: Routes = [

    { path: '', redirectTo: 'overview', pathMatch: 'full' },

    { path: 'overview', component: ClaimsOverviewComponent },
    // { path: 'cases', component: PatientCasesComponent },
    // { path: 'referrals', component: PatientReferralsComponent },
    // { path: 'providers', component: PatientProvidersComponent },
    // { path: 'law-firms', component: PatientLawFirmsComponent },
    // { path: 'locations', component: PatientLocationsComponent },
    // { path: 'visit', component: ReferralVisitsComponent },
    { path: 'notes', component: ReferralNotesComponent },
    { path: 'documents', component: ReferralDocumentsComponent },
    { path: 'activity', component: ReferralActivityComponent },

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

        ClaimsOverviewComponent
    ]
})
export class ClaimsDashboardModule { }