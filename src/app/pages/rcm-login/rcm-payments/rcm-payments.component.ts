import { Component } from '@angular/core';
import { NotesComponent } from '../claims/notes/notes.component';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PaymentDistributionComponent } from './payment-distribution/payment-distribution.component';
import { AddPaymentsComponent } from './add-payments/add-payments.component';
import { PerspectiveFilterComponent } from '../patients/perspective-filter/perspective-filter.component';
import { PerspectivesComponent } from 'src/app/shared/perspectives/perspectives.component';
import { FilterSaveComponent } from 'src/app/shared/filter-save/filter-save.component';
import { PaymentsPerspectivesComponent } from './payments-perspectives/payments-perspectives.component';

@Component({
  selector: 'app-rcm-payments',
  templateUrl: './rcm-payments.component.html',
  styleUrl: './rcm-payments.component.scss'
})
export class RcmPaymentsComponent {

  filterToggle2: boolean = false;
  public currentPage = 0;
  public totalSize = 0;
  pageSize: 0;
  filterForm: FormGroup;
  filterToggle: boolean = false;

  constructor(public dialog: MatDialog) { }


  isNavOpen = true; // Start with the navigation open

  toggleNav() {
    this.isNavOpen = !this.isNavOpen; // Toggle between open and closed states
  }

  ngOnInt() { }


     saveFilters() {
        this.dialog.open(FilterSaveComponent, {
          height: 'auto',
          width: '450px'
        });
      }


  perspectives() {
    this.dialog.open(PaymentsPerspectivesComponent, {
      height: 'auto',
      width: '450px'
    });
  }

  perspectiveFilter(event: MouseEvent): void {
    const buttonRect = (event.target as HTMLElement).getBoundingClientRect();
    const marginRight = -400; // Adjust this value as needed for the left margin
    const dialogPosition = {
      top: `${buttonRect.bottom}px`,
      left: `${buttonRect.left + marginRight}px`, // Add margin to the left
    };

    this.dialog.open(PerspectiveFilterComponent, {
      height: 'auto',
      width: '450px',
      position: dialogPosition,
    });
  }
  selectedIcon: number | null = 4;

  icons = [
    { name: 'account_box', tooltip: 'Liaison Perspective' },
    { name: 'group', tooltip: 'Case Manager Perspective' },
    { name: 'receipt_long', tooltip: 'Claim Perspective' },
    { name: 'attach_money', tooltip: 'Funds Perspective' },
    { name: 'collections', tooltip: 'Collection Perspective' },
    { name: 'business', tooltip: 'Leadership Perspective' },
    { name: '', tooltip: '' },
  ];

  selectIcon(index: number): void {
    this.selectedIcon = index; // Set the clicked icon as selected
  }


  patientData = [
    { description: 'Total Referrals', count: '120,201' },
    { description: 'Referrals this Year', count: '56,987' },
    { description: 'Referral Last Year', count: '42,987' },
    { description: 'Referral this Quarter', count: '15,009' }
  ];

  patientData2 = [
    { description: 'Referral this month', count: '14,985' },
    { description: 'Referral last month', count: '6,521' },
    { description: 'Pending Verification', count: '5,621' },
    { description: 'Pending Authorization', count: '98' }
  ];

  logData = [
    { description: 'Referral this week', count: '74' },
    { description: 'Logged this month', count: '49' },
    { description: 'Delayed', count: '48', style: 'red' },
    { description: 'Denied', count: '268', style: 'red' }
  ];
  // for Collection
  collectionData = [
    { description: 'New This Month', count: '120,201' },
    { description: 'Settled This Month', count: '56,987' },
    { description: 'Paid This Month', count: '42,987' },
  ];

  collectionData2 = [
    { description: 'Overdue Claims', count: '14,985' },
    { description: 'New This Year', count: '6,521' },
    { description: 'Settled This Year', count: '5,621' },
  ];

  collectionLogData = [
    { description: 'Paid This Year ', count: '74' },
    { description: 'Delayed', count: '48', style: 'red' },
    { description: 'Denied', count: '268', style: 'red' }
  ];

  Liaisons = [
    { text: 'Referrals this year', number: '421,998' },
    { text: 'Referrals this quarter', number: '98,909' },
    { text: 'Referrals this month', number: '74,786' },
    { text: 'Pending Verification', number: '12,871' },
    { text: 'Pending Authorization', number: '10,981' },
    { text: 'SCH & Pending Auth', number: '32,987' },
  ];

  getBackgroundColor(index: number): string {
    const colors = ['#D9D9D9', '#FFD2B2', '#A8E5C1', '#C4C2FF', '#B3E3F6', '#E0DBFF'];
    return colors[index] || '#FFFFFF';
  }


  users = [
    {
      id: 67976545,
      paymentDate: new Date(2024, 11, 15),  // 15-Dec-2024
      amount: 5000,
      paymentMode: 'Credit Card',
      paymentRef: 12345678,
      patientId: 10001234,
      caseId: 20001234,
      claimId: 34,
      paymentType: 'Interim',
      remarks: 'Processed successfully'
    },
    {
      id: 67976546,
      paymentDate: new Date(2024, 11, 16),  // 16-Dec-2024
      amount: 3500,
      paymentMode: 'Cash',
      paymentRef: 23456789,
      patientId: 10005678,
      caseId: 20005678,
      claimId: 8,
      paymentType: 'Deposit',
      remarks: 'Pending confirmation'
    },
    {
      id: 67976547,
      paymentDate: new Date(2024, 11, 17),  // 17-Dec-2024
      amount: 7500,
      paymentMode: 'Bank Transfer',
      paymentRef: 34567890,
      patientId: 10007890,
      caseId: 20007890,
      claimId: 9,
      paymentType: 'Settlement',
      remarks: 'Awaiting approval'
    }
  ];


  notesDialog(item: any) {
    this.dialog.open(NotesComponent, {
      data: item,
      height: 'auto',
      width: '520px'
    });
  }

  openDistribution() {
    this.dialog.open(PaymentDistributionComponent, {
      height: 'auto',
      width: '620px'
    });
  }

  back() {
    history.back();
  }
  openEditDialog(item: any) {
    this.dialog.open(AddPaymentsComponent, {
      data: item,
      height: 'auto',
      width: '650px',
    });
  }

  openpermissiondialog() { }

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
