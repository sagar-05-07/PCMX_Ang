import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-referralvsvisits',
  templateUrl: './referralvsvisits.component.html',
  styleUrl: './referralvsvisits.component.scss'
})
export class ReferralvsvisitsComponent {

  constructor(public dialogRef: MatDialogRef<ReferralvsvisitsComponent>) {}

  close() {
    this.dialogRef.close();
  }

  displayedColumns: string[] = ['workList', 'volume'];
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
  ];

}
