import { Component } from '@angular/core';

@Component({
  selector: 'app-claims-overview',
  templateUrl: './claims-overview.component.html',
  styleUrl: './claims-overview.component.scss'
})
export class ClaimsOverviewComponent {

  selectedTab: 'overview' | 'moreInfo' | 'resolve' | 'specialties' | 'case-info' | 'visit-info' = 'overview';
  selectTab(tab: 'overview' | 'moreInfo' | 'resolve' | 'specialties' | 'case-info' | 'visit-info') {
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
