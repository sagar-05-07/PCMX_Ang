import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-visitsvsclaims',
  templateUrl: './visitsvsclaims.component.html',
  styleUrl: './visitsvsclaims.component.scss'
})
export class VisitsvsclaimsComponent {

  constructor(public dialogRef: MatDialogRef<VisitsvsclaimsComponent>) {}

  close() {
    this.dialogRef.close();
  }
  
  displayedColumns: string[] = ['workList', 'volume'];
  dataSource = [
    { workList: 'Total SCH Visits', volume: 190234 },
    { workList: 'No Show', volume: 20200 },
    { workList: 'Cancelled', volume: 9201 },
    { workList: 'COM Insurance', volume: 12001 },
    { workList: 'Workers Comp', volume: 2908 },
    { workList: 'Self Pay', volume: 7780 },
    { workList: 'Total Claims', volume: 130001 },
    { workList: 'Claims Per SCH Visits', volume: 0.68 },
  ];

}
