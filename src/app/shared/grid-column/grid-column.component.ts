import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-grid-column',
  templateUrl: './grid-column.component.html',
  styleUrls: ['./grid-column.component.scss']
})
export class GridColumnComponent {

  savedHeaders: number[] = [];
  headers: Array<{ [key: string]: any }> = []; // Using a plain object structure
  screenName: string = '';
  checkbox: boolean = true;
  checkboxfalse: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<GridColumnComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { headers: Array<{ [key: string]: any }>; screenName: string }
  ) { }

  ngOnInit() {
    // Safely access the data properties
    this.headers = this.data?.headers || [];
    this.screenName = this.data?.screenName || '';

    // Retrieve saved headers from localStorage
    const savedData = localStorage.getItem(this.screenName);
    if (savedData) {
      this.savedHeaders = JSON.parse(savedData) as number[];
      this.headers.forEach((header, index) => {
        header.IsSelected = this.savedHeaders.includes(index);
      });
    } else {
      this.headers.forEach(header => {
        header.IsSelected = true;
      });
    }
  }

  save() {
    // Update savedHeaders based on the selection
    this.savedHeaders = this.headers
      .map((header, index) => (header.IsSelected ? index : null))
      .filter(index => index !== null) as number[];

    // Save updated headers to localStorage
    localStorage.setItem(this.screenName, JSON.stringify(this.savedHeaders));

    // Close the dialog
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}
