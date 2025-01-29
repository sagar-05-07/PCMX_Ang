import { Component } from '@angular/core';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrl: './pending.component.scss'
})
export class PendingComponent {


  buttons: string[] = ['PFD (3)', 'STRATFORD (7)', 'ADHS+ (11)', 'NTBC (4)'];
  selectedButton: number = 0; // Default to the first button

  selectButton(index: number): void {
    this.selectedButton = index;
  }

  records = [
    {
      batchCode: 'BC001',
      submissionDate: '29-Nov-2024',
      requestedFunds: 15000,
      invoiceCount: 50,
    },
    {
      batchCode: 'BC002',
      submissionDate: '28-Nov-2024',
      requestedFunds: 20000,
      invoiceCount: 87,
    },
    {
      batchCode: 'BC003',
      submissionDate: '27-Nov-2024',
      requestedFunds: 10000,
      invoiceCount: 49,
    },
    {
      batchCode: 'BC004',
      submissionDate: '26-Nov-2024',
      requestedFunds: 12000,
      invoiceCount: 68,
    },
  ];
}

