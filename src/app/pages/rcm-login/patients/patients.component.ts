import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddPatientsComponent } from './add-patients/add-patients.component';
import { GridColumnComponent } from 'src/app/shared/grid-column/grid-column.component';
import { PatientGridColumnComponent } from './patient-grid-column/patient-grid-column.component';
import { MergePopComponent } from './merge-pop/merge-pop.component';
import { PatientPopComponent } from '../patient-pop/patient-pop.component';
import { FilterSaveComponent } from 'src/app/shared/filter-save/filter-save.component';
import { PerspectivesComponent } from 'src/app/shared/perspectives/perspectives.component';
import { PerspectiveFilterComponent } from './perspective-filter/perspective-filter.component';
import { ReferralvsvisitsComponent } from './referralvsvisits/referralvsvisits.component';
import { VisitsvsclaimsComponent } from './visitsvsclaims/visitsvsclaims.component';
import { ClaimsvspaidComponent } from './claimsvspaid/claimsvspaid.component';
import { ReferralsfilterComponent } from '../referrals/referralsfilter/referralsfilter.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss',
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
export class PatientsComponent {

  
  filterToggle: boolean;
 
  showCard: boolean;
  selectedMaritalStatus: string = '';
  selectedCaseType: string = '';
  selectedGender: string = '';
  selectedEventType: string | null = null;
  selectCityType:string | null = null;


