import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { LawUsersComponent } from './law-users/law-users.component';
import { LawRolesComponent } from './law-roles/law-roles.component';
import { LawPermissionComponent } from './law-roles/law-permission/law-permission.component';

const routes: Routes = [

    { path: '', redirectTo: 'users', pathMatch: 'full' },

    {
        path: 'users',
        component: LawUsersComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Users', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },

    {
        path: 'roles',
        component: LawRolesComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Roles', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },
    {
        path: 'roles/permissions',
        component: LawPermissionComponent,
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

        LawUsersComponent,
        LawRolesComponent,
        LawPermissionComponent
    ]
})
export class LawManageUsersModule { }