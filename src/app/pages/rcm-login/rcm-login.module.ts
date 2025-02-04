import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RadarComponent } from './radar/radar.component';
import { PatientsComponent } from './patients/patients.component';
import { CasesComponent } from './cases/cases.component';
import { ReferralsComponent } from './referrals/referrals.component';
import { VisitsComponent } from './visits/visits.component';
import { ClaimsComponent } from './claims/claims.component';
import { SettlemetComponent } from './settlemet/settlemet.component';
import { ReportsComponent } from './reports/reports.component';
import { RcmSetupComponent } from './rcm-setup/rcm-setup.component';
import { RcmFundsComponent } from './rcm-funds/rcm-funds.component';
import { AddPatientsComponent } from './patients/add-patients/add-patients.component';
import { PatientGridColumnComponent } from './patients/patient-grid-column/patient-grid-column.component';
import { AddCasesComponent } from './cases/add-cases/add-cases.component';
import { AddReferralsComponent } from './referrals/add-referrals/add-referrals.component';
import { AddClaimsComponent } from './claims/add-claims/add-claims.component';
import { NotesComponent } from './claims/notes/notes.component';
import { RefferralDashboardComponent } from './refferral-dashboard/refferral-dashboard.component';
import { MergePopComponent } from './patients/merge-pop/merge-pop.component';
import { ClaimsMergeComponent } from './claims/claims-merge/claims-merge.component';
import { CasesMergeComponent } from './cases/cases-merge/cases-merge.component';
import { ReferralMergeComponent } from './referrals/referral-merge/referral-merge.component';
import { InnerCasesComponent } from './inner-cases/inner-cases.component';
import { InnerReferralsComponent } from './inner-referrals/inner-referrals.component';
import { InnerClaimsComponent } from './inner-claims/inner-claims.component';
import { InnerVisitsComponent } from './inner-visits/inner-visits.component';
import { InnerProvidersComponent } from './inner-providers/inner-providers.component';
import { InnerPatientsComponent } from './inner-patients/inner-patients.component';
import { VisitsDashboardComponent } from './visits-dashboard/visits-dashboard.component';
import { PatientPopComponent } from './patient-pop/patient-pop.component';
import { ClaimsPaymentsComponent } from './claims/claims-payments/claims-payments.component';
import { RcmPaymentsComponent } from './rcm-payments/rcm-payments.component';
import { PaymentDistributionComponent } from './rcm-payments/payment-distribution/payment-distribution.component';
import { InnerLocationsComponent } from './inner-locations/inner-locations.component';
import { AddPaymentsComponent } from './rcm-payments/add-payments/add-payments.component';
import { PaymentsPopComponent } from './claims/claims-payments/payments-pop/payments-pop.component';
import { QuillModule } from 'ngx-quill';
import { RcmDocumentComponent } from './rcm-document/rcm-document.component';
import { CaseDashboardComponent } from './case-dashboard/case-dashboard.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { ClaimsDashboardComponent } from './claims-dashboard/claims-dashboard.component';
import { ProvidersDashboardComponent } from './providers-dashboard/providers-dashboard.component';
import { LocationDashboardComponent } from './location-dashboard/location-dashboard.component';
import { LenderDashboardComponent } from './lender-dashboard/lender-dashboard.component';
import { LawFirmDashboardComponent } from './law-firm-dashboard/law-firm-dashboard.component';
import { CaseManagerDashboardComponent } from './case-manager-dashboard/case-manager-dashboard.component';
import { LiaisonDashboardComponent } from './liaison-dashboard/liaison-dashboard.component';
import { EntitiesComponent } from './entities/entities.component';
import { RcmCaseManagerComponent } from './rcm-case-manager/rcm-case-manager.component';
import { RcmLiaisonComponent } from './rcm-liaison/rcm-liaison.component';
import { PerspectiveFilterComponent } from './patients/perspective-filter/perspective-filter.component';
import { ClaimsPerspectivesComponent } from './claims/claims-perspectives/claims-perspectives.component';
import { CasesPerspectivesComponent } from './cases/cases-perspectives/cases-perspectives.component';
import { PaymentsPerspectivesComponent } from './rcm-payments/payments-perspectives/payments-perspectives.component';
import { ReferralvsvisitsComponent } from './patients/referralvsvisits/referralvsvisits.component';
import { VisitsvsclaimsComponent } from './patients/visitsvsclaims/visitsvsclaims.component';
import { ClaimsvspaidComponent } from './patients/claimsvspaid/claimsvspaid.component';
import { ReferralsfilterComponent } from './referrals/referralsfilter/referralsfilter.component';
import { LiaisionpopComponent } from './liaisionpop/liaisionpop.component';

