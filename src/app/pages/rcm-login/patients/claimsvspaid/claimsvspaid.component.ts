import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-claimsvspaid',
  templateUrl: './claimsvspaid.component.html',
  styleUrl: './claimsvspaid.component.scss'
})
export class ClaimsvspaidComponent {

   constructor(public dialogRef: MatDialogRef<ClaimsvspaidComponent>) {}
  
    close() {
      this.dialogRef.close();
    }
  
    displayedColumns: string[] = ['workList', 'volume'];
    dataSource = [
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
  
}
