import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddFundingContractComponent } from 'src/app/pages/rcm-login/rcm-setup/funding-contract/add-funding-contract/add-funding-contract.component';
import { DialogComponent } from 'src/app/pages/ui/dialog/dialog.component';
import { SingleFileUploadComponent } from 'src/app/shared/single-file-upload/single-file-upload.component';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrl: './contracts.component.scss'
})
export class ContractsComponent {


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
  today: Date = new Date();

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

  isDateInFuture(expiryDate: string): boolean {
    const expiry = new Date(expiryDate); // Convert the string to a Date object
    return expiry < this.today;         // Compare with today's date
  }

  openfileupload(id: any) {
    let dialogRef = this.dialog.open(SingleFileUploadComponent, {
      data: id,
      height: 'auto',
      width: '600px'
    });
  }

  users = [
    {
      fundingPartner: 'ABC Corp',
      contactRef: 'John Doe',
      contractDate: '2024-01-15',
      terms: 'Net 30',
      expiryDate: '2024-12-31',
      status: 'Active'
    },
    {
      fundingPartner: 'XYZ Ltd',
      contactRef: 'Jane Smith',
      contractDate: '2023-05-01',
      terms: 'Net 60',
      expiryDate: '2025-05-01',
      status: 'Inactive'
    },
    {
      fundingPartner: 'ABC Corp',
      contactRef: 'John Doe',
      contractDate: '2024-01-15',
      terms: 'Net 30',
      expiryDate: '2024-08-31',
      status: 'Active'
    },
    {
      fundingPartner: 'XYZ Ltd',
      contactRef: 'Jane Smith',
      contractDate: '2023-05-01',
      terms: 'Net 60',
      expiryDate: '2025-05-01',
      status: 'Inactive'
    },

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
    let dialogRef = this.dialog.open(AddFundingContractComponent, {
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

