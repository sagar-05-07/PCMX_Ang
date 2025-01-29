import { Component } from '@angular/core';

@Component({
  selector: 'app-re-pending',
  templateUrl: './re-pending.component.html',
  styleUrl: './re-pending.component.scss'
})
export class RePendingComponent {

  buttons: string[] = ['PFD (3)', 'STRATFORD (7)', 'ADHS+ (11)', 'NTBC (4)'];
  selectedButton: number = 0; // Default to the first button

  selectButton(index: number): void {
    this.selectedButton = index;
  }

  records = [
    {
      batchCode: 'BC001',
      paidDate: '2024-11-01',
      funded: 25000.75,
      payableToday: 15000.00,
      interestAccrued: 500.50
    },
    {
      batchCode: 'BC002',
      paidDate: '2024-11-02',
      funded: 30000.00,
      payableToday: 20000.00,
      interestAccrued: 750.00
    },
    {
      batchCode: 'BC003',
      paidDate: '2024-11-03',
      funded: 18000.00,
      payableToday: 12000.00,
      interestAccrued: 300.25
    }
  ];
}
