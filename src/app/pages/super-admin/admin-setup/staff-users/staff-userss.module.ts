import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminUserssComponent } from './admin-userss/admin-userss.component';
import { AdminRolesComponent } from './admin-roles/admin-roles.component';
import { AdminAddUserComponent } from './admin-userss/admin-add-user/admin-add-user.component';
import { AdminAddRoleComponent } from './admin-roles/admin-add-role/admin-add-role.component';
import { AdminPermissionsComponent } from './admin-roles/admin-permissions/admin-permissions.component';
import { AdminSpecialPermissionsComponent } from './admin-roles/admin-special-permissions/admin-special-permissions.component';


const routes: Routes = [

    { path: '', redirectTo: 'users', pathMatch: 'full' },

    {
        path: 'users',
        component: AdminUserssComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Manage Users', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },

    {
        path: 'roles',
        component: AdminRolesComponent,
        pathMatch: 'full',
        data: { breadcrumb: 'Manage Roles', description: 'Statistics, Charts and Metrics of activity, trend and distribution.' }
    },

    {
        path: 'roles/admin-permissions',
        component: AdminPermissionsComponent,
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


        AdminUserssComponent,
        AdminRolesComponent,
        AdminAddUserComponent,
        AdminAddRoleComponent,
        AdminPermissionsComponent,
        AdminSpecialPermissionsComponent
    ]
})
export class StaffUserssModule { }