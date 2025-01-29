import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-law-add-patient',
  templateUrl: './law-add-patient.component.html',
  styleUrl: './law-add-patient.component.scss'
})
export class LawAddPatientComponent {
  constructor(
    public dialogRef: MatDialogRef<LawAddPatientComponent>,
    @Inject(MAT_DIALOG_DATA) public account: any) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}
