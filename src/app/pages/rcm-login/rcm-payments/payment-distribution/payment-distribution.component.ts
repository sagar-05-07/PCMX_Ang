import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-payment-distribution',
  templateUrl: './payment-distribution.component.html',
  styleUrl: './payment-distribution.component.scss'
})
export class PaymentDistributionComponent {

  constructor(
    public dialogRef: MatDialogRef<PaymentDistributionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  users = [
    { transactionDate: '12-Dec-2024', paymentType: 'Deposit', paymentAmount: 123.45 },
    { transactionDate: '10-Dec-2024', paymentType: 'Interim', paymentAmount: 67.89 },
    { transactionDate: '8-Dec-2024', paymentType: 'Settlement', paymentAmount: 250.00 }
  ];

}
