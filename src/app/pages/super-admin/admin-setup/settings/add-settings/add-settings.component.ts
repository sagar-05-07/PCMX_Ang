import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-settings',
  templateUrl: './add-settings.component.html',
  styleUrl: './add-settings.component.scss'
})
export class AddSettingsComponent {
  userForm: any;
  showDialog = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddSettingsComponent>
  ) {}

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }
}
