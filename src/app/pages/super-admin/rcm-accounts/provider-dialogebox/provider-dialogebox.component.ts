import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-provider-dialogebox',
  templateUrl: './provider-dialogebox.component.html',
  styleUrl: './provider-dialogebox.component.scss'
})
export class ProviderDialogeboxComponent {

  roles = [
    { role: 'Chris Waller	' },
    { role: 'Chunck James	' },
    { role: 'Catherina Jefferson	' },
    { role: 'Bennett Pugh	' },
    { role: 'Andrew	' },
    { role: 'John Russell	' },
    { role: 'William C.Bomer	' },
    { role: 'Chris Waller	' },


  ];

  isExpanded = false;
  displayedRoles = this.roles;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ProviderDialogeboxComponent>
  ) { }



  close() {
    this.dialogRef.close();
  }
}

