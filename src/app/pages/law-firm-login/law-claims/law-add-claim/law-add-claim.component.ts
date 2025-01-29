import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-law-add-claim',
  templateUrl: './law-add-claim.component.html',
  styleUrl: './law-add-claim.component.scss'
})
export class LawAddClaimComponent {

  constructor(
    public dialogRef: MatDialogRef<LawAddClaimComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}

