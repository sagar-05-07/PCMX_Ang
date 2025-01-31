import { Component } from '@angular/core';
import { AddClaimsComponent } from './add-claims/add-claims.component';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NotesComponent } from './notes/notes.component';
import { ClaimsMergeComponent } from './claims-merge/claims-merge.component';
import { PatientPopComponent } from '../patient-pop/patient-pop.component';
import { PerspectivesComponent } from 'src/app/shared/perspectives/perspectives.component';
import { PerspectiveFilterComponent } from '../patients/perspective-filter/perspective-filter.component';
import { ClaimsPerspectivesComponent } from './claims-perspectives/claims-perspectives.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ReferralsfilterComponent } from '../referrals/referralsfilter/referralsfilter.component';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrl: './claims.component.scss',
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
export class ClaimsComponent {

  
  showCard: boolean;

  selectedPatientType: string | null = null;
  selectedCaseType: string = '';
  selectedCategoryType: string = '';
  selectedOrderType: string = '';
  selectedRefferalType: string = '';
  selectedDateType: string = '';
  selectedReferralFrom: string = '';
  selectedReferralTo:string='';
  selectedVisitStatus:string='';
  selectedLocation:string='';
  selectedVisitType:string='';
  //raj
  eventTypes: string[] = ['Carol Davis', 'Bob Johnson	', 'Alice Smith', 'Jane Roe'];
  filteredPatientTypes: string[] = [...this.eventTypes]; 
   // raj
   applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase(); // Safe casting to HTMLInputElement
    this.filteredPatientTypes = this.eventTypes.filter(eventType => eventType.toLowerCase().includes(filterValue));
  }



    selectLawFirmType: string | null = null;
    //raj
    eventLawFirmTypes: string[] = ['Peterson & Associates', 'Mitchell Legal Group	', 'Carter & Bennett LLP', 'Greenfield Legal Solutions'];
    filteredLawFirmType: string[] = [...this.eventLawFirmTypes]; 
     // raj
     applyFilter1(event: Event): void {
      const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase(); // Safe casting to HTMLInputElement
      this.filteredLawFirmType = this.eventTypes.filter(eventType => eventType.toLowerCase().includes(filterValue));
    }
    
    selectedRefferalFrom: string | null = null;
    eventRefferalFrom: string[] = ['Dr. Smith', 'Dr. Johnson', 'Dr. Williams', 'Dr. Brown', 'Dr. Davis'];

    filteredRefferalFrom: string[] = [...this.eventRefferalFrom]; 
    applyFilter3(event: Event): void {
      const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase(); // Safe casting to HTMLInputElement
      this.filteredRefferalFrom = this.eventRefferalFrom.filter(eventRefferalFrom => eventRefferalFrom.toLowerCase().includes(filterValue));
    }


    selectedRefferalTo: string | null = null;
    eventRefferalTo: string[] = ['Dr. Miller', 'Dr. Wilson', 'Dr. Moore', 'Dr. Taylor', 'Dr. Anderson'];

    filteredRefferalTo: string[] = [...this.eventRefferalTo]; 
    applyFilter4(event: Event): void {
      const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase(); // Safe casting to HTMLInputElement
      this.filteredRefferalTo = this.eventRefferalFrom.filter(eventRefferalTo => eventRefferalTo.toLowerCase().includes(filterValue));
    }






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
    { workList: 'Visits Per Referral', volume: 1.58 },
    
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

      this.showTable = false;
      this.showTable1 = false;
      this.showTable2 = false;
      
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
  



  filterToggle2: boolean = false;
  public currentPage = 0;
  public totalSize = 0;
  pageSize: 0;
  filterForm: FormGroup;
  filterToggle: boolean = false;
  todayDate = new Date();

  isNavOpen = true; // Start with the navigation open

  toggleNav() {
    this.isNavOpen = !this.isNavOpen; // Toggle between open and closed states
  }

  constructor(public dialog: MatDialog,) { }

  ngOnInt() { }

  perspectives() {
    this.dialog.open(ClaimsPerspectivesComponent, {
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

  selectedIcon: number | null = 3;

  icons = [
    { name: 'account_box', tooltip: 'Liaisons Perspective' },
    // { name: 'add_box', tooltip: 'Patient Intake' },
    // { name: 'verified_user', tooltip: 'Authorization' },
    { name: 'group', tooltip: 'Case Manager Perspective' },
    { name: 'event', tooltip: 'Scheduling Perspective' },
    // { name: 'health_and_safety', tooltip: 'Patient Care' },
    { name: 'receipt_long', tooltip: 'Claim Perspective' },
    { name: 'attach_money', tooltip: 'Funds Perspective' },
    { name: 'collections', tooltip: 'Collection Perspective' },
    { name: 'business', tooltip: 'Leadership Perspective' },
    // { name: 'campaign', tooltip: 'Marketing' },
    { name: '', tooltip: '' },
  ];

  selectIcon(index: number): void {
    this.selectedIcon = index; // Set the clicked icon as selected
  }


  patientData = [
    { description: 'Total Claims', count: '120,201' },
    { description: 'Claims this Year', count: '56,987' },
    { description: 'Claims Last Year', count: '42,987' },
    { description: 'Claims this Quarter', count: '15,009' }
  ];

  patientData2 = [
    { description: 'Claims this month', count: '14,985' },
    { description: 'Claims last month', count: '6,521' },
    { description: 'Pending Verification', count: '5,621' },
    { description: 'Pending Authorization', count: '98' }
  ];

  logData = [
    { description: 'Claims this week', count: '74' },
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
    { text: 'Claims this year', number: '421,998' },
    { text: 'Claims this quarter', number: '98,909' },
    { text: 'Claims this month', number: '74,786' },
    { text: 'Pending Verification', number: '12,871' },
    { text: 'Pending Authorization', number: '10,981' },
    { text: 'SCH & Pending Auth', number: '32,987' },
  ];

  getBackgroundColor(index: number): string {
    const colors = ['#D9D9D9', '#FFD2B2', '#A8E5C1', '#C4C2FF', '#B3E3F6', '#E0DBFF'];
    return colors[index] || '#FFFFFF';
  }

  rows = [
    {
      claimsId: 12211345,
      patientId: 987654,
      patientName: 'John Doe',
      claimStatus: 'Scheduled', // This will be a dropdown in the table
      finance: true, // mat-checkbox value (true means checked)
      estimate: 1500,
      deposit: 500,
      negotiatedAmount: 1000,
      negotiationDate: new Date(), // Today's date
      purchaseAmount: 1200,
      paidAmount: 1300,
      paymentDate: new Date(), // Today's date
      paymentReference: 'REF12345',
      visitReference: 'VST123',
      submittedBy: 'Admin',
      locationName: '1911 Bagby St, Houston, TX 77002, United States',
      service: 'Insurance',
      serviceType: 'Surgery',
      serviceDate: new Date(), // Today's date
      dateOfInjury: new Date(), // Today's date
      notes: 'Claim is under review'
    },
    {
      claimsId: 67890112,
      patientId: 123456,
      patientName: 'Jane Smith',
      claimStatus: 'Completed',
      finance: false,
      estimate: 2000,
      deposit: 1500,
      negotiatedAmount: 1800,
      negotiationDate: new Date('2024-10-01'),
      purchaseAmount: 1900,
      paidAmount: 2000,
      locationName: '4200 Twelve Oaks PI, Hoston, TX 77027, United States',
      paymentDate: new Date('2024-10-10'),
      paymentReference: 'REF67890',
      visitReference: 'VST678',
      submittedBy: 'Nurse A',
      service: 'Medical',
      serviceType: 'Consultation',
      serviceDate: new Date('2024-09-15'),
      dateOfInjury: new Date('2024-09-10'),
      notes: 'No issues with the claim.'
    },
    {
      claimsId: 12345431,
      patientId: 987654,
      patientName: 'John Doe',
      locationName: '7502 Greenville Ave, Dallas, TX 75231, United States',
      claimStatus: 'Scheduled', // This will be a dropdown in the table
      finance: true, // mat-checkbox value (true means checked)
      estimate: 1500,
      deposit: 500,
      negotiatedAmount: 1000,
      negotiationDate: new Date(), // Today's date
      purchaseAmount: 1200,
      paidAmount: 1300,
      paymentDate: new Date(), // Today's date
      paymentReference: 'REF12345',
      visitReference: 'VST123',
      submittedBy: 'Admin',
      service: 'Insurance',
      serviceType: 'Surgery',
      serviceDate: new Date(), // Today's date
      dateOfInjury: new Date(), // Today's date
      notes: 'Claim is under review'
    },
    {
      claimsId: 67890111,
      patientId: 123456,
      patientName: 'Jane Smith',
      locationName: '	7502 Greenville Ave, Dallas, TX 75231, United States',
      claimStatus: 'Completed',
      finance: false,
      estimate: 2000,
      deposit: 1500,
      negotiatedAmount: 1800,
      negotiationDate: new Date('2024-10-01'),
      purchaseAmount: 1900,
      paidAmount: 2000,
      paymentDate: new Date('2024-10-10'),
      paymentReference: 'REF67890',
      visitReference: 'VST678',
      submittedBy: 'Nurse A',
      service: 'Medical',
      serviceType: 'Consultation',
      serviceDate: new Date('2024-09-15'),
      dateOfInjury: new Date('2024-09-10'),
      notes: 'No issues with the claim.'
    },
    {
      claimsId: 12345221,
      patientId: 987654,
      patientName: 'John Doe',
      locationName: '1911 Bagby St, Houston, TX 77002, United States',
      claimStatus: 'Scheduled', // This will be a dropdown in the table
      finance: true, // mat-checkbox value (true means checked)
      estimate: 1500,
      deposit: 500,
      negotiatedAmount: 1000,
      negotiationDate: new Date(), // Today's date
      purchaseAmount: 1200,
      paidAmount: 1300,
      paymentDate: new Date(), // Today's date
      paymentReference: 'REF12345',
      visitReference: 'VST123',
      submittedBy: 'Admin',
      service: 'Insurance',
      serviceType: 'Surgery',
      serviceDate: new Date(), // Today's date
      dateOfInjury: new Date(), // Today's date
      notes: 'Claim is under review'
    },
    {
      claimsId: 67892120,
      patientId: 123456,
      locationName: '1911 Bagby St, Houston, TX 77002, United States',
      patientName: 'Jane Smith',
      claimStatus: 'Completed',
      finance: false,
      estimate: 2000,
      deposit: 1500,
      negotiatedAmount: 1800,
      negotiationDate: new Date('2024-10-01'),
      purchaseAmount: 1900,
      paidAmount: 2000,
      paymentDate: new Date('2024-10-10'),
      paymentReference: 'REF67890',
      visitReference: 'VST678',
      submittedBy: 'Nurse A',
      service: 'Medical',
      serviceType: 'Consultation',
      serviceDate: new Date('2024-09-15'),
      dateOfInjury: new Date('2024-09-10'),
      notes: 'No issues with the claim.'
    }
  ];

  open(item: any) {
    this.dialog.open(PatientPopComponent, {
      data: item,
      height: 'auto',
      width: '1200px'
    });
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

  openEditDialog(item: any) {
    this.dialog.open(AddClaimsComponent, {
      data: item,
      height: 'auto',
      width: '1000px'
    });
  }

  saveFilters(){}


  notesDialog(item: any) {
    this.dialog.open(NotesComponent, {
      data: item,
      height: 'auto',
      width: '520px'
    });
  }

  openMerge() {
    this.dialog.open(ClaimsMergeComponent, {
      width: '700px',
      height: 'auto',
    });
  }

  openpermissiondialog() { }


}
