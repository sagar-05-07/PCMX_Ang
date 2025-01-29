import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-special-permission',
  templateUrl: './special-permission.component.html',
  styleUrl: './special-permission.component.scss'
})
export class SpecialPermissionComponent {

  roles = [
    { role: 'Assign Funding Partner to a Claim' },
    { role: 'Publish a Batch' },
    { role: 'Assign Liaisons to Case Managers' },
    { role: 'Access to Referral Dashboard' },
    { role: 'Access to Patient Form' },
    { role: 'Access to Visit Dashboard' },
  ];

  isExpanded = false;
  displayedRoles = this.roles;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SpecialPermissionComponent>
  ) { }



  close() {
    this.dialogRef.close();
  }
}

