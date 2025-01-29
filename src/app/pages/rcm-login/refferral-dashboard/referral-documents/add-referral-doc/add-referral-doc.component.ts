import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-referral-doc',
  templateUrl: './add-referral-doc.component.html',
  styleUrl: './add-referral-doc.component.scss'
})
export class AddReferralDocComponent {

  constructor(
    public dialogRef: MatDialogRef<AddReferralDocComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}
