import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-referrals',
  templateUrl: './add-referrals.component.html',
  styleUrl: './add-referrals.component.scss'
})
export class AddReferralsComponent {

  public currentPage = 0;
  public totalSize = 0;
  // close() { }

  users = [{ type: "Document check", subject: "" }, { type: "Document check 2", subject: "" }]

  constructor(
    public dialogRef: MatDialogRef<AddReferralsComponent>,
    @Inject(MAT_DIALOG_DATA) public account: any) { }

  ngOnInit(): void {
  }

  addRow() {
    this.rows.push({ referral: 'Referral To', specialty: '', subSpecialty: '' });
  }

  rows: any[] = [
    { referral: 'Referral From', specialty: 'Primary Care', subSpecialty: 'OBGYN' },
    { referral: 'Referral To', specialty: 'General', subSpecialty: '' }
  ];


  close() {
    this.dialogRef.close();
  }
}