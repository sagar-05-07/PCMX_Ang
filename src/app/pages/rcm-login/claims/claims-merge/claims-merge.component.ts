import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-claims-merge',
  templateUrl: './claims-merge.component.html',
  styleUrl: './claims-merge.component.scss'
})
export class ClaimsMergeComponent {

  activeSection: string = 'patient';


  constructor(
    public dialogRef: MatDialogRef<ClaimsMergeComponent>,
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