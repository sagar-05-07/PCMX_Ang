import { Component } from '@angular/core';

@Component({
  selector: 'app-case-radar',
  templateUrl: './case-radar.component.html',
  styleUrl: './case-radar.component.scss'
})
export class CaseRadarComponent {

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

  selectedDoctor: string = 'Dr. Bashir Ahmad';

  selectDoctor(doctor: string): void {
    this.selectedDoctor = doctor;
  }


}
