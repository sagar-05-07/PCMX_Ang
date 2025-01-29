import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-lawfirm-attys',
  templateUrl: './lawfirm-attys.component.html',
  styleUrl: './lawfirm-attys.component.scss'
})
export class LawfirmAttysComponent {

  roles = [
    { role: '	Ruy Mireles' },
    { role: 'Steven Buitron' },
    { role: 'Karen R. Morgan' },
    { role: 'Miguel Dilley' },
    { role: 'Reed Allmand	' },
    { role: 'Rick Cofer' },
    { role: 'Randy Sorrels' },
    { role: 'Donivan Flowers' },
    { role: 'Tracia Lee' },
    { role: 'Natalie Barletta' },
    { role: 'Louis T. Wierenga' },
    { role: 'Elisa Reiter' },



  ];

  isExpanded = false;
  displayedRoles = this.roles;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<LawfirmAttysComponent>
  ) { }



  close() {
    this.dialogRef.close();
  }
}


