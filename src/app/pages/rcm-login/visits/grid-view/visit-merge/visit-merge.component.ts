import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-visit-merge',
  templateUrl: './visit-merge.component.html',
  styleUrl: './visit-merge.component.scss'
})
export class VisitMergeComponent {

  activeSection: string = 'patient';


  constructor(
    public dialogRef: MatDialogRef<VisitMergeComponent>,
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