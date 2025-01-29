import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SingleFileUploadComponent } from 'src/app/shared/single-file-upload/single-file-upload.component';
import { PatientPopComponent } from '../../patient-pop/patient-pop.component';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrl: './batches.component.scss'
})
export class BatchesComponent {

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

  buttons: string[] = ['PFD (3)', 'STRATFORD (7)', 'ADHS+ (11)', 'NTBC (4)'];
  selectedButton: number = 0; // Default to the first button

  selectButton(index: number): void {
    this.selectedButton = index;
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

  openfileupload(id: any) {
    let dialogRef = this.dialog.open(SingleFileUploadComponent, {
      data: id,
      height: 'auto',
      width: '600px'
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
    // this.dialog.open(AddInvoiceComponent, {
    //   data: item,
    //   height: 'auto',
    //   width: '1050px'
    // });
  }

  notesDialog(item: any) {
    // this.dialog.open(NotesComponent, {
    //   data: item,
    //   height: 'auto',
    //   width: '520px'
    // });
  }

  openpermissiondialog() { }

}

