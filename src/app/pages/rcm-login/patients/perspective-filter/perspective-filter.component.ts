import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-perspective-filter',
  templateUrl: './perspective-filter.component.html',
  styleUrl: './perspective-filter.component.scss'
})
export class PerspectiveFilterComponent {

  constructor(
    public dialogRef: MatDialogRef<PerspectiveFilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}
