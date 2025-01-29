import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cases-merge',
  templateUrl: './cases-merge.component.html',
  styleUrl: './cases-merge.component.scss'
})
export class CasesMergeComponent {

  activeSection: string = 'patient';


  constructor(
    public dialogRef: MatDialogRef<CasesMergeComponent>,
    @Inject(MAT_DIALOG_DATA) public account: any) { }

  ngOnInit(): void {
  }

  roleDetails: Array<any> = [
    { Id: "10929" }, { Id: "10930" }, { Id: "10931" }, { Id: "10932" }, { Id: "10933" },
  ];

  setActiveSection(section: string): void {
    this.activeSection = section;
  }

  close() {
    this.dialogRef.close();
  }
}