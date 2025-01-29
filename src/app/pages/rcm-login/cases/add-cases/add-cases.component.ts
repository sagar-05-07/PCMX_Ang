import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-cases',
  templateUrl: './add-cases.component.html',
  styleUrl: './add-cases.component.scss'
})
export class AddCasesComponent {

  public currentPage = 0;
  public totalSize = 0;
  // close() { }

  users = [{ type: "Document check", subject: "" }, { type: "Document check 2", subject: "" }]

  constructor(
    public dialogRef: MatDialogRef<AddCasesComponent>,
    @Inject(MAT_DIALOG_DATA) public account: any) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}
