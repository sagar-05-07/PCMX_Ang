import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-funding-partner',
  templateUrl: './add-funding-partner.component.html',
  styleUrl: './add-funding-partner.component.scss'
})
export class AddFundingPartnerComponent {

  constructor(
    public dialogRef: MatDialogRef<AddFundingPartnerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}