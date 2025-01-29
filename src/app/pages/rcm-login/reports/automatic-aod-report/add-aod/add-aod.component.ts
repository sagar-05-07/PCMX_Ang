import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-aod',
  templateUrl: './add-aod.component.html',
  styleUrl: './add-aod.component.scss'
})
export class AddAodComponent {


  constructor(
    public dialogRef: MatDialogRef<AddAodComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}