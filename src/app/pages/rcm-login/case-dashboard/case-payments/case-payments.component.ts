import { Component } from '@angular/core';

@Component({
  selector: 'app-case-payments',
  templateUrl: './case-payments.component.html',
  styleUrl: './case-payments.component.scss'
})
export class CasePaymentsComponent {

  public currentPage = 0;
  public totalSize = 0;
  pageSize: 0;

  users = [
    {
      receivedDate: '2025-01-10',
      lawFirmName: 'Legal Experts LLC',
      claimId: '12123456',
      visitId: '78987654',
      invoiceReference: 'INV001234',
      amountReceived: '$598,000',
      paymentMode: 'Bank Transfer',
      paymentReference: 'REF12345',
      paybackStatus: 'Done',
    },
    {
      receivedDate: '2025-01-12',
      lawFirmName: 'Justice Partners',
      claimId: '98789101',
      visitId: '12456789',
      invoiceReference: 'INV005678',
      amountReceived: '$321,000',
      paymentMode: 'Credit Card',
      paymentReference: 'REF67890',
      paybackStatus: 'Pending',
    },
    {
      receivedDate: '2025-01-15',
      lawFirmName: 'Global Law Associates',
      claimId: '12567890',
      visitId: '98123456',
      invoiceReference: 'INV009876',
      amountReceived: '$712,500',
      paymentMode: 'PayPal',
      paymentReference: 'REF13579',
      paybackStatus: 'Done',
    },
  ];

  scrollGrid(side: 'left' | 'right') {
    const ele = document.getElementById('grid-table-container');
    const scrollAmount = 210; // Adjust this value as needed

    if (ele) {
      // Check if ele is not null
      if (side === 'right') {
        ele.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      } else {
        ele.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    }
  }


}
