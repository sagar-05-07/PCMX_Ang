import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-provider-perspectives',
  templateUrl: './provider-perspectives.component.html',
  styleUrl: './provider-perspectives.component.scss'
})
export class ProviderPerspectivesComponent {

  roles = [
    { role: 'Patient Intake' },
    { role: 'Liaisons' },
    { role: 'Case Managers' },
    { role: 'Authorization' },
    { role: 'Scheduling' },
    { role: 'Patient Care' },
    { role: 'Claims' },
   // { role: 'Funding' },
    //{ role: 'Collection' },
    //{ role: 'Leadership' },
    { role: 'Marketing' },
  ];

  isExpanded = false;
  displayedRoles = this.roles;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ProviderPerspectivesComponent>
  ) { }



  close() {
    this.dialogRef.close();
  }
}


