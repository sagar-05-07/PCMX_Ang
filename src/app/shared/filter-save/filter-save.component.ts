import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-save',
  templateUrl: './filter-save.component.html',
  styleUrl: './filter-save.component.scss'
})
export class FilterSaveComponent {

  constructor(
    public dialogRef: MatDialogRef<FilterSaveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}