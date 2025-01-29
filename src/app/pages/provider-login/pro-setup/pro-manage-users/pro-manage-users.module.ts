import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProUsersComponent } from './pro-users/pro-users.component';
import { ProRoleComponent } from './pro-role/pro-role.component';
import { ProPermissionComponent } from './pro-role/pro-permission/pro-permission.component';

const routes: Routes = [

    { path: '', redirectTo: 'users', pathMatch: 'full' },

    {
        path: 'users',
        component: ProUsersComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Users', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },

    {
        path: 'roles',
        component: ProRoleComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Roles', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'roles/permissions',
        component: ProPermissionComponent,
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
        ProUsersComponent,
        ProRoleComponent,
        ProPermissionComponent
    ]
})
export class ProManageUsersModule { }