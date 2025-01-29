import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReferralRadarComponent } from './referral-radar/referral-radar.component';
import { ReferralVisitsComponent } from './referral-visits/referral-visits.component';
import { ReferralNotesComponent } from './referral-notes/referral-notes.component';
import { ReferralDocumentsComponent } from './referral-documents/referral-documents.component';
import { ReferralClaimsComponent } from './referral-claims/referral-claims.component';
import { ReferralActivityComponent } from './referral-activity/referral-activity.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AddReferralDocComponent } from './referral-documents/add-referral-doc/add-referral-doc.component';
import { NgxMatTimelineModule } from 'ngx-mat-timeline';

const routes: Routes = [

    { path: '', redirectTo: 'radar', pathMatch: 'full' },

    { path: 'radar', component: ReferralRadarComponent },
    { path: 'visit', component: ReferralVisitsComponent },
    { path: 'notes', component: ReferralNotesComponent },
    { path: 'documents', component: ReferralDocumentsComponent },
    { path: 'claims', component: ReferralClaimsComponent },
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
        NgCircleProgressModule.forRoot({
            // set defaults here
            radius: 100,
            outerStrokeWidth: 16,
            innerStrokeWidth: 8,
            outerStrokeColor: "#78C000",
            innerStrokeColor: "#C7E596",
            animationDuration: 300,

        })
    ],
    declarations: [
        ReferralRadarComponent,
        ReferralVisitsComponent,
        ReferralNotesComponent,
        ReferralDocumentsComponent,
        ReferralClaimsComponent,
        ReferralActivityComponent,
        AddReferralDocComponent
    ]
    // providers: [ChatService]
})
export class RefferralDashboardModule { }