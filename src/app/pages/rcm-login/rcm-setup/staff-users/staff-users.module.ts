import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
// import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { RcmUsersComponent } from './rcm-users/rcm-users.component';
import { AddRoleComponent } from './roles/add-role/add-role.component';
import { AddUsersComponent } from './rcm-users/add-users/add-users.component';
import { PermissionComponent } from './roles/permission/permission.component';
import { SpecialPermissionComponent } from './roles/special-permission/special-permission.component';

const routes: Routes = [

    { path: '', redirectTo: 'users', pathMatch: 'full' },

    {
        path: 'users',
        component: RcmUsersComponent,
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
        path: 'roles/permission',
        component: PermissionComponent,
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


        // UsersComponent,
        RolesComponent,
        RcmUsersComponent,
        AddRoleComponent,
        AddUsersComponent,
        PermissionComponent,
        SpecialPermissionComponent
    ]
})
export class StaffUsersModule { }