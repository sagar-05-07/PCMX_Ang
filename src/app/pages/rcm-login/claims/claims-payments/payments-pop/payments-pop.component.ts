import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-payments-pop',
  templateUrl: './payments-pop.component.html',
  styleUrl: './payments-pop.component.scss'
})
export class PaymentsPopComponent {

  constructor(
    public dialogRef: MatDialogRef<PaymentsPopComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  users = [
    { transactionDate: '12-Dec-2024', paymentType: '78457958', paymentAmount: 123.45 },
    { transactionDate: '10-Dec-2024', paymentType: '56587945', paymentAmount: 67.89 },
    { transactionDate: '8-Dec-2024', paymentType: '21547895', paymentAmount: 250.00 }
  ];

}