const routes: Routes = [

    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

    {
        path: 'dashboard',
        component: RadarComponent,
        loadChildren: () =>
            import('./radar/radar.module').then((m) => m.RadarModule),
    },
    {
        path: 'patients',
        component: PatientsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Patients', description: 'This page is used to respareas' }
    },
    {
        path: 'patients-dashboard',
        component: PatientDashboardComponent,
        loadChildren: () =>
            import('./patient-dashboard/patient.module').then((m) => m.PatientDashboardModule),
    },

    {
        path: 'inner-cases',
        component: InnerCasesComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Cases', description: 'This page is used to respareas' }
    },

    {
        path: 'inner-referrals',
        component: InnerReferralsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Referrals', description: 'This page is used to respareas' }
    },
    {
        path: 'inner-providers',
        component: InnerProvidersComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Providers', description: 'This page is used to respareas' }
    },
    {
        path: 'inner-visits',
        component: InnerVisitsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Visits', description: 'This page is used to respareas' }
    },
    {
        path: 'inner-claims',
        component: InnerClaimsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Claims', description: 'This page is used to respareas' }
    },
    {
        path: 'inner-patients',
        component: InnerPatientsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Patients', description: 'This page is used to respareas' }
    },
    {
        path: 'inner-locations',
        component: InnerLocationsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Locations', description: 'This page is used to respareas' }
    },
    {
        path: 'cases',
        component: CasesComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Cases', description: 'This page is used to respareas' }
    },
    {
        path: 'cases-dashboard',
        component: CaseDashboardComponent,
        loadChildren: () =>
            import('./case-dashboard/case-dashboard.module').then((m) => m.CaseDashboardModule),
    },
    {
        path: 'referrals',
        component: ReferralsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Referrals', description: 'This page is used to respareas' }
    },

    {
        path: 'referrals-dashboard',
        component: RefferralDashboardComponent,
        loadChildren: () =>
            import('./refferral-dashboard/refferral-dashboard.module').then((m) => m.RefferralDashboardModule),
    },

    {
        path: 'visits',
        component: VisitsComponent,
        loadChildren: () =>
            import('./visits/visits.module').then((m) => m.VisitsModule),
    },
    {
        path: 'visits-dashboard',
        component: VisitsDashboardComponent,
        loadChildren: () =>
            import('./visits-dashboard/visits-dashboard.module').then((m) => m.VisitsDashboardModule),
    },
    {
        path: 'claims',
        component: ClaimsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Claims', description: 'This page is used to respareas' }
    },
    {
        path: 'claims-dashboard',
        component: ClaimsDashboardComponent,
        loadChildren: () =>
            import('./claims-dashboard/claims-dashboard.module').then((m) => m.ClaimsDashboardModule),
    },
    {
        path: 'claims-payments',
        component: ClaimsPaymentsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Claims Payment', description: 'This page is used to respareas' }
    },

    {
        path: 'payments',
        component: RcmPaymentsComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Payments', description: 'This page is used to respareas' }
    },
    {
        path: 'document',
        component: RcmDocumentComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Documents', description: 'This page is used to respareas' }
    },
    {
        path: 'settlement',
        component: SettlemetComponent,
        loadChildren: () =>
            import('./settlemet/settlement.module').then((m) => m.SettlementModule),
    },
    {
        path: 'funds',
        component: RcmFundsComponent,
        loadChildren: () =>
            import('./rcm-funds/rcm-funds.module').then((m) => m.RcmFundsModule),
    },
    {
        path: 'reports',
        component: ReportsComponent,
        // pathMatch: 'full',
        loadChildren: () =>
            import('./reports/reports.module').then((m) => m.ReportsModule),
    },

    {
        path: 'setup',
        component: RcmSetupComponent,
        loadChildren: () =>
            import('./rcm-setup/rcm-setup.module').then((m) => m.RcmSetupModule),
    },

    {
        path: 'rcm-case-manager',
        component: RcmCaseManagerComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Case Manager', description: 'This page is used to respareas' }
    },

    {
        path: 'liaison',
        component: RcmLiaisonComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Liaison', description: 'This page is used to respareas' }
    },

    {
        path: 'providers-dashboard',
        component: ProvidersDashboardComponent,
        loadChildren: () =>
            import('./providers-dashboard/providers-dashboard.module').then((m) => m.ProvidersDashboardModule),
    },

    {
        path: 'location-dashboard',
        component: LocationDashboardComponent,
        loadChildren: () =>
            import('./location-dashboard/location-dashboard.module').then((m) => m.LocationDashboardModule),
    },

    {
        path: 'lender-dashboard',
        component: LenderDashboardComponent,
        loadChildren: () =>
            import('./lender-dashboard/lender-dashboard.module').then((m) => m.LenderDashboardModule),
    },

    {
        path: 'law-firm-dashboard',
        component: LawFirmDashboardComponent,
        loadChildren: () =>
            import('./law-firm-dashboard/law-firm-dashboard.module').then((m) => m.LawFirmDashboardModule),
    },
    {
        path: 'law-firm-dashboard',
        component: LawFirmDashboardComponent,
        loadChildren: () =>
            import('./law-firm-dashboard/law-firm-dashboard.module').then((m) => m.LawFirmDashboardModule),
    },
    {
        path: 'case-manager-dashboard',
        component: CaseManagerDashboardComponent,
        loadChildren: () =>
            import('./case-manager-dashboard/case-manager-dashboard.module').then((m) => m.CaseManagerDashboardModule),
    },
    {
        path: 'liaison-dashboard',
        component: LiaisonDashboardComponent,
        loadChildren: () =>
            import('./liaison-dashboard/liaison-dashboard.module').then((m) => m.LiasonDashboardModule),
    },

    {
        path: 'entity',
        component: EntitiesComponent,
        loadChildren: () =>
            import('./entities/entities.module').then((m) => m.EntityModule),
    },

]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        QuillModule.forRoot()
    ],
    declarations: [
        RadarComponent,
        PatientsComponent,
        CasesComponent,
        ReferralsComponent,
        VisitsComponent,
        ClaimsComponent,
        SettlemetComponent,
        ReportsComponent,
        RcmSetupComponent,
        RcmFundsComponent,
        AddPatientsComponent,
        PatientGridColumnComponent,
        AddCasesComponent,
        AddReferralsComponent,
        AddClaimsComponent,
        NotesComponent,
        RefferralDashboardComponent,
        MergePopComponent,
        ClaimsMergeComponent,
        CasesMergeComponent,
        ReferralMergeComponent,
        InnerCasesComponent,
        InnerReferralsComponent,
        InnerClaimsComponent,
        InnerVisitsComponent,
        InnerProvidersComponent,
        InnerPatientsComponent,
        VisitsDashboardComponent,
        PatientPopComponent,
        ClaimsPaymentsComponent,
        RcmPaymentsComponent,
        PaymentDistributionComponent,
        InnerLocationsComponent,
        AddPaymentsComponent,
        PaymentsPopComponent,
        RcmDocumentComponent,
        CaseDashboardComponent,
        PatientDashboardComponent,
        ClaimsDashboardComponent,
        ProvidersDashboardComponent,
        LocationDashboardComponent,
        LenderDashboardComponent,
        LawFirmDashboardComponent,
        CaseManagerDashboardComponent,
        LiaisonDashboardComponent,
        EntitiesComponent,
        RcmLiaisonComponent,
        RcmCaseManagerComponent,
        PerspectiveFilterComponent,
        ClaimsPerspectivesComponent,
        CasesPerspectivesComponent,
        PaymentsPerspectivesComponent,
        ReferralvsvisitsComponent,
        VisitsvsclaimsComponent,
        ClaimsvspaidComponent,
        ReferralsfilterComponent,
        LiaisionpopComponent
    ]
})
export class RcmLogInModule { }