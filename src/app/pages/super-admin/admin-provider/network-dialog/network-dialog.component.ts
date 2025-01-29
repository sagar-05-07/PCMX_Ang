import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-network-dialog',
  templateUrl: './network-dialog.component.html',
  styleUrl: './network-dialog.component.scss'
})
export class NetworkDialogComponent {


  roles = [
    { role: 'Tenet Healthcare	' },
    { role: 'Baylor Scott & White Health	' },
    { role: 'Steward Health Care System	' },
    { role: 'CHRISTUS Health	' },
    { role: 'Texas Health Resources	' },
    { role: 'Oceans Healthcare	' },
    { role: 'Nutex Health	' },
    { role: 'Ascension Seton	' },


  ];

  isExpanded = false;
  displayedRoles = this.roles;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<NetworkDialogComponent>
  ) { }



  close() {
    this.dialogRef.close();
  }
}
