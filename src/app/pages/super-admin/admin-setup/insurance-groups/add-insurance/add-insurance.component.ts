import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-insurance',
  templateUrl: './add-insurance.component.html',
  styleUrl: './add-insurance.component.scss'
})
export class AddInsuranceComponent {

  userForm: any;
  showDialog = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddInsuranceComponent>
  ) {}

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }
}
