import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-funds-perspective',
  templateUrl: './funds-perspective.component.html',
  styleUrl: './funds-perspective.component.scss'
})
export class FundsPerspectiveComponent {



  roles = [
    //{ role: 'Patient Intake' },
    //{ role: 'Liaisons' },
    //{ role: 'Case Managers' },
    //{ role: 'Authorization' },
   // { role: 'Scheduling' },
    // { role: 'Patient Care' },
    //{ role: 'Claims' },
    { role: 'Funding' },
    //{ role: 'Collection' },
    //{ role: 'Leadership' },
    //{ role: 'Marketing' },
  ];

  isExpanded = false;
  displayedRoles = this.roles;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<FundsPerspectiveComponent>
  ) { }



  close() {
    this.dialogRef.close();
  }
}


