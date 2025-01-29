import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-payments',
  templateUrl: './add-payments.component.html',
  styleUrl: './add-payments.component.scss'
})
export class AddPaymentsComponent {

  constructor(
    public dialogRef: MatDialogRef<AddPaymentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}