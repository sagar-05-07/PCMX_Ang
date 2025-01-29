import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-lookup-dialog',
  templateUrl: './lookup-dialog.component.html',
  styleUrl: './lookup-dialog.component.scss'
})
export class LookupDialogComponent {
  userForm: any;
  showDialog = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<LookupDialogComponent>
  ) {}

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }
}
