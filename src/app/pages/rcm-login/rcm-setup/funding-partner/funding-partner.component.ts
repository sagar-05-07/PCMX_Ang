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


  isAscending: boolean = true;

  toggleSort(event: Event) {
    event.stopPropagation(); // Prevent menu from opening
    this.isAscending = !this.isAscending; // Toggle sort order
  }
  
  onSortOptionSelected(option: string) {
    console.log('Selected sort option:', option);
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





  eventTypes: string[] = [
    'Hamilton',
    'Beeville',
    'Houston',
    'Delete',
    'Refugio',
    'Winters',
    'Sweeny',
  ];
  filteredEventTypes: string[] = [...this.eventTypes];
  selectedEventType: string | null = null;
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase(); // Safe casting to HTMLInputElement
    this.filteredEventTypes = this.eventTypes.filter((eventType) =>
      eventType.toLowerCase().includes(filterValue)
    );
  }


  eventTypes3: string[] = [
    'Texas',
    'California',
    'Florida',
    'Virginia',
    'Alaska',
    'Hawaii',
    'Ohio',
  ];
  filteredEventTypes3: string[] = [...this.eventTypes3];
  selectedEventType3: string | null = null;
  applyFilter3(event: Event): void {
    const filterValue2 = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase(); // Safe casting to HTMLInputElement
    this.filteredEventTypes3 = this.eventTypes3.filter((eventType3) =>
      eventType3.toLowerCase().includes(filterValue2)
    );
  }

  


}
