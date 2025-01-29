import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddUsersComponent } from 'src/app/pages/rcm-login/rcm-setup/staff-users/rcm-users/add-users/add-users.component';
import { DialogComponent } from 'src/app/pages/ui/dialog/dialog.component';

@Component({
  selector: 'app-pro-users',
  templateUrl: './pro-users.component.html',
  styleUrl: './pro-users.component.scss'
})
export class ProUsersComponent {


  access = {
    btCreate: false,
    btRead: false,
    btUpdate: false,
    btDelete: false
  };
  tableList: Object[] = [];
  alltableListLookup: any;

  public currentPage = 0;
  public totalSize = 0;
  tableListLookup = [];
  public allReports: Array<any> = [];
  sortedData = [];
  filteredAlerts = [];
  status = [{ id: 1, value: "Active" }, { id: 2, value: "Inactive" }];
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];
  filterForm: FormGroup;
  filteredUsers = [];

  allRoles: any;
  filterToggle: boolean;
  public searchText: string;
  public page: any;
  allUsers: any = [];
  userData: any = [];
  roleId: any;
  private _activeRoute: any;
  service: any;
  alertService: any;
  constructor(private router: Router, public dialog: MatDialog, private fb: FormBuilder,
  ) {

    this.filterForm = this.fb.group({
      Status: new FormControl(null),
      Keyword: new FormControl('',)
    });
  }
  public setTitle(newTitle: string) {
    // this.titleService.setTitle(newTitle);
  }

  users: Array<any> = [
    { Department: "Design", UserName: "Admin", UserEmail: "Admin@optionmatrix.com", UserPhone: "9834578945", RoleName: "	Admin", rolescreens: "10", totalscreens: "56", splperm: "5", totalspl: "16", IsActive: 'true', vedor: 'true', vedor11: 'true', vedor12: 'true', vedor13: 'true' },
    { Department: "Testing", UserName: "Test Pavan", UserEmail: "Pavan@optionmatrix.com", UserPhone: "9584672150", RoleName: "	Tester", rolescreens: "21", totalscreens: "56", splperm: "8", totalspl: "16", vedor1: 'true' },
    { Department: "Protoshop	", UserName: "Satya", UserEmail: "Satya@optionmatrix.com", UserPhone: "7070938861", RoleName: "Developer", rolescreens: "43", totalscreens: "56", splperm: "6", totalspl: "16", IsActive: 'true', vedor2: 'true', vedor11: 'true' },
    { Department: "Quality", UserName: "Surya", UserEmail: "Surya@optionmatrix.com", UserPhone: "9365874152", RoleName: "Developer", rolescreens: "53", totalscreens: "56", splperm: "11", totalspl: "16", vedor1: 'true', vedor12: 'true' },
    { Department: "Testing", UserName: "Test Pavan", UserEmail: "Pavan@optionmatrix.com", UserPhone: "9584672150", RoleName: "	Tester", rolescreens: "21", totalscreens: "56", splperm: "8", totalspl: "16", vedor3: 'true' },
  ];

  ngOnInit() {
    // this.getallusers();
    this.setTitle("OSIPL | Admin | Manage User | User");


  }

  getallusers() {

  }

  deleteUser() {


  }

  changestatus(data: any) {


  }

  openEditDialog() {
    let dialogRef = this.dialog.open(AddUsersComponent, {

      height: 'auto',
      width: '550px'
    });

  }

  projectPop() {
    // let dialogRef = this.dialog.open(ProjectPopComponent, {
    //   height: 'auto',
    //   width: '450px'
    // });
  }


  openPermissionsDialog() {
    // let dialogRef = this.dialog.open(AddSpecialpermissionsComponent, {

    //   height: 'auto',
    //   width: '550px'
    // });

  }
  onpermclick() {
    this.router.navigate(['admin/manage-users/permission/']);
  }
  openResetPassword() {
    // let dialogRef = this.dialog.open(ResetpasswordComponent, {

    //   height: 'auto',
    //   width: '550px'
    // });

  }

  openProjectPermissions() {
    // let dialogRef = this.dialog.open(ProjectpermComponent, {
    //   data: null,
    //   height: 'auto',
    //   width: '600px'
    // });
  }

  filter() {


  }

  scrollGrid(side: 'left' | 'right') {
    const ele = document.getElementById('grid-table-container');
    const scrollAmount = 210; // Adjust this value as needed

    if (ele) {
      // Check if ele is not null
      if (side === 'right') {
        ele.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      } else {
        ele.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    }
  }

  clearFilter() {
    this.filterForm.reset();
    this.getallusers();
  }

  public handlePage(e: any) {

  }

  // delete pop-up
  deleteConfirmation() {

  }

  // Active/InActive pop-up
  Confirmation() {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: 'auto',
      data: { component: null, title: 'Change Status', content: 'Are you sure you want to Change the Status ?', isConfirmation: true }
    });
    dialogRef.afterClosed().subscribe(
      (data: any) => {
        if (data) {
        }
      }
    );
  }

}
