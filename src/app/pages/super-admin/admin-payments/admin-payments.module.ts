import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranscationsComponent } from './transcations/transcations.component';
import { PackagesComponent } from './packages/packages.component';
import { PackageNetworkComponent } from './packages/package-network/package-network.component';
import { PackageLawfirmComponent } from './packages/package-lawfirm/package-lawfirm.component';
import { PackageProviderComponent } from './packages/package-provider/package-provider.component';

// import { ManageUsersComponent } from './manage-users.component';

const routes: Routes = [
  { path: '', redirectTo: 'packages', pathMatch: 'full' },

  {
    path: 'packages',
    component: PackagesComponent,
    
    loadChildren: () =>
        import('./packages/packages.module').then(
          (m) => m.PackagesComponent
        ),
  },

  {
    path: 'transcations',
    component: TranscationsComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Transcations',
      description: 'This page is used to manage Roles',
    },
  },
];
@NgModule({
  declarations: [
    PackageNetworkComponent,
    PackageLawfirmComponent,
    PackageProviderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AdminPaymentsComponent {}
