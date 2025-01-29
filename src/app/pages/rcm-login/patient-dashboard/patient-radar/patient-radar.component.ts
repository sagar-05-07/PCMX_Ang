import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-radar',
  templateUrl: './patient-radar.component.html',
  styleUrl: './patient-radar.component.scss'
})
export class PatientRadarComponent {

  selectedTab: 'overview' | 'moreInfo' | 'resolve' | 'specialties' = 'overview';
  selectTab(tab: 'overview' | 'moreInfo' | 'resolve' | 'specialties') {
    this.selectedTab = tab;
  }

  addRow() {
    this.rows.push({ category: '', specialty: '', subSpecialty: '' });
  }

  rows: any[] = [
    { category: 'Medical', specialty: 'Primary Care', subSpecialty: 'OBGYN' },
    { category: 'Surgery/Procedures', specialty: 'General', subSpecialty: '' }
  ];


}
