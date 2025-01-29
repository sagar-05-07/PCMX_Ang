import { Component } from '@angular/core';

@Component({
  selector: 'app-visit-radar',
  templateUrl: './visit-radar.component.html',
  styleUrl: './visit-radar.component.scss'
})
export class VisitRadarComponent {

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
