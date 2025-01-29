import { Component } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent {

  buttons: string[] = ['PFD (3)', 'STRATFORD (7)', 'ADHS+ (11)', 'NTBC (4)'];
  selectedButton: number = 0; // Default to the first button

  selectButton(index: number): void {
    this.selectedButton = index;
  }

  records = [
    {
      batchCode: 'BC001',
      submittedDate: '29-Nov-2024',
      paidDate: '30-Nov-2024',
      requestedDate: '28-Nov-2024',
      paid: 15000,
      invoiceCount: 58,
    },
    {
      batchCode: 'BC002',
      submittedDate: '28-Nov-2024',
      paidDate: '29-Nov-2024',
      requestedDate: '27-Nov-2024',
      paid: 20000,
      invoiceCount: 35,
    },
    {
      batchCode: 'BC003',
      submittedDate: '27-Nov-2024',
      paidDate: '28-Nov-2024',
      requestedDate: '26-Nov-2024',
      paid: 10000,
      invoiceCount: 40,
    },
    {
      batchCode: 'BC004',
      submittedDate: '26-Nov-2024',
      paidDate: '27-Nov-2024',
      requestedDate: '25-Nov-2024',
      paid: 12000,
      invoiceCount: 69,
    },
  ];
}
