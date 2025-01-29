import { Component } from '@angular/core';

@Component({
  selector: 'app-case-funds',
  templateUrl: './case-funds.component.html',
  styleUrl: './case-funds.component.scss'
})
export class CaseFundsComponent {

  public currentPage = 0;
  public totalSize = 0;
  pageSize: 0;

  users = [
    {
      dateReceived: '2025-01-10',
      lenderName: 'ABC Finance',
      dateRequested: '2025-01-05',
      claimId: '43212456',
      visitId: '76187654',
      invoiceReference: 'INV001234',
      amountReceived: '$ 9895,000',
      interestAccrued: '$ 987250',
    },
    {
      dateReceived: '2025-01-12',
      lenderName: 'XYZ Lending',
      dateRequested: '2025-01-08',
      claimId: '21789101',
      visitId: '12456789',
      invoiceReference: 'INV005678',
      amountReceived: '$ 365,000',
      interestAccrued: '$ 198150',
    },
    {
      dateReceived: '2025-01-15',
      lenderName: 'Global Funds',
      dateRequested: '2025-01-10',
      claimId: '12567890',
      visitId: '98123456',
      invoiceReference: 'INV009876',
      amountReceived: '$ 712,500',
      interestAccrued: '$ 32575',
    },
    {
      dateReceived: '2025-01-12',
      lenderName: 'XYZ Lending',
      dateRequested: '2025-01-08',
      claimId: '21789101',
      visitId: '12456789',
      invoiceReference: 'INV005678',
      amountReceived: '$ 365,000',
      interestAccrued: '$ 198150',
    },
    {
      dateReceived: '2025-01-15',
      lenderName: 'Global Funds',
      dateRequested: '2025-01-10',
      claimId: '12567890',
      visitId: '98123456',
      invoiceReference: 'INV009876',
      amountReceived: '$ 712,500',
      interestAccrued: '$ 32575',
    },
  ];

}
