import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-claims',
  templateUrl: './add-claims.component.html',
  styleUrl: './add-claims.component.scss'
})
export class AddClaimsComponent {

  constructor(
    public dialogRef: MatDialogRef<AddClaimsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
