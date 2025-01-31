import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddCasesComponent } from './add-cases/add-cases.component';
import { CasesMergeComponent } from './cases-merge/cases-merge.component';
import { PerspectiveFilterComponent } from '../patients/perspective-filter/perspective-filter.component';
import { PerspectivesComponent } from 'src/app/shared/perspectives/perspectives.component';
import { FilterSaveComponent } from 'src/app/shared/filter-save/filter-save.component';
import { CasesPerspectivesComponent } from './cases-perspectives/cases-perspectives.component';
import { ReferralsfilterComponent } from '../referrals/referralsfilter/referralsfilter.component';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrl: './cases.component.scss',
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
export class CasesComponent {


  
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
  selectedAttorney:string='';
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
    { workList: 'Visits Per Referral', volume: 1.58 }
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

  isNavOpen = true; // Start with the navigation open

  toggleNav() {
    this.isNavOpen = !this.isNavOpen; // Toggle between open and closed states
  }


  constructor(public dialog: MatDialog) { }

  ngOnInt() { }


   saveFilters() {
        this.dialog.open(FilterSaveComponent, {
          height: 'auto',
          width: '450px'
        });
      }

  perspectives() {
    this.dialog.open(CasesPerspectivesComponent, {
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
  selectedIcon: number | null = 6;

  icons = [
    { name: 'add_box', tooltip: 'Patient Intake Perspective' },
    { name: 'account_box', tooltip: 'Liaison Perspective' },
    { name: 'group', tooltip: 'Case Manager Perspective' },
    { name: 'event', tooltip: 'Scheduling Perspective' },
    { name: 'receipt_long', tooltip: 'Claim Perspective' },
    { name: 'attach_money', tooltip: 'Funds Perspective' },
    { name: 'collections', tooltip: 'Collection Perspective' },
    { name: 'business', tooltip: 'Leadership Perspective' },
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
      claims: '2',
      referrals: '3',
      liaison: 'Sarah Smith',
      id: 1,
      status: true,
      caseId: '32112345',
      patientId: '9',
      patientName: 'John Doe',
      dob: new Date('1990-05-15'),
      dol: new Date('2023-11-01'),
      lawFirm: 'Legal Associates',
      updated: new Date('2024-11-25'),
      gender: 'Male',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      locations: '5',
      providers: '9'
    },
    {
      claims: '3',
      referrals: '3',
      liaison: 'Michael Brown	',
      id: 2,
      status: false,
      caseId: '65354321',
      patientId: '6',
      patientName: 'Jane Smith',
      dob: new Date('1985-03-22'),
      dol: new Date('2023-10-10'),
      lawFirm: 'Smith & Co.',
      updated: new Date('2024-11-20'),
      gender: 'Female',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001',
      locations: '5',
      providers: '8'
    },
    {
      claims: '9',
      referrals: '7',
      liaison: 'Emily Davis',
      id: 3,
      status: 'Pending',
      caseId: '09167890',
      patientId: '7',
      patientName: 'Alice Johnson',
      dob: new Date('1992-08-10'),
      dol: new Date('2023-08-15'),
      lawFirm: 'Johnson Legal',
      updated: new Date('2024-11-15'),
      gender: 'Female',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      locations: '5',
      providers: '8'
    },
    {
      claims: '5',
      referrals: '5',
      liaison: 'Sarah Smith	',
      id: 4,
      status: true,
      caseId: '12398765',
      patientId: '5',
      patientName: 'Michael Brown',
      dob: new Date('1975-12-25'),
      dol: new Date('2023-07-20'),
      lawFirm: 'Brown Partners',
      updated: new Date('2024-11-22'),
      gender: 'Male',
      city: 'Houston',
      state: 'TX',
      zipCode: '77001',
      locations: '3',
      providers: '6'
    },
    {
      claims: '3',
      referrals: '5',
      liaison: 'Emily Davis',
      id: 5,
      status: false,
      caseId: '54145678',
      patientId: '2',
      patientName: 'Emily Davis',
      dob: new Date('1999-09-30'),
      dol: new Date('2023-09-10'),
      lawFirm: 'Davis & Associates',
      updated: new Date('2024-11-10'),
      gender: 'Female',
      city: 'Phoenix',
      state: 'AZ',
      zipCode: '85001',
      locations: '9',
      providers: '6'
    },
    {
      claims: '6',
      referrals: '2',
      liaison: 'Emily Davis',
      id: 6,
      status: 'Pending',
      caseId: '21311111',
      patientId: '9',
      patientName: 'Robert Wilson',
      dob: new Date('1988-06-18'),
      dol: new Date('2023-06-15'),
      lawFirm: 'Wilson Group',
      updated: new Date('2024-11-18'),
      gender: 'Male',
      city: 'Philadelphia',
      state: 'PA',
      zipCode: '19101',
      locations: '2',
      providers: '4'
    },
    {
      claims: '3',
      referrals: '6',
      liaison: 'Emily Davis',
      id: 7,
      status: true,
      caseId: '11222222',
      patientId: '8',
      patientName: 'Olivia Martinez',
      dob: new Date('1983-04-10'),
      dol: new Date('2023-04-12'),
      lawFirm: 'Martinez & Sons',
      updated: new Date('2024-11-12'),
      gender: 'Female',
      city: 'San Antonio',
      state: 'TX',
      zipCode: '78201',
      locations: '1',
      providers: '3'
    },
    {
      claims: '6',
      referrals: '5',
      liaison: 'Emily Davis',
      id: 8,
      status: false,
      caseId: '64233333',
      patientId: '7',
      patientName: 'David Anderson',
      dob: new Date('1972-11-11'),
      dol: new Date('2023-11-09'),
      lawFirm: 'Anderson Legal',
      updated: new Date('2024-11-09'),
      gender: 'Male',
      city: 'San Diego',
      state: 'CA',
      zipCode: '92101',
      locations: '7',
      providers: '9'
    },
    {
      claims: '6',
      referrals: '5',
      liaison: 'Emily Davis',
      id: 9,
      status: true,
      caseId: '64244444',
      patientId: '6',
      patientName: 'Sophia Hernandez',
      dob: new Date('1995-02-14'),
      dol: new Date('2023-02-14'),
      lawFirm: 'Hernandez & Co.',
      updated: new Date('2024-11-14'),
      gender: 'Female',
      city: 'Dallas',
      state: 'TX',
      zipCode: '75201',
      locations: '9',
      providers: '8'
    },
    {
      claims: '7',
      referrals: '6',
      liaison: 'Emily Davis',
      id: 10,
      status: 'Pending',
      caseId: '12355555',
      patientId: '5',
      patientName: 'James Garcia',
      dob: new Date('1986-07-07'),
      dol: new Date('2023-07-01'),
      lawFirm: 'Garcia Legal',
      updated: new Date('2024-11-01'),
      gender: 'Male',
      city: 'Austin',
      state: 'TX',
      zipCode: '73301',
      locations: '7',
      providers: '5'
    },
  ];

  openEditDialog(item: any) {
    this.dialog.open(AddCasesComponent, {
      data: item,
      height: 'auto',
      width: '950px',
    });
  }

  openMerge() {
    this.dialog.open(CasesMergeComponent, {
      width: '700px',
      height: 'auto',
    });
  }

  openpermissiondialog() { }

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
}
