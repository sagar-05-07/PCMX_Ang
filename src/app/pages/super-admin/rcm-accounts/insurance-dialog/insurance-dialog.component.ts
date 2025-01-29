import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-insurance-dialog',
  templateUrl: './insurance-dialog.component.html',
  styleUrl: './insurance-dialog.component.scss'
})
export class InsuranceDialogComponent {

  roles = [
    { role: 'Nationwide Insurance' },
    { role: 'American Family Insurance' },
    { role: 'Allstate' },
    { role: 'Auto-Owners Insurance' },
    { role: 'Allianz Life' },
    { role: 'Berkshire Hathaway' },
    { role: 'Erie Insurance' },
    { role: 'Cigna' },
    { role: 'Farmers Insurance' },
    { role: 'State Farm' },
    { role: 'AIG' },
    { role: 'New York Life' },
    { role: 'Pacific Life' },

    { role: 'Liberty Mutual' },
    { role: 'Fairfax Financial' },
    { role: 'Acuity Insurance' },
    { role: 'MetLife' },
    { role: 'AIG' },
    { role: 'New York Life' },
    { role: 'Pacific Life' },

    { role: 'HCC Insurance Holdings' },
    { role: 'Sentry Insurance' },
    { role: 'Sun Life Financial' },
    { role: 'Transamerica Corporation' },

  ];

  isExpanded = false;
  displayedRoles = this.roles; 


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<InsuranceDialogComponent>
  ) { }

  

  close() {
    this.dialogRef.close();
  }
}
