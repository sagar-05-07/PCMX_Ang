import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-patient-pop',
  templateUrl: './patient-pop.component.html',
  styleUrl: './patient-pop.component.scss'
})
export class PatientPopComponent {

  activeSection: string = 'patient';
  public currentPage = 0;
  public totalSize = 0;
  // account: boolean = false;  // Change this value to see "Save" or "Update"
  isDisabled: boolean = true;

  users = [{ type: "Document check", subject: "" }, { type: "Document check 2", subject: "" }]

  constructor(
    public dialogRef: MatDialogRef<PatientPopComponent>,
    @Inject(MAT_DIALOG_DATA) public account: any) { }

  ngOnInit(): void {
  }

  text: string = ''; // Bind this variable to the editor
  quillConfig = {
    toolbar: [
      ['bold', 'italic', 'underline'], // Formatting options
      [{ list: 'ordered' }, { list: 'bullet' }], // Lists
      ['clean'] // Clear formatting
    ]
  };

  setActiveSection(section: string): void {
    this.activeSection = section;
  }

  addRow() {
    this.rows.push({ referral: 'Referral To', specialty: '', subSpecialty: '' });
  }

  rows: any[] = [
    { referral: 'Referral From', specialty: 'Primary Care', subSpecialty: 'OBGYN' },
    { referral: 'Referral To', specialty: 'General', subSpecialty: '' }
  ];

  close() {
    this.dialogRef.close();
  }
}
