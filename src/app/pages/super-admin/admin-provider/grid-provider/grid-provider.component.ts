import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-provider',
  templateUrl: './grid-provider.component.html',
  styleUrl: './grid-provider.component.scss',
})
export class GridProviderComponent {
  constructor(public dialog: Dialog) {}
  roles = [
    { role: 'Providers' },
    { role: 'Network' },
    { role: 'Reset' },
    { role: 'Phone' },
    { role: 'Insurance' },
    { role: 'Email' },
    { role: 'Locations' },
    { role: 'State' },
    { role: 'City' },
    { role: 'Paitents' },
    { role: 'Referrals' },
    { role: 'Visits' },
    { role: 'Specialties' },

    { role: 'Whatsapp' },
    { role: 'Call' },
    { role: 'REG' },
    { role: 'Sync' },

    { role: 'Status' },
  ];

  close() {
    this.dialog.closeAll();
  }
}
