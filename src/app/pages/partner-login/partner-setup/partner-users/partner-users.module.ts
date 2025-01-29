import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { FundPermissionComponent } from './roles/fund-permission/fund-permission.component';


const routes: Routes = [

    { path: '', redirectTo: 'users', pathMatch: 'full' },

    {
        path: 'users',
        component: UsersComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Manage Users', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },

    {
        path: 'roles',
        component: RolesComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Manage Roles', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },

    {
        path: 'roles/permissions',
        component: FundPermissionComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Permission', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
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



        UsersComponent,
        RolesComponent,
        FundPermissionComponent
    ]
})
export class PartnerUsersModule { }