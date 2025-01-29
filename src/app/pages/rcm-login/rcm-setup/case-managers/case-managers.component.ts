import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LiaisonsPopComponent } from './liaisons-pop/liaisons-pop.component';

@Component({
  selector: 'app-case-managers',
  templateUrl: './case-managers.component.html',
  styleUrl: './case-managers.component.scss'
})
export class CaseManagersComponent {

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



  locationPop(item: any) {
    this.dialog.open(LiaisonsPopComponent, {
      data: item,
      width: "800px",
      height: "auto"
    })
  }

  deleteRole() {


  }

  openEditDialog() {
    // let dialogRef = this.dialog.open(AddRoleComponent, {
    //   height: 'auto',
    //   width: '550px'
    // });
    // dialogRef.afterClosed().subscribe(data => {
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
    this.router.navigate(['rcm-login/setup/staff-users/roles/permission']);
  }
  public handlePage(e: any) {

  }

  // delete pop-up
  deleteConfirmation() {

  }

}
