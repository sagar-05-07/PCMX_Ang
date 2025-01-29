import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-lawfirm-dialog',
  templateUrl: './admin-lawfirm-dialog.component.html',
  styleUrl: './admin-lawfirm-dialog.component.scss'
})
export class AdminLawfirmDialogComponent {

  roles = [
    { role: '	William J MCCarthy PLLC' },
    { role: 'Lopez Franco PLLC' },
    { role: 'Taylor Law Firm	' },
    { role: '	A.K Gardener Law' },
    { role: 'Abogada Parada	' },
    { role: 'Adame Garza	' },
    { role: 'Adibe Law Group	' },
    { role: 'Adley Law Firm	' },
    { role: 'Johnson Law Office	' },
    { role: 'The Afshar Law Firm	' },
    { role: 'Martinez & Associates	' },
    { role: 'Wilson Legal Group	' },
    { role: 'Taylor Law Firm	' },



  ];

  isExpanded = false;
  displayedRoles = this.roles;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AdminLawfirmDialogComponent>
  ) { }



  close() {
    this.dialogRef.close();
  }
}

