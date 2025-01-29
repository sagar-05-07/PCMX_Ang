import { Component } from '@angular/core';

@Component({
  selector: 'app-provider-radar',
  templateUrl: './provider-radar.component.html',
  styleUrl: './provider-radar.component.scss'
})
export class ProviderRadarComponent {

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

  insurance = [
    { name: 'Aetna', checked: true },
    { name: 'Blue Cross Blue Shield', checked: true },
    { name: 'Cigna Group', checked: true },
    { name: 'Superior HealthPlan', checked: true },
    { name: 'Amerigroup', checked: true },
    { name: 'Baylor Scott and White Health Plan', checked: true },
  ];


  insurances = [
    { name: 'Humana', checked: false },
    { name: 'Cigna', checked: false },
    { name: 'Kaiser Permanente', checked: false },
    { name: 'Molina Healthcare', checked: false },
    { name: 'Centene Corporation', checked: false },
    { name: 'Health Net', checked: false },

  ];



}
