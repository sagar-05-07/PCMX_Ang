import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-law-add-referral',
  templateUrl: './law-add-referral.component.html',
  styleUrl: './law-add-referral.component.scss'
})
export class LawAddReferralComponent {

  public currentPage = 0;
  public totalSize = 0;
  // close() { }

  users = [{ type: "Document check", subject: "" }, { type: "Document check 2", subject: "" }]

  constructor(
    public dialogRef: MatDialogRef<LawAddReferralComponent>,
    @Inject(MAT_DIALOG_DATA) public account: any) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}
