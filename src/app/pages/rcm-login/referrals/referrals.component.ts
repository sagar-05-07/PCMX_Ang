import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddReferralsComponent } from './add-referrals/add-referrals.component';
import { Router } from '@angular/router';
import { ReferralMergeComponent } from './referral-merge/referral-merge.component';
import { PatientPopComponent } from '../patient-pop/patient-pop.component';
import { FilterSaveComponent } from 'src/app/shared/filter-save/filter-save.component';
import { PerspectivesComponent } from 'src/app/shared/perspectives/perspectives.component';
import { PerspectiveFilterComponent } from '../patients/perspective-filter/perspective-filter.component';
import { ClaimsvspaidComponent } from '../patients/claimsvspaid/claimsvspaid.component';
import { VisitsvsclaimsComponent } from '../patients/visitsvsclaims/visitsvsclaims.component';
import { ReferralvsvisitsComponent } from '../patients/referralvsvisits/referralvsvisits.component';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrl: './referrals.component.scss',
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

export class ReferralsComponent {



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



  filterToggle2: boolean = false;
  public currentPage = 0;
  public totalSize = 0;
  pageSize: 0;
  filterForm: FormGroup;
  filterToggle: boolean = false;

  constructor(
    public dialog: MatDialog,
    public router: Router
  ) { }

  ngOnInit() { }

  isNavOpen = true; // Start with the navigation open

  toggleNav() {
    this.isNavOpen = !this.isNavOpen; // Toggle between open and closed states
  }

  openMerge() {
    this.dialog.open(ReferralMergeComponent, {
      width: '700px',
      height: 'auto',
    });
  }

  saveFilters() {
    this.dialog.open(FilterSaveComponent, {
      height: 'auto',
      width: '450px'
    });
  }

  perspectives() {
    this.dialog.open(PerspectivesComponent, {
      height: 'auto',
      width: '450px'
    });
  }

  perspectiveFilter(event: MouseEvent): void {
    const buttonRect = (event.target as HTMLElement).getBoundingClientRect();
    const marginRight = -400; // Adjust this value as needed for the left margin
    const dialogPosition = {
      top: `${buttonRect.bottom}px`,
      left: `${buttonRect.left + marginRight}px`, // Add margin to the left
    };

    this.dialog.open(PerspectiveFilterComponent, {
      height: 'auto',
      width: '450px',
      position: dialogPosition,
    });
  }
  selectedIcon: number | null = 1;

  icons = [
    { name: 'add_box', tooltip: 'Patient Intake Perspective' },
    { name: 'account_box', tooltip: 'Liaisons Perspective' },
    // { name: 'verified_user', tooltip: 'Authorization' },
    { name: 'group', tooltip: 'Case Managers Perspective' },
    { name: 'event', tooltip: 'Scheduling Perspective' },
    // { name: 'health_and_safety', tooltip: 'Patient Care' },
    { name: 'receipt_long', tooltip: 'Claims Perspective' },
    { name: 'attach_money', tooltip: 'Funds Perspective' },
    { name: 'collections', tooltip: 'Collection Perspective' },
    { name: 'business', tooltip: 'Leadership Perspective' },
    { name: 'campaign', tooltip: 'Marketing Perspective' },
    { name: '', tooltip: '' },
  ];

  selectIcon(index: number): void {
    this.selectedIcon = index; // Set the clicked icon as selected
  }


  patientData = [
    { description: 'Total Referrals', count: '120,201' },
    { description: 'Referrals this Year', count: '56,987' },
    { description: 'Referral Last Year', count: '42,987' },
    { description: 'Referral this Quarter', count: '15,009' }
  ];

  patientData2 = [
    { description: 'Referral this month', count: '14,985' },
    { description: 'Referral last month', count: '6,521' },
    { description: 'Pending Verification', count: '5,621' },
    { description: 'Pending Authorization', count: '98' }
  ];

