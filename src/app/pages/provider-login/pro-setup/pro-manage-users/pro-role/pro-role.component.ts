import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminAddRoleComponent } from 'src/app/pages/super-admin/admin-setup/staff-users/admin-roles/admin-add-role/admin-add-role.component';

@Component({
  selector: 'app-pro-role',
  templateUrl: './pro-role.component.html',
  styleUrl: './pro-role.component.scss'
})
export class ProRoleComponent {

  tableList: Object[] = [];
  alltableListLookup: any;

  public currentPage = 0;
  public totalSize = 0;
  tableListLookup = [];
  public allReports: Array<any> = [];
  sortedData = [];
  filteredAlerts = [];
  filterForm: FormGroup;
  filterToggle: boolean;
  public searchText: string;
  public page: any;
  allRoles: any;
  filteredUsers: any;
  alertService: any;
  service: any;

  constructor(public dialog: MatDialog, private fb: FormBuilder,
    public router: Router,) {
    this.filterForm = this.fb.group({
      Role: new FormControl('',),
      Keyword: new FormControl('',)
    });

  }

  type: any;
  navParameter: any;

  roleDetails: Array<any> = [
    { RoleName: "Admin", NoofUsers: "11", TotalUsers: "59", permissionCount: "59", totalPermissionCount: "59" },
    { RoleName: "Manager", NoofUsers: "12", TotalUsers: "59", permissionCount: "59", totalPermissionCount: "59" },
    { RoleName: "SalesHead", NoofUsers: "31", TotalUsers: "59", permissionCount: "59", totalPermissionCount: "59" },
  ];
  options = [];

  access = {
    btCreate: false,
    btRead: false,
    btUpdate: false,
    btDelete: false
  };
  ngOnInit() {
  }

  getAllRoles() {
    // this.service.GetAllRoles().subscribe(res => {
    //   if (res['Success'] == true) {
    //     console.log(res);
    //     this.roleDetails = res['Data'];
    //     this.options = this.roleDetails;
    //     this.sortedData = this.roleDetails.slice();
    //     this.bindData(res['Data']);

    //     //this.getallusers();
    //   }
    //   else {
    //     this.alertService.createAlert(res['Message'], 0);
    //   }
    // });
  }

  userslist: any = [];
  NoofUsers() {

  }
  users: any;




  deleteRole() {


  }

  openEditDialog() {
    let dialogRef = this.dialog.open(AdminAddRoleComponent, {
      height: 'auto',
      width: '550px'
    });
    // dialogRef.afterClosed().subscribe( => {
    // });
  }

  public bindData() {
    //this.allRoles = data['RolesList'];

  }

  filter() {


  }

  clearFilter() {

  }
  onuserclick() {
    this.router.navigate(['rcm-login/setup/staff-users/users']);
  }
  onpermclick() {
    this.router.navigate(['provider-login/setup/manage-users/roles/permissions']);
  }
  public handlePage(e: any) {

  }

  // delete pop-up
  deleteConfirmation() {

  }

}
