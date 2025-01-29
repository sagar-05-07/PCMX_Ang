import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-patients',
  templateUrl: './add-patients.component.html',
  styleUrl: './add-patients.component.scss'
})
export class AddPatientsComponent {

  activeSection: string = 'patient';
  public currentPage = 0;
  public totalSize = 0;

  users = [{ type: "Document check", subject: "" }, { type: "Document check 2", subject: "" }]

  constructor(
    public dialogRef: MatDialogRef<AddPatientsComponent>,
    @Inject(MAT_DIALOG_DATA) public account: any) { }

  ngOnInit(): void {
  }

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
  text: string = ''; // Bind this variable to the editor
  quillConfig = {
    toolbar: [
      ['bold', 'italic', 'underline'], // Formatting options
      [{ list: 'ordered' }, { list: 'bullet' }], // Lists
      ['clean'] // Clear formatting
    ]
  };

}
