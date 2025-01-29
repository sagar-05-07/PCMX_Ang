import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NotesComponent } from '../notes/notes.component';
import { PaymentsPopComponent } from './payments-pop/payments-pop.component';

@Component({
  selector: 'app-claims-payments',
  templateUrl: './claims-payments.component.html',
  styleUrl: './claims-payments.component.scss'
})
export class ClaimsPaymentsComponent {

  filterToggle2: boolean = false;
  public currentPage = 0;
  public totalSize = 0;
  pageSize: 0;
  filterForm: FormGroup;
  filterToggle: boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInt() { }

  openDistribution() {
    this.dialog.open(PaymentsPopComponent, {
      height: 'auto',
      width: '520px'
    });
  }

  users = [
    {
      id: 67976545,
      paymentDate: new Date(2024, 11, 15),  // 15-Dec-2024
      amount: 5000,
      paymentMode: 'Credit Card',
      paymentRef: 12345678,
      patientId: 10001234,
      caseId: 20001234,
      claimId: 30001234,
      paymentType: 'Interim',
      remarks: 'Processed successfully'
    },
    {
      id: 67976546,
      paymentDate: new Date(2024, 11, 16),  // 16-Dec-2024
      amount: 3500,
      paymentMode: 'Cash',
      paymentRef: 23456789,
      patientId: 10005678,
      caseId: 20005678,
      claimId: 30005678,
      paymentType: 'Deposit',
      remarks: 'Pending confirmation'
    },
    {
      id: 67976547,
      paymentDate: new Date(2024, 11, 17),  // 17-Dec-2024
      amount: 7500,
      paymentMode: 'Bank Transfer',
      paymentRef: 34567890,
      patientId: 10007890,
      caseId: 20007890,
      claimId: 30007890,
      paymentType: 'Settlement',
      remarks: 'Awaiting approval'
    }
  ];


  notesDialog(item: any) {
    this.dialog.open(NotesComponent, {
      data: item,
      height: 'auto',
      width: '520px'
    });
  }

  back() {
    history.back();
  }
  openEditDialog(item: any) {
    // this.dialog.open(AddCasesComponent, {
    //   data: item,
    //   height: 'auto',
    //   width: '950px',
    // });
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
