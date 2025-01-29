import { Component } from '@angular/core';
import { SingleFileUploadComponent } from 'src/app/shared/single-file-upload/single-file-upload.component';
import { NotesComponent } from '../../../claims/notes/notes.component';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { hi } from 'date-fns/locale';

@Component({
  selector: 'app-inner-invoice',
  templateUrl: './inner-invoice.component.html',
  styleUrl: './inner-invoice.component.scss'
})
export class InnerInvoiceComponent {

  filterToggle2: boolean = false;
  public currentPage = 0;
  public totalSize = 0;
  pageSize: 0;
  filterForm: FormGroup;
  filterToggle: boolean = false;
  todayDate = new Date();

  constructor(public dialog: MatDialog,) { }

  ngOnInt() { }

  back() {
    history.back();
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
      fundedDate: new Date('2024-10-12')
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
      fundedDate: new Date('2024-10-15')
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
      fundedDate: new Date('2024-10-12')
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
      fundedDate: new Date('2024-10-15')
    }
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

  openEditDialog(item: any) {
    // this.dialog.open(AddInvoiceComponent, {
    //   data: item,
    //   height: 'auto',
    //   width: '1050px'
    // });
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
