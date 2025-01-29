import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admn-provider-specialty',
  templateUrl: './admn-provider-specialty.component.html',
  styleUrl: './admn-provider-specialty.component.scss'
})
export class AdmnProviderSpecialtyComponent {

  selectedTab: 'overview' | 'moreInfo' | 'resolve' | 'specialties' = 'overview';
  selectTab(tab: 'overview' | 'moreInfo' | 'resolve' | 'specialties') {
    this.selectedTab = tab;
  }

  constructor(
    // @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AdmnProviderSpecialtyComponent>
  ) { }

  addRow() {
    this.rows.push({ category: '', specialty: '', subSpecialty: '' });
  }

  rows: any[] = [
    { category: 'Medical', specialty: 'Primary Care', subSpecialty: 'OBGYN' },
    { category: 'Surgery/Procedures', specialty: 'General', subSpecialty: '' }
  ];

  close() {
    this.dialogRef.close();
  }
}
