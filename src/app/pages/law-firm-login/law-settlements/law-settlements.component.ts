import { Component } from '@angular/core';
import { AddPaymentsComponent } from '../../rcm-login/rcm-payments/add-payments/add-payments.component';
import { PaymentDistributionComponent } from '../../rcm-login/rcm-payments/payment-distribution/payment-distribution.component';
import { NotesComponent } from '../../rcm-login/claims/notes/notes.component';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-law-settlements',
  templateUrl: './law-settlements.component.html',
  styleUrl: './law-settlements.component.scss'
})
export class LawSettlementsComponent {

  filterToggle2: boolean = false;
  public currentPage = 0;
  public totalSize = 0;
  pageSize: 0;
  filterForm: FormGroup;
  filterToggle: boolean = false;

  constructor(public dialog: MatDialog) { }


  isNavOpen = true; // Start with the navigation open

  toggleNav() {
    this.isNavOpen = !this.isNavOpen; // Toggle between open and closed states
  }

  ngOnInt() { }

  users = [
    {
      id: 67976545,
      paymentDate: new Date(2024, 11, 15),  // 15-Dec-2024
      amount: 5000,
      paymentMode: 'Credit Card',
      paymentRef: 12345678,
      patientId: 10001234,
      caseId: 20001234,
      claimId: 34,
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
      claimId: 8,
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
      claimId: 9,
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

  openDistribution() {
    this.dialog.open(PaymentDistributionComponent, {
      height: 'auto',
      width: '620px'
    });
  }

  back() {
    history.back();
  }
  openEditDialog(item: any) {
    this.dialog.open(AddPaymentsComponent, {
      data: item,
      height: 'auto',
      width: '650px',
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
