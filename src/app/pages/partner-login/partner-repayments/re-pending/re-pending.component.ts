import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotesComponent } from 'src/app/pages/rcm-login/claims/notes/notes.component';

@Component({
  selector: 'app-re-pending',
  templateUrl: './re-pending.component.html',
  styleUrl: './re-pending.component.scss'
})
export class RePendingComponent {

  buttons: string[] = ['PFD (3)', 'STRATFORD (7)', 'ADHS+ (11)', 'NTBC (4)'];
  selectedButton: number = 0; // Default to the first button

  constructor(public dialog: MatDialog) { }

  selectButton(index: number): void {
    this.selectedButton = index;
  }

  notesDialog(item: any) {
    this.dialog.open(NotesComponent, {
      data: item,
      height: 'auto',
      width: '520px'
    });
  }

  records = [
    {
      batchCode: 'BC001',
      paidDate: '2024-11-01',
      funded: 25000.75,
      payableToday: 15000.00,
      interestAccrued: 500.50,
      invoiceCount: 50
    },
    {
      batchCode: 'BC002',
      paidDate: '2024-11-02',
      funded: 30000.00,
      payableToday: 20000.00,
      interestAccrued: 750.00,
      invoiceCount: 60
    },
    {
      batchCode: 'BC003',
      paidDate: '2024-11-03',
      funded: 18000.00,
      payableToday: 12000.00,
      interestAccrued: 300.25,
      invoiceCount: 50
    }
  ];
}