   // raj
   eventTypes: string[] = ['California', 'New Jersey', 'Virginia', 'Washington'];
   filteredEventTypes: string[] = [...this.eventTypes]; 
   applyFilter(event: Event): void {
     const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase(); // Safe casting to HTMLInputElement
     this.filteredEventTypes = this.eventTypes.filter(eventType => eventType.toLowerCase().includes(filterValue));
   }
 
   
   cityTypes: string[] = ['Houston', 'Chicago', 'Los Angeles', 'New York'];
   filteredCityTypes: string[] = [...this.cityTypes];  
   applyFilter1(event: Event): void {
     const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase(); // Safe casting to HTMLInputElement
     this.filteredCityTypes = this.cityTypes.filter(cityTypes => cityTypes.toLowerCase().includes(filterValue));
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


  constructor(public dialog: MatDialog) { }

  //Grid Column Manager
  headers = [
    { Name: 'Actions', IsSelected: true },
    { Name: 'Status', IsSelected: true },
    { Name: 'VIN', IsSelected: true },
    { Name: 'Audit Type', IsSelected: true },
    { Name: 'Demerit', IsSelected: true },
    { Name: 'Target', IsSelected: true },
    { Name: 'Location', IsSelected: true },
    { Name: 'Vehicle Type', IsSelected: true },
    { Name: 'Engine Type', IsSelected: true },
    { Name: 'Drive Grade', IsSelected: true },
    { Name: 'Auditor', IsSelected: true },
    { Name: 'Model', IsSelected: true },
    { Name: 'Color', IsSelected: true },
    { Name: 'Variant', IsSelected: true },
    { Name: 'Interior Trim', IsSelected: true },
    { Name: 'Transmission', IsSelected: true },
    { Name: 'Fuel Type', IsSelected: true },
    { Name: 'Stage', IsSelected: true },
    { Name: 'Start Date', IsSelected: true },
    { Name: 'End Date', IsSelected: true },
    { Name: 'Level', IsSelected: true },
  ];
  savedHeaders = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  openManageGridDialog() {
    this.dialog.open(PatientGridColumnComponent, {
      width: '700px',
      height: 'auto',
    });
  }

  openMerge() {
    this.dialog.open(MergePopComponent, {
      width: '700px',
      height: 'auto',
    });
  }

  open(item: any) {
    this.dialog.open(PatientPopComponent, {
      data: item,
      height: 'auto',
      width: '1200px'
    });
  }

  saveFilters() {
    this.dialog.open(FilterSaveComponent, {
      height: 'auto',
      width: '450px'
    });
  }

  referralvsvisits(){
    this.dialog.open(ReferralvsvisitsComponent, {
      height: 'auto',
      width: '600px'
    });
  }

  visitvsclaims(){
    this.dialog.open(VisitsvsclaimsComponent, {
      height: 'auto',
      width: '600px'
    });
  }

  clamisvspaid() {
     this.dialog.open(ClaimsvspaidComponent, {
      height: 'auto',
      width: '600px'
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


  selectedIcon: number | null = 0;

  icons = [
    { name: 'add_box', tooltip: 'Patient Intake Perspective' },
    { name: 'account_box', tooltip: 'Liaison Perspective' },
    // { name: 'verified_user', tooltip: 'Authorization' },
    { name: 'group', tooltip: 'Case Manager Perspective' },
    { name: 'event', tooltip: 'Scheduling Perspective' },
    // { name: 'health_and_safety', tooltip: 'Patient Care' },
    { name: 'receipt_long', tooltip: 'Claim Perspective' },
    // { name: 'attach_money', tooltip: 'Funding' },
    { name: 'collections', tooltip: 'Collection Perspective' },
    { name: 'business', tooltip: 'Leadership Perspective' },
    { name: 'campaign', tooltip: 'Marketing Perspective' },
    { name: '', tooltip: '' },
  ];

  selectIcon(index: number): void {
    if (index >= 0 && index < this.icons.length) {
      this.selectedIcon = index;
      const selectedIconName = this.icons[index]?.tooltip || 'No icon selected';
      console.log('Selected Icon Name:', selectedIconName);
    } else {
      console.warn('Invalid icon index:', index);
    }
  }

  patientData = [
    { description: 'Total Patients', count: '120,201' },
    { description: 'Active this Year', count: '56,987' },
    { description: 'Active Last Year', count: '42,987' },
    { description: 'Active this Quarter', count: '15,009' }
  ];

  patientData2 = [
    { description: 'Active Last Quarter', count: '14,985' },
    { description: 'Active this Month', count: '6,521' },
    { description: 'Active Last Month', count: '5,621' },
    { description: 'Pending Verification', count: '98' }
  ];

  logData = [
    { description: 'Logged this week', count: '74' },
    { description: 'Logged this month', count: '49' },
    { description: 'Delayed', count: '48', style: 'red' },
    { description: 'Denied', count: '268', style: 'red' }
  ];

  values = [
    {
      note: 'NA',
      contactNumber: '9781922008',
      landline: '-',
      tagName: 'Initial',
      Campaign: 'Surveyors USA',
      state: 'Pennsylvania',
      city: 'Moon Township',
      account: 'Allana Group',
      name: 'AG',
      contname: 'Information Technology',
      email: 'AG@gmail.com',
      companyName: 'PQA India',
      notes: 'initial message has been sent. waiting for his reply.',
      country: 'india',
      solution: '1',
      industry: 'Surveyors',
      bdname: 'Sara',
      followpDate: '234',
      log: '1/9',
      activity: 5,
      resDate: '2024-03-14',
    },
    {
      note: 'NA',
      contactNumber: '9781922010',
      landline: '+91-11-42092300',
      tagName: 'Confirmed',
      Campaign: 'Surveyors Canada',
      state: 'Pennsylvania',
      city: 'Moon Township',
      account: 'Allana Group',
      name: 'AG',
      contname: 'Information Technology',
      email: 'AG@gmail.com',
      companyName: 'PQA India',
      notes: 'initial message has been sent. waiting for his reply.',
      country: 'india',
      solution: '1',
      industry: 'Surveyors',
      bdname: 'Sara',
      followpDate: '234',
      log: '1/9',
      activity: 5,
      resDate: '2024-03-10',
    },
    {
      note: 'NA',
      contactNumber: '9881922011',
      landline: '-',
      tagName: 'Initial',
      Campaign: 'Surveyors UK',
      state: 'Pennsylvania',
      city: 'Moon Township',
      account: 'Allana Group',
      name: 'AG',
      contname: 'Information Technology',
      email: 'AG@gmail.com',
      companyName: 'PQA India',
      notes: 'initial message has been sent. waiting for his reply.',
      country: 'india',
      solution: '1',
      industry: 'Surveyors',
      bdname: 'Sara',
      followpDate: '234',
      log: '1/9',
      activity: 5,
      resDate: '2024-03-19',
    },
    {
      note: 'NA',
      contactNumber: '7781922008',
      landline: '-',
      tagName: 'Confirmed',
      Campaign: 'Surveyors Russia',
      state: 'Pennsylvania',
      city: 'Moon Township',
      account: 'Allana Group',
      name: 'AG',
      contname: 'Information Technology',
      email: 'AG@gmail.com',
      companyName: 'PQA India',
      notes: 'initial message has been sent. waiting for his reply.',
      country: 'india',
      solution: '1',
      industry: 'Surveyors',
      bdname: 'Sara',
      followpDate: '234',
      log: '1/9',
      activity: 5,
      resDate: '2024-03-11',
    },
    {
      note: 'NA',
      contactNumber: '6781922012',
      landline: '+91-11-42092300	',
      tagName: 'Initial',
      Campaign: 'Surveyors Africa',
      state: 'Pennsylvania',
      city: 'Moon Township',
      account: 'Allana Group',
      name: 'AG',
      contname: 'Information Technology',
      email: 'AG@gmail.com',
      companyName: 'PQA India',
      notes: 'initial message has been sent. waiting for his reply.',
      country: 'india',
      solution: '1',
      industry: 'Surveyors',
      bdname: 'Sara',
      followpDate: '234',
      log: '1/9',
      activity: 5,
      resDate: '2024-03-17',
    },
  ];

  users: Array<any> = [
    {
      claims: '5',
      status: false,
      patientId: '10025423',
      name: 'John Doe',
      cases: 5,
      referrals: '2',
      providers: 1,
      liaison: 'Sarah Smith',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      emergency: 'Yes',
      employment: 'Full-time',
      insurance: 'Blue Shield',
      cellPhone: '2302130987',
      email: 'john.doe@example.com',
    },
    {
      claims: '10',
      status: 'Inactive',
      patientId: '10025422',
      name: 'Jane Smith',
      cases: 3,
      referrals: '1',
      providers: 0,
      liaison: 'Michael Brown',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001',
      emergency: 'No',
      employment: 'Part-time',
      insurance: 'United Health',
      cellPhone: '2302130987',
      email: 'jane.smith@example.com',
    },
    {
      claims: '12',
      status: 'Active',
      patientId: '10025421',
      name: 'Mike Johnson',
      cases: 8,
      referrals: '5',
      providers: 1,
      liaison: 'Emily Davis',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      emergency: 'Yes',
      employment: 'Contract',
      insurance: 'Aetna',
      cellPhone: '2302130987',
      email: 'mike.johnson@example.com',
    },
    {
      claims: '8',
      status: 'Active',
      patientId: '10025423',
      name: 'John Doe',
      cases: 5,
      referrals: '2',
      providers: 1,
      liaison: 'Sarah Smith',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      emergency: 'Yes',
      employment: 'Full-time',
      insurance: 'Blue Shield',
      cellPhone: '2302130987',
      email: 'john.doe@example.com',
    },
    {
      claims: '11',
      status: false,
      patientId: '10025422',
      name: 'Jane Smith',
      cases: 3,
      referrals: '1',
      providers: 0,
      liaison: 'Michael Brown',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001',
      emergency: 'No',
      employment: 'Part-time',
      insurance: 'United Health',
      cellPhone: '2302130987',
      email: 'jane.smith@example.com',
    },
    {
      claims: '4',
      status: 'Active',
      patientId: '10025421',
      name: 'Mike Johnson',
      cases: 8,
      referrals: '5',
      providers: 1,
      liaison: 'Emily Davis',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      emergency: 'Yes',
      employment: 'Contract',
      insurance: 'Aetna',
      cellPhone: '2302130987',
      email: 'mike.johnson@example.com',
    },
  ];

  
  isAscending: boolean = true;

  toggleSort(event: Event) {
    event.stopPropagation();
    this.isAscending = !this.isAscending; 
  }
  
  onSortOptionSelected(option: string) {
    console.log('Selected sort option:', option);
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
    this.dialog.open(AddPatientsComponent, {
      data: item,
      height: 'auto',
      width: '1200px',
    });
  }



  searchFilters() {
    
  }

  clearFilters() {
   
  }
  openpermissiondialog() { }
}