  logData = [
    { description: 'Referral this week', count: '74' },
    { description: 'Logged this month', count: '49' },
    { description: 'Delayed', count: '48', style: 'red' },
    { description: 'Denied', count: '268', style: 'red' }
  ];
  // for Collection
  collectionData = [
    { description: 'New This Month', count: '120,201' },
    { description: 'Settled This Month', count: '56,987' },
    { description: 'Paid This Month', count: '42,987' },
  ];

  collectionData2 = [
    { description: 'Overdue Claims', count: '14,985' },
    { description: 'New This Year', count: '6,521' },
    { description: 'Settled This Year', count: '5,621' },
  ];

  collectionLogData = [
    { description: 'Paid This Year ', count: '74' },
    { description: 'Delayed', count: '48', style: 'red' },
    { description: 'Denied', count: '268', style: 'red' }
  ];

  Liaisons = [
    { text: 'Referrals this year', number: '421,998' },
    { text: 'Referrals this quarter', number: '98,909' },
    { text: 'Referrals this month', number: '74,786' },
    { text: 'Pending Verification', number: '12,871' },
    { text: 'Pending Authorization', number: '10,981' },
    { text: 'SCH & Pending Auth', number: '32,987' },
  ];

  getBackgroundColor(index: number): string {
    const colors = ['#D9D9D9', '#FFD2B2', '#A8E5C1', '#C4C2FF', '#B3E3F6', '#E0DBFF'];
    return colors[index] || '#FFFFFF';
  }


  users = [
    {
      visits: '5',
      claims: '4',
      id: 1,
      status: 'New',
      referralId: '11212345',
      patientName: 'John Doe',
      referralFrom: 'Dr. Smith',
      referralTo: 'Dr. Brown',
      specialty: 'Orthopedics',
      caseType: 'Personal Injury',
      lastUpdated: new Date(2024, 10, 15),
      created: new Date(2024, 10, 1),
      orderType: 'Clinical',
    },
    {
      visits: '5',
      claims: '8',
      id: 2,
      status: 'Verified',
      referralId: '16711890',
      patientName: 'Jane Roe',
      referralFrom: 'Dr. Adams',
      referralTo: 'Dr. Lee',
      specialty: 'Neurology',
      caseType: 'Medical Malpractice',
      lastUpdated: new Date(2024, 10, 20),
      created: new Date(2024, 10, 10),
      orderType: 'Legal',
    },
    {
      visits: '5',
      claims: '2',
      id: 3,
      status: 'New',
      referralId: '11122223',
      patientName: 'Alice Smith',
      referralFrom: 'Dr. Clark',
      referralTo: 'Dr. White',
      specialty: 'Pediatrics',
      caseType: 'Family Law',
      lastUpdated: new Date(2024, 10, 25),
      created: new Date(2024, 10, 15),
      orderType: 'Insurance',
    },
    {
      visits: '5',
      claims: '4',
      id: 4,
      status: 'Authotized',
      referralId: '14454556',
      patientName: 'Bob Johnson',
      referralFrom: 'Dr. Miller',
      referralTo: 'Dr. Taylor',
      specialty: 'Cardiology',
      caseType: 'Disability Claims',
      lastUpdated: new Date(2024, 10, 18),
      created: new Date(2024, 10, 5),
      orderType: 'Clinical',
    },
    {
      visits: '5',
      claims: '8',
      id: 5,
      status: 'Denied',
      referralId: '17890221',
      patientName: 'Carol Davis',
      referralFrom: 'Dr. Moore',
      referralTo: 'Dr. Hernandez',
      specialty: 'Dermatology',
      caseType: 'Workers Compensation',
      lastUpdated: new Date(2024, 10, 12),
      created: new Date(2024, 10, 8),
      orderType: 'Medical',
    },
  ];

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

  open(item: any) {
    this.dialog.open(PatientPopComponent, {
      data: item,
      height: 'auto',
      width: '1200px'
    });
  }

  openEditDialog(item: any) {
    this.dialog.open(AddReferralsComponent, {
      data: item,
      height: 'auto',
      width: '950px',
    });
  }

  openpermissiondialog() { }

  onpermclick() {
    this.router.navigate(['rcm-login/referrals/referrals-dashboard']);
  }
}
