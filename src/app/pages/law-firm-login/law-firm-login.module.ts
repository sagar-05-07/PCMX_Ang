import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { LawDashboardComponent } from './law-dashboard/law-dashboard.component';
import { LawPatientsComponent } from './law-patients/law-patients.component';
import { LawCasesComponent } from './law-cases/law-cases.component';
import { LawRequestsComponent } from './law-requests/law-requests.component';
import { LawReferralComponent } from './law-referral/law-referral.component';
import { LawDocumentsComponent } from './law-documents/law-documents.component';
import { LawClaimsComponent } from './law-claims/law-claims.component';
import { LawSettlementsComponent } from './law-settlements/law-settlements.component';
import { LawSetupComponent } from './law-setup/law-setup.component';
import { LawAddPatientComponent } from './law-patients/law-add-patient/law-add-patient.component';
import { AddLawCaseComponent } from './law-cases/add-law-case/add-law-case.component';
import { LawAddReferralComponent } from './law-referral/law-add-referral/law-add-referral.component';
import { LawAddClaimComponent } from './law-claims/law-add-claim/law-add-claim.component';
import { LawReportsComponent } from './law-reports/law-reports.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
    path: 'dashboard',
    component: LawDashboardComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Dashboard',
      description:
        'Statistics, Charts and Metrics of activity, trend and distribution.',
    },
  },

  {
    path: 'patients',
    component: LawPatientsComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Patients',
      description:
        'The list of patients can be managed here. Law form will often cases to these patients.',
    },
  },
  {
    path: 'cases',
    component: LawCasesComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Cases',
      description: 'The patient specific cases can be logged here.',
    },
  },
  {
    path: 'requests',
    component: LawRequestsComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Requests ',
      description:
        'The law firm can request for patient records for specific cases from providers in the RCM Group.',
    },
  },
  {
    path: 'referrals',
    component: LawReferralComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Referrals',
      description:
        'The referrals specific to the law firm cases will appear here.  Each referral has a dashboard with restricted update privileges.',
    },
  },

  {
    path: 'documents',
    component: LawDocumentsComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Documents ',
      description:
        ' The law firm can see the documents related to their cases and referrals.  Requests will be linked to documents.',
    },
  },
  {
    path: 'claims',
    component: LawClaimsComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Claims ',
      description:
        ' The claims related to the cases logged by the law form can be monitored here',
    },
  },
  {
    path: 'settlments',
    component: LawSettlementsComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Payments',
      description:
        'The settlements paid for the cases are logged here.  This will include gross settlement, legal fees and net settlement.',
    },
  },

  {
    path: 'setup',
    component: LawSetupComponent,
    loadChildren: () => import('./law-setup/law-setup.module').then((m) => m.LawSetupModule),
  },

  {
    path: 'reports',
    component: LawReportsComponent,
    loadChildren: () => import('./law-reports/law-reports.module').then((m) => m.LawReportsModule),
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
  declarations: [
    LawDashboardComponent,
    LawPatientsComponent,
    LawCasesComponent,
    LawRequestsComponent,
    LawReferralComponent,
    LawDocumentsComponent,
    LawClaimsComponent,
    LawSettlementsComponent,
    LawSetupComponent,
    LawAddPatientComponent,
    AddLawCaseComponent,
    LawAddReferralComponent,
    LawAddClaimComponent,
    LawReportsComponent,
  ],
})
export class LawFirmLoginModule { }
