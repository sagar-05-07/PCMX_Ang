import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SettingsComponent } from './settings/settings.component';
import { LookupOptionsComponent } from './lookup-options/lookup-options.component';
import { EventMasterComponent } from './event-master/event-master.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { ErrorLogComponent } from './error-log/error-log.component';
import { ServiceLevelsComponent } from './service-levels/service-levels.component';
import { EscalationMatrixComponent } from './escalation-matrix/escalation-matrix.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddSettingsComponent } from './settings/add-settings/add-settings.component';
import { AuditTrailComponent } from './audit-trail/audit-trail.component';
import { LookupDialogComponent } from './lookup-options/lookup-dialog/lookup-dialog.component';
import { InsuranceGroupsComponent } from './insurance-groups/insurance-groups.component';
import { AddInsuranceComponent } from './insurance-groups/add-insurance/add-insurance.component';
import { StaffUsersComponent } from './staff-users/staff-users.component';
import { StatesComponent } from './states/states.component';
import { AddStatesComponent } from './states/add-states/add-states.component';
import { CitiesComponent } from './cities/cities.component';
import { AddCitiesComponent } from './cities/add-cities/add-cities.component';

// import { ManageUsersComponent } from './manage-users.component';

const routes: Routes = [
  { path: '', redirectTo: 'staff-users', pathMatch: 'full' },


  {
    path: 'staff-users',
    component: StaffUsersComponent,
    loadChildren: () =>
      import('./staff-users/staff-userss.module').then((m) => m.StaffUserssModule),
  },
  {
    path: 'settings',
    component: SettingsComponent,
    // pathMatch: 'full',
    data: {
      breadcrumb: 'Settings',
      description: 'This page is used to manage User',
    },
  },

  {
    path: 'lookup-options',
    component: LookupOptionsComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Lookup Options',
      description: 'This page is used to manage Roles',
    },
  },
  {
    path: 'event-master',
    component: EventMasterComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Event Master',
      description: 'This page is used to manage Roles',
    },
  },
  {
    path: 'activity-log',
    component: ActivityLogComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Activity Log',
      description: 'This page is used to manage Roles',
    },
  },
  {
    path: 'audit-trail',
    component: AuditTrailComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Audit Trail',
      description: 'This page is used to manage Roles',
    },
  },
  {
    path: 'error-log',
    component: ErrorLogComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Error Log',
      description: 'This page is used to manage Roles',
    },
  },
  {
    path: 'service-levels',
    component: ServiceLevelsComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Service Levels',
      description: 'This page is used to manage Roles',
    },
  },
  {
    path: 'escalation-matrix',
    component: EscalationMatrixComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Escalation Matrix',
      description: 'This page is used to manage Roles',
    },
  },
  {
    path: 'insurance-groups',
    component: InsuranceGroupsComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Insurance Groups',
      description: 'This page is used to manage Roles',
    },
  },
  {
    path: 'State',
    component: StatesComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'States',
      description: 'This page is used to manage Roles',
    },
  },

  {
    path: 'Cities',
    component: CitiesComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Cities',
      description: 'This page is used to manage Roles',
    },
  },

];
@NgModule({
  declarations: [
    SettingsComponent,
    LookupOptionsComponent,
    EventMasterComponent,
    ActivityLogComponent,
    ErrorLogComponent,
    ServiceLevelsComponent,
    EscalationMatrixComponent,
    AddSettingsComponent,
    AuditTrailComponent,
    LookupDialogComponent,
    InsuranceGroupsComponent,
    AddInsuranceComponent,
    StaffUsersComponent,
    StatesComponent,
    AddStatesComponent,
    CitiesComponent,
    AddCitiesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AdminSetupComponent { }
