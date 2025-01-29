import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-law-case',
  templateUrl: './add-law-case.component.html',
  styleUrl: './add-law-case.component.scss'
})
export class AddLawCaseComponent {

  selectedLawFirm = 'Peterson & Associates';
  public currentPage = 0;
  public totalSize = 0;
  // close() { }

  users = [{ type: "Document check", subject: "" }, { type: "Document check 2", subject: "" }]

  constructor(
    public dialogRef: MatDialogRef<AddLawCaseComponent>,
    @Inject(MAT_DIALOG_DATA) public account: any) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}

