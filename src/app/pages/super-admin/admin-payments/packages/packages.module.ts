import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PackageProviderComponent } from './package-provider/package-provider.component';
import { PackageLawfirmComponent } from './package-lawfirm/package-lawfirm.component';
import { PackageNetworkComponent } from './package-network/package-network.component';
import { AddPackageComponent } from './package-network/add-package/add-package.component';

// import { ManageUsersComponent } from './manage-users.component';

const routes: Routes = [
  { path: '', redirectTo: 'package-network', pathMatch: 'full' },

  {
    path: 'package-network',
    component: PackageNetworkComponent,

    data: {
      breadcrumb: 'Payments',
      description: 'This page is used to manage User',
    },
  },
  {
    path: 'package-lawfirm',
    component: PackageLawfirmComponent,

    data: {
      breadcrumb: 'Payments',
      description: 'This page is used to manage User',
    },
  },

  {
    path: 'package-provider',
    component: PackageProviderComponent,
    pathMatch: 'full',
    data: {
      breadcrumb: 'Payments',
      description: 'This page is used to manage Roles',
    },
  },
];
@NgModule({
  declarations: [AddPackageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class PackagesComponent {}
