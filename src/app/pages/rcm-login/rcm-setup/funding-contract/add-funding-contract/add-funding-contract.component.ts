import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-funding-contract',
  templateUrl: './add-funding-contract.component.html',
  styleUrl: './add-funding-contract.component.scss'
})
export class AddFundingContractComponent {

  constructor(
    public dialogRef: MatDialogRef<AddFundingContractComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}