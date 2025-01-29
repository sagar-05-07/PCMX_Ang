import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-law-roles',
  templateUrl: './law-roles.component.html',
  styleUrls: ['./law-roles.component.scss']
})
export class LawRolesComponent {
  public currentPage = 0;
  public totalSize = 0;
  public filterToggle: boolean = false;

  filterForm: FormGroup;

  roleDetails: Array<any> = [
    { RoleName: "Admin", NoofUsers: "11", TotalUsers: "59", permissionCount: "59", totalPermissionCount: "59" },
    { RoleName: "Manager", NoofUsers: "12", TotalUsers: "59", permissionCount: "59", totalPermissionCount: "59" },
    { RoleName: "SalesHead", NoofUsers: "31", TotalUsers: "59", permissionCount: "59", totalPermissionCount: "59" },
  ];

  constructor(public dialog: MatDialog, private fb: FormBuilder, public router: Router) {
    this.filterForm = this.fb.group({
      Role: new FormControl(''),
      Keyword: new FormControl('')
    });
  }

  ngOnInit() { }

  openEditDialog() {
    // this.dialog.open(AddRoleComponent, {
    //   height: 'auto',
    //   width: '550px'
    // });
  }

  filter() {
    // Add filtering logic if necessary
  }

  clearFilter() {
    this.filterForm.reset();
  }

  onuserclick() {
    this.router.navigate(['rcm-login/setup/staff-users/users']);
  }

  onpermclick() {
    this.router.navigate(['law-firm-login/setup/manage-users/roles/permissions']);
  }

  handlePage(event: any) {
    // Handle pagination logic
  }

  deleteConfirmation() {
    // Add delete confirmation logic if necessary
  }
}
