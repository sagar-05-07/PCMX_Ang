import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-doc-type',
  templateUrl: './add-doc-type.component.html',
  styleUrl: './add-doc-type.component.scss'
})
export class AddDocTypeComponent {

  constructor(
    public dialogRef: MatDialogRef<AddDocTypeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}