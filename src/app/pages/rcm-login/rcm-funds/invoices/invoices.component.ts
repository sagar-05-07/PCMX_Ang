import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { NotesComponent } from '../../claims/notes/notes.component';
import { SingleFileUploadComponent } from 'src/app/shared/single-file-upload/single-file-upload.component';
import { PatientPopComponent } from '../../patient-pop/patient-pop.component';
import { PaymentsPerspectivesComponent } from '../../rcm-payments/payments-perspectives/payments-perspectives.component';
import { PerspectiveFilterComponent } from '../../patients/perspective-filter/perspective-filter.component';
import { FundsPerspectiveComponent } from './funds-perspective/funds-perspective.component';
import { ReferralsfilterComponent } from '../../referrals/referralsfilter/referralsfilter.component';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.scss',
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
export class InvoicesComponent {

  
  
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
    selectedLocation:string='';
    //raj
    eventTypes: string[] = ['Carol Davis', 'Bob Johnson	', 'Alice Smith', 'Jane Roe'];
    filteredPatientTypes: string[] = [...this.eventTypes]; 
     // raj
     applyFilter(event: Event): void {
      const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase(); // Safe casting to HTMLInputElement
      this.filteredPatientTypes = this.eventTypes.filter(eventType => eventType.toLowerCase().includes(filterValue));
    }
  
  
    
  isAscending: boolean = true;

  toggleSort(event: Event) {
    event.stopPropagation(); // Prevent menu from opening
    this.isAscending = !this.isAscending; // Toggle sort order
  }
  
  onSortOptionSelected(option: string) {
    console.log('Selected sort option:', option);
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
      saveFilters(){}
  
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
  todayDate = new Date();

  constructor(public dialog: MatDialog,) { }

  ngOnInt() { }

    perspectives() {
      this.dialog.open(FundsPerspectiveComponent, {
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
    { name: 'attach_money', tooltip: 'Funds Perspective' },
   // { name: 'account_box', tooltip: 'Liaison Perspective' },
   // { name: 'group', tooltip: 'Case Manager Perspective' },
    //{ name: 'receipt_long', tooltip: 'Claim Perspective' },
    //{ name: 'collections', tooltip: 'Collection Perspective' },
    //{ name: 'business', tooltip: 'Leadership Perspective' },
    { name: '', tooltip: '' },
  ];

  selectIcon(index: number): void {
    this.selectedIcon = index; // Set the clicked icon as selected
  }

  users = [
    {
      invoiceId: '1212345',
      caseId: '1300001',
      claimId: '847382',
      fundingPartner: 'Partner A',
      publish: true,
      invoiceValue: 5000,
      fundsReceived: 4500,
      patientName: 'John Doe',
      dob: new Date('1985-03-25'),
      dos: new Date('2024-10-10'),
      doi: new Date('2024-10-12'),
      med: 'Yes',
      aob: 'No',
      lop: '2024-11-01',
      lawFirmBy: 'Foley & Lardner LLP',
      provider: 'Jones Day',
      createdDate: new Date('2024-10-05'),
      fundedDate: new Date('2024-10-12'),
      locationName: '1911 Bagby St, Houston, TX 77002, United States'
    },
    {
      invoiceId: '1212343',
      caseId: '1212142',
      claimId: '3452345',
      fundingPartner: 'Partner B',
      publish: true,
      invoiceValue: 8000,
      fundsReceived: 7800,
      patientName: 'Jane Smith',
      dob: new Date('1990-07-15'),
      dos: new Date('2024-10-15'),
      doi: new Date('2024-10-17'),
      med: 'No',
      aob: 'Yes',
      lop: '2024-12-01',
      lawFirmBy: 'David & Co',
      provider: 'Hogan Lovells',
      createdDate: new Date('2024-10-08'),
      fundedDate: new Date('2024-10-15'),
      locationName: '4200 Twelve Oaks PI, Hoston, TX 77027, United States'
    },
    {
      invoiceId: '1212345',
      caseId: '1300001',
      claimId: '847382',
      fundingPartner: 'Partner A',
      publish: true,
      invoiceValue: 5000,
      fundsReceived: 4500,
      patientName: 'John Doe',
      dob: new Date('1985-03-25'),
      dos: new Date('2024-10-10'),
      doi: new Date('2024-10-12'),
      med: 'Yes',
      aob: 'No',
      lop: '2024-11-01',
      lawFirmBy: 'Foley & Lardner LLP',
      provider: 'Jones Day',
      createdDate: new Date('2024-10-05'),
      fundedDate: new Date('2024-10-12'),
      locationName: '7502 Greenville Ave, Dallas, TX 75231, United States',
    },
    {
      invoiceId: '1212343',
      caseId: '1212142',
      claimId: '3452345',
      fundingPartner: 'Partner B',
      publish: true,
      invoiceValue: 8000,
      fundsReceived: 7800,
      patientName: 'Jane Smith',
      dob: new Date('1990-07-15'),
      dos: new Date('2024-10-15'),
      doi: new Date('2024-10-17'),
      med: 'No',
      aob: 'Yes',
      lop: '2024-12-01',
      lawFirmBy: 'David & Co',
      provider: 'Hogan Lovells',
      createdDate: new Date('2024-10-08'),
      fundedDate: new Date('2024-10-15'),
      locationName: '7502 Greenville Ave, Dallas, TX 75231, United States'
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
    this.dialog.open(AddInvoiceComponent, {
      data: item,
      height: 'auto',
      width: '1050px'
    });
  }

  notesDialog(item: any) {
    this.dialog.open(NotesComponent, {
      data: item,
      height: 'auto',
      width: '520px'
    });
  }

  openfileupload(id: any) {
    let dialogRef = this.dialog.open(SingleFileUploadComponent, {
      data: id,
      height: 'auto',
      width: '600px'
    });
  }

  openpermissiondialog() { }

}
