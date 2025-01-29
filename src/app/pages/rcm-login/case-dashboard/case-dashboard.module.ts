import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgxMatTimelineModule } from 'ngx-mat-timeline';
import { CaseRadarComponent } from './case-radar/case-radar.component';
import { CaseVisitsComponent } from './case-visits/case-visits.component';
import { CaseNotesComponent } from './case-notes/case-notes.component';
import { CaseDocumentsComponent } from './case-documents/case-documents.component';
import { CaseClaimsComponent } from './case-claims/case-claims.component';
import { CaseActivityComponent } from './case-activity/case-activity.component';
import { ReferralActivityComponent } from '../refferral-dashboard/referral-activity/referral-activity.component';
import { ReferralClaimsComponent } from '../refferral-dashboard/referral-claims/referral-claims.component';
import { ReferralDocumentsComponent } from '../refferral-dashboard/referral-documents/referral-documents.component';
import { ReferralNotesComponent } from '../refferral-dashboard/referral-notes/referral-notes.component';
import { ReferralVisitsComponent } from '../refferral-dashboard/referral-visits/referral-visits.component';
import { CasePaymentsComponent } from './case-payments/case-payments.component';
import { CaseFundsComponent } from './case-funds/case-funds.component';

const routes: Routes = [

    { path: '', redirectTo: 'radar', pathMatch: 'full' },

    { path: 'radar', component: CaseRadarComponent },
    { path: 'visit', component: ReferralVisitsComponent },
    { path: 'notes', component: ReferralNotesComponent },
    { path: 'documents', component: ReferralDocumentsComponent },
    { path: 'claims', component: ReferralClaimsComponent },
    { path: 'activity', component: ReferralActivityComponent },
    { path: 'payments', component: CasePaymentsComponent },
    { path: 'funds', component: CaseFundsComponent },

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

        CaseRadarComponent,
        CaseVisitsComponent,
        CaseNotesComponent,
        CaseDocumentsComponent,
        CaseClaimsComponent,
        CaseActivityComponent,
        CasePaymentsComponent,
        CaseFundsComponent
    ]
})
export class CaseDashboardModule { }