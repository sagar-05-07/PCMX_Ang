import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddRoleComponent } from './add-role/add-role.component';
import { SpecialPermissionComponent } from './special-permission/special-permission.component';
import { PerspectivesComponent } from 'src/app/shared/perspectives/perspectives.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {

  filterForm: FormGroup;
  filterToggle: boolean = false;
  currentPage: number = 0;
  totalSize: number = 0;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    public router: Router
  ) {
    this.filterForm = this.fb.group({
      Role: new FormControl(''),
      Keyword: new FormControl('')
    });
  }

  ngOnInit() { }

  roleDetails: Array<any> = [
    { RoleName: "Admin", NoofUsers: "11", TotalUsers: "59", permissionCount: "59", totalPermissionCount: "59" },
    { RoleName: "Manager", NoofUsers: "12", TotalUsers: "59", permissionCount: "59", totalPermissionCount: "59" },
    { RoleName: "SalesHead", NoofUsers: "31", TotalUsers: "59", permissionCount: "59", totalPermissionCount: "59" },
  ];

  openSpecialPermission() {
    this.dialog.open(SpecialPermissionComponent, {
      height: 'auto',
      width: '700px'
    });
  }

  perspectives() {
    this.dialog.open(PerspectivesComponent, {
      height: 'auto',
      width: '450px'
    });
  }

  openEditDialog() {
    const dialogRef = this.dialog.open(AddRoleComponent, {
      height: 'auto',
      width: '550px'
    });
    dialogRef.afterClosed().subscribe();
  }

  clearFilter() {
    this.filterForm.reset();
  }

  onUserClick() {
    this.router.navigate(['rcm-login/setup/staff-users/users']);
  }

  onPermClick() {
    this.router.navigate(['rcm-login/setup/staff-users/roles/permission']);
  }

  handlePage(event: any) {
    this.currentPage = event.pageIndex;
    this.totalSize = event.length;
    // Add pagination logic here
  }
}
