import { ReferralsComponent } from './../rcm-login/referrals/referrals.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RcmAccountsComponent } from './rcm-accounts/rcm-accounts.component';
import { AdminAnalyticsComponent } from './admin-analytics/admin-analytics.component';
import { AdminLawFirmComponent } from './admin-law-firm/admin-law-firm.component';
import { AdminProviderComponent } from './admin-provider/admin-provider.component';
import { AdminPaymentsComponent } from './admin-payments/admin-payments.component';
import { AdminAlertsComponent } from './admin-alerts/admin-alerts.component';
import { AdminSetupComponent } from './admin-setup/admin-setup.component';
import { ProviderdialogComponent } from './admin-provider/providerdialog/providerdialog.component';
import { NetworkdialogComponent } from './rcm-accounts/networkdialog/networkdialog.component';
import { AddLawfirmComponent } from './admin-law-firm/add-lawfirm/add-lawfirm.component';
import { PackagesComponent } from './admin-payments/packages/packages.component';
import { TranscationsComponent } from './admin-payments/transcations/transcations.component';
import { GridNetworkComponent } from './rcm-accounts/grid-network/grid-network.component';
import { GridLawfirmComponent } from './admin-law-firm/grid-lawfirm/grid-lawfirm.component';
import { GridProviderComponent } from './admin-provider/grid-provider/grid-provider.component';
import { InsuranceDialogComponent } from './rcm-accounts/insurance-dialog/insurance-dialog.component';
import { LocationsComponent } from './rcm-accounts/locations/locations.component';
import { PatientsComponent } from './rcm-accounts/patients/patients.component';
import { ReferralssComponent } from './rcm-accounts/referralss/referralss.component';
import { CasesComponent } from './rcm-accounts/cases/cases.component';
import { VisitsComponent } from './rcm-accounts/visits/visits.component';
import { ActionDialogComponent } from './rcm-accounts/visits/action-dialog/action-dialog.component';
import { ScheduleActionDialogComponent } from './rcm-accounts/visits/schedule-action-dialog/schedule-action-dialog.component';
import { AdminLawfirmDialogComponent } from './rcm-accounts/admin-lawfirm-dialog/admin-lawfirm-dialog.component';
import { AdminProviderDialogComponent } from './rcm-accounts/admin-provider-dialog/admin-provider-dialog.component';
import { LawfirmAttysComponent } from './admin-law-firm/lawfirm-attys/lawfirm-attys.component';
import { NetworkDialogComponent } from './admin-provider/network-dialog/network-dialog.component';
import { ProviderDialogeboxComponent } from './rcm-accounts/provider-dialogebox/provider-dialogebox.component';
import { AdmnProviderSpecialtyComponent } from './admin-provider/admn-provider-specialty/admn-provider-specialty.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: 'analytics', pathMatch: 'full' },

  {
    path: 'analytics',
    component: AdminAnalyticsComponent,
    loadChildren: () =>
      import('./admin-analytics/admin-analytics.module').then(
        (m) => m.AdminAnalyticsComponent
      ),
  },

  {
    path: 'rcm-accounts',
    component: RcmAccountsComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Network Accounts',
      description: ' Manage RCM Accounts here.',
    },
  },
  {
    path: 'rcm-accounts/locations',
    component: LocationsComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Locations',
      description: ' Manage RCM Accounts here.',
    },
  },
  {
    path: 'rcm-accounts/referrals',
    component: ReferralssComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Referrals ',
      description: ' Manage RCM Accounts here.',
    },
  },

  {
    path: 'rcm-accounts/patients',
    component: PatientsComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Patients',
      description: ' Manage RCM Accounts here.',
    },
  },
  {
    path: 'rcm-accounts/cases',
    component: CasesComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Cases',
      description: ' Manage RCM Accounts here.',
    },
  },

  {
    path: 'rcm-accounts/visits',
    component: VisitsComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Visits',
      description: ' Manage RCM Accounts here.',
    },
  },

  {
    path: 'law-firm',
    component: AdminLawFirmComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Law Firm Accounts',
      description:
        'Manage Law Firm Accounts here. The independent law firms belong to the Default RCM Account.',
    },
  },
  {
    path: 'provider',
    component: AdminProviderComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Provider Accounts',
      description:
        'Manage Provider Accounts here.  The independent providers belong to the Default RCM Account.',
    },
  },
  {
    path: 'payments',
    component: AdminPaymentsComponent,
    loadChildren: () =>
      import('./admin-payments/admin-payments.module').then(
        (m) => m.AdminPaymentsComponent
      ),
  },

  {
    path: 'alerts',
    component: AdminAlertsComponent,
    loadChildren: () =>
      import('./admin-alerts/admin-alerts.module').then(
        (m) => m.AdminAlertsComponent
      ),
  },
  {
    path: 'setup',
    component: AdminSetupComponent,
    loadChildren: () =>
      import('./admin-setup/admin-setup.module').then(
        (m) => m.AdminSetupComponent
      ),
  },

  // {
  //   path: 'provider-login',
  //   loadChildren: () =>
  //     import('./pages/provider-login/provider-login.module').then(
  //       (m) => m.ProviderLoginModule
  //     ),
  // },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [
    RcmAccountsComponent,
    AdminAnalyticsComponent,
    AdminLawFirmComponent,
    AdminProviderComponent,
    AdminPaymentsComponent,
    AdminAlertsComponent,
    AdminSetupComponent,
    ProviderdialogComponent,
    NetworkdialogComponent,
    AddLawfirmComponent,
    PackagesComponent,
    TranscationsComponent,
    GridNetworkComponent,
    GridLawfirmComponent,
    GridProviderComponent,
    InsuranceDialogComponent,
    LocationsComponent,
    PatientsComponent,
    ReferralssComponent,
    CasesComponent,
    VisitsComponent,
    ActionDialogComponent,
    ScheduleActionDialogComponent,
    AdminLawfirmDialogComponent,
    AdminProviderDialogComponent,
    LawfirmAttysComponent,
    NetworkDialogComponent,
    ProviderDialogeboxComponent,
    AdmnProviderSpecialtyComponent
  ],
})
export class SuperAdminModule { }
