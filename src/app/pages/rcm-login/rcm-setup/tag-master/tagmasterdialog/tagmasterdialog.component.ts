import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tagmasterdialog',
  templateUrl: './tagmasterdialog.component.html',
  styleUrl: './tagmasterdialog.component.scss'
})
export class TagmasterdialogComponent {

  constructor(
    public dialogRef: MatDialogRef<TagmasterdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}