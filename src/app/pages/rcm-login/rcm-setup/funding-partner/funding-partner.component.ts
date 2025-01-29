import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/pages/ui/dialog/dialog.component';
import { AddFundingPartnerComponent } from './add-funding-partner/add-funding-partner.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ReferralsfilterComponent } from '../../referrals/referralsfilter/referralsfilter.component';


@Component({
  selector: 'app-funding-partner',
  templateUrl: './funding-partner.component.html',
  styleUrl: './funding-partner.component.scss',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.3s ease-in-out', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('0.3s ease-in-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class FundingPartnerComponent {


   
  showCard: boolean;

  toggleCard() {

    this.showCard = !this.showCard;

    if (!this.showCard) {
      this.showTable = false;
      this.showTable1 = false;
      this.showTable2 = false;
    }
  }



  dataSource = [
    { workList: 'Total Referrals', volume: 120201 },
    { workList: 'Pending Verification', volume: 1875 },
    { workList: 'Pending Authorization', volume: 3790 },
    { workList: 'Delayed', volume: 9078 },
    { workList: 'Denied', volume: 908 },
    { workList: 'Verified NOT AUTH', volume: 8900 },
    { workList: 'AUTH NOT SCH', volume: 890 },
    { workList: 'SCH NOT Verified', volume: 1987 },
    { workList: 'Total SCH Visits', volume: 190234 },
  ];


  dataSource1 = [
    { workList: 'Total SCH Visits', volume: 190234 },
    { workList: 'No Show', volume: 20200 },
    { workList: 'Cancelled', volume: 9201 },
    { workList: 'COM Insurance', volume: 12001 },
    { workList: 'Workers Comp', volume: 2908 },
    { workList: 'Self Pay', volume: 7780 },
    { workList: 'Total Claims', volume: 130001 },
    { workList: 'Claims Per SCH Visits', volume: 0.68 },
  ];

  dataSource2 = [
    { workList: 'Total Claims', volume: 130001 },
    { workList: 'Claims Closed', volume: 110000 },
    { workList: 'Claims Dropped', volume: 12800 },
    { workList: 'Deposit Received', volume: 23902 },
    { workList: 'Claims Settled', volume: 95001 },
    { workList: 'Claims Paid', volume: 80001 },
    { workList: 'Value of Claims', volume: 2902091 },
    { workList: 'Payment Received', volume: 1098121 },
    { workList: 'Fraction Paid By Volume', volume: 0.61 },
    { workList: 'Fraction Paid By Value', volume: 0.38 },
  ];

  showTable: boolean = false;
  showTable1: boolean = false;
  showTable2: boolean = false;

  toggleTable(table: string) {
    if (table === 'table') {
      this.showTable = !this.showTable; // Toggle the state
      this.showTable1 = false; // Ensure other tables are closed
      this.showTable2 = false;
    } else if (table === 'table1') {
      this.showTable1 = !this.showTable1; // Toggle the state
      this.showTable = false;
      this.showTable2 = false;
    } else if (table === 'table2') {
      this.showTable2 = !this.showTable2; // Toggle the state
      this.showTable = false;
      this.showTable1 = false;
    }
  }


  
  referralsFilter(event: MouseEvent): void {
    const buttonRect = (event.target as HTMLElement).getBoundingClientRect();
    const marginRight = -400; // Adjust this value as needed for the left margin
    const dialogPosition = {
      top: `${buttonRect.bottom}px`,
      left: `${buttonRect.left + marginRight}px`, // Add margin to the left
    };

    this.dialog.open(ReferralsfilterComponent, {
      height: 'auto',
      width: '450px',
      position: dialogPosition,
    });
  }

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

  users = [
    {
      fundingPartner: 'Partner Alpha',
      contactPerson: 'Alice Johnson',
      claims: 20,
      batches: 4,
      claimAmount: '$40,000',
      funding: 'Corporate',
      payback: 'Quarterly',
      paybackDays: 60,
      minAge: 30,
      mediumAge: 40,
      maxAge: 50,
      contactEmail: 'alice.johnson@example.com',
      contactPhone: '(713) 555-7890',
      contracts: 'Contract Alpha',
      isActive: true
    },
    {
      fundingPartner: 'Partner Beta',
      contactPerson: 'Bob Smith',
      claims: 10,
      batches: 2,
      claimAmount: '$20,000',
      funding: 'Government',
      payback: 'Monthly',
      paybackDays: 30,
      minAge: 25,
      mediumAge: 35,
      maxAge: 45,
      contactEmail: 'bob.smith@example.com',
      contactPhone: '(281) 555-1234',
      contracts: 'Contract Beta',
      isActive: false
    },
    {
      fundingPartner: 'Partner Gamma',
      contactPerson: 'Charlie Davis',
      claims: 30,
      batches: 6,
      claimAmount: '$60,000',
      funding: 'Non-Profit',
      payback: 'Annually',
      paybackDays: 365,
      minAge: 35,
      mediumAge: 45,
      maxAge: 55,
      contactEmail: 'charlie.davis@example.com',
      contactPhone: '(346) 555-6789',
      contracts: 'Contract Gamma',
      isActive: true
    },
    {
      fundingPartner: 'Partner Alpha',
      contactPerson: 'Alice Johnson',
      claims: 20,
      batches: 4,
      claimAmount: '$40,000',
      funding: 'Corporate',
      payback: 'Quarterly',
      paybackDays: 60,
      minAge: 30,
      mediumAge: 40,
      maxAge: 50,
      contactEmail: 'alice.johnson@example.com',
      contactPhone: '(713) 555-7890',
      contracts: 'Contract Alpha',
      isActive: true
    },
    {
      fundingPartner: 'Partner Beta',
      contactPerson: 'Bob Smith',
      claims: 10,
      batches: 2,
      claimAmount: '$20,000',
      funding: 'Government',
      payback: 'Monthly',
      paybackDays: 30,
      minAge: 25,
      mediumAge: 35,
      maxAge: 45,
      contactEmail: 'bob.smith@example.com',
      contactPhone: '(281) 555-1234',
      contracts: 'Contract Beta',
      isActive: false
    },
    {
      fundingPartner: 'Partner Gamma',
      contactPerson: 'Charlie Davis',
      claims: 30,
      batches: 6,
      claimAmount: '$60,000',
      funding: 'Non-Profit',
      payback: 'Annually',
      paybackDays: 365,
      minAge: 35,
      mediumAge: 45,
      maxAge: 55,
      contactEmail: 'charlie.davis@example.com',
      contactPhone: '(346) 555-6789',
      contracts: 'Contract Gamma',
      isActive: true
    }
  ];


  ngOnInit() {
  }

  getallusers() {

  }

  deleteUser() {


  }

  changestatus(data: any) {


  }

  openEditDialog() {
    let dialogRef = this.dialog.open(AddFundingPartnerComponent, {
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
