import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { LawManageUsersComponent } from './law-manage-users/law-manage-users.component';
import { LawProvidersComponent } from './law-providers/law-providers.component';
import { LawPreferencesComponent } from './law-preferences/law-preferences.component';
import { LawIntergrationComponent } from './law-intergration/law-intergration.component';

const routes: Routes = [

  { path: '', redirectTo: 'manage-users', pathMatch: 'full' },

  {
    path: 'manage-users',
    component: LawManageUsersComponent,
    loadChildren: () =>
      import('./law-manage-users/law-manager-users.module').then((m) => m.LawManageUsersModule),
  },
  {
    path: 'preferences',
    component: LawPreferencesComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Preferences', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
  },
  {
    path: 'integrations',
    component: LawIntergrationComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Integration', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
  },
  {
    path: 'providers',
    component: LawProvidersComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Providers', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
  },



]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [

    LawManageUsersComponent,
    LawProvidersComponent,
    LawPreferencesComponent,
    LawIntergrationComponent
  ]
})
export class LawSetupModule { }