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

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.scss'
})
export class InvoicesComponent {

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
