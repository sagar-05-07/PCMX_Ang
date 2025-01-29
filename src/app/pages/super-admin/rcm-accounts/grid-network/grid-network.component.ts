import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-network',
  templateUrl: './grid-network.component.html',
  styleUrl: './grid-network.component.scss',
})
export class GridNetworkComponent {
  constructor(public dialog: Dialog) {}
  roles = [
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
    { role: 'Law Firms' },
    { role: 'Providers' },

    { role: 'Whatsapp' },
    { role: 'Call' },
    { role: 'REG' },
    { role: 'Sync' },


    { role: 'Activity' },
  ];

  close() {
    this.dialog.closeAll();
  }
}
