//Created by vineeth kumar

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-claims-perspectives',
  templateUrl: './claims-perspectives.component.html',
  styleUrl: './claims-perspectives.component.scss'
})
export class ClaimsPerspectivesComponent {


  roles = [ 
    { role: 'Liaisons' },
    { role: 'Case Managers' },
    //{ role: 'Authorization' },
    { role: 'Scheduling' },
    // { role: 'Patient Care' },
    { role: 'Claims' },
    { role: 'Funding' },
    { role: 'Collection' },
    { role: 'Leadership' },
    //{ role: 'Marketing' },
  ];

  isExpanded = false;
  displayedRoles = this.roles;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ClaimsPerspectivesComponent>
  ) { }



  close() {
    this.dialogRef.close();
  }
}

