import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgxMatTimelineModule } from 'ngx-mat-timeline';
import { PatientRadarComponent } from './patient-radar/patient-radar.component';
import { PatientCasesComponent } from './patient-cases/patient-cases.component';
import { PatientReferralsComponent } from './patient-referrals/patient-referrals.component';
import { PatientProvidersComponent } from './patient-providers/patient-providers.component';
import { PatientLawFirmsComponent } from './patient-law-firms/patient-law-firms.component';
import { PatientLocationsComponent } from './patient-locations/patient-locations.component';
import { ReferralActivityComponent } from '../refferral-dashboard/referral-activity/referral-activity.component';
import { ReferralDocumentsComponent } from '../refferral-dashboard/referral-documents/referral-documents.component';
import { ReferralNotesComponent } from '../refferral-dashboard/referral-notes/referral-notes.component';
import { ReferralVisitsComponent } from '../refferral-dashboard/referral-visits/referral-visits.component';

const routes: Routes = [

    { path: '', redirectTo: 'radar', pathMatch: 'full' },

    { path: 'radar', component: PatientRadarComponent },
    { path: 'cases', component: PatientCasesComponent },
    { path: 'referrals', component: PatientReferralsComponent },
    { path: 'providers', component: PatientProvidersComponent },
    { path: 'law-firms', component: PatientLawFirmsComponent },
    { path: 'locations', component: PatientLocationsComponent },
    { path: 'visit', component: ReferralVisitsComponent },
    { path: 'notes', component: ReferralNotesComponent },
    { path: 'documents', component: ReferralDocumentsComponent },
    { path: 'activity', component: ReferralActivityComponent },
    // { path: 'claims', component: ReferralClaimsComponent },
    // { path: 'payments', component: CasePaymentsComponent },
    // { path: 'funds', component: CaseFundsComponent },

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
        PatientRadarComponent,
        PatientCasesComponent,
        PatientReferralsComponent,
        PatientProvidersComponent,
        PatientLawFirmsComponent,
        PatientLocationsComponent
    ]
})
export class PatientDashboardModule { }