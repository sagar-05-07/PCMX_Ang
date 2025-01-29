import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgxMatTimelineModule } from 'ngx-mat-timeline';
import { PatientLawFirmsComponent } from '../patient-dashboard/patient-law-firms/patient-law-firms.component';
import { PatientLocationsComponent } from '../patient-dashboard/patient-locations/patient-locations.component';
import { PatientProvidersComponent } from '../patient-dashboard/patient-providers/patient-providers.component';
import { ReferralActivityComponent } from '../refferral-dashboard/referral-activity/referral-activity.component';
import { ReferralDocumentsComponent } from '../refferral-dashboard/referral-documents/referral-documents.component';
import { ReferralNotesComponent } from '../refferral-dashboard/referral-notes/referral-notes.component';
import { ReferralVisitsComponent } from '../refferral-dashboard/referral-visits/referral-visits.component';
import { LawDashboardComponent } from '../../law-firm-login/law-dashboard/law-dashboard.component';
import { InnerPatientsComponent } from '../inner-patients/inner-patients.component';
import { PatientCasesComponent } from '../patient-dashboard/patient-cases/patient-cases.component';
import { PatientReferralsComponent } from '../patient-dashboard/patient-referrals/patient-referrals.component';

const routes: Routes = [

    { path: '', redirectTo: 'analytics', pathMatch: 'full' },

    { path: 'analytics', component: LawDashboardComponent },
    // { path: 'overview', component: LawFirmOverviewComponent },
    { path: 'patients', component: InnerPatientsComponent },
    { path: 'cases', component: PatientCasesComponent },
    { path: 'referrals', component: PatientReferralsComponent },
    { path: 'visits', component: ReferralVisitsComponent },
    { path: 'notes', component: ReferralNotesComponent },
    { path: 'law-firms', component: PatientLawFirmsComponent },
    { path: 'locations', component: PatientLocationsComponent },
    { path: 'documents', component: ReferralDocumentsComponent },
    { path: 'activity', component: ReferralActivityComponent },
    { path: 'providers', component: PatientProvidersComponent },
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
    ]
})
export class CaseManagerDashboardModule { }