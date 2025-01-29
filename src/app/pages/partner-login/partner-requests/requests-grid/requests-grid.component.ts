import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-requests-grid',
  templateUrl: './requests-grid.component.html',
  styleUrl: './requests-grid.component.scss'
})
export class RequestsGridComponent {

 constructor(public dialog: Dialog) {}
  roles = [
    { role: 'REQ ID' },
    { role: 'Patient Name' },
    { role: 'Provider' },
    { role: 'Custodian' },
    { role: 'Purpose' },
    { role: 'Status' },
    { role: 'Alerts' },
    { role: 'Provider Type' },
    { role: 'City' },
    { role: 'NPI' },
    { role: 'State' },
    { role: 'Provider Type' },
    { role: 'Last Payment' },
    { role: 'Patient DOB' },
    
    { role: 'Options' },
    { role: 'View Form' },
    { role: 'Fees' },
  ];

  close() {
    this.dialog.closeAll();
  }
}

