import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-lawfirm',
  templateUrl: './grid-lawfirm.component.html',
  styleUrl: './grid-lawfirm.component.scss',
})
export class GridLawfirmComponent {
  constructor(public dialog: Dialog) {}
  roles = [
    { role: 'Law Firms' },
    { role: 'ATTYS' },
    { role: 'REG' },
    { role: 'Reset' },
    { role: 'Network' },
    { role: 'Phone' },
    { role: 'Email' },
    { role: 'State' },
    { role: 'City' },
    { role: 'Paitents' },
    { role: 'Referrals' },
    { role: 'Cases' },
    { role: 'Networks' },
    { role: 'Providers' },
    
    { role: 'Whatsapp' },
    { role: 'Status' },
  ];

  close() {
    this.dialog.closeAll();
  }
}
