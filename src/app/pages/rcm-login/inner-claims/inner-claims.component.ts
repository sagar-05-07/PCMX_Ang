import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-inner-claims',
  templateUrl: './inner-claims.component.html',
  styleUrl: './inner-claims.component.scss'
})
export class InnerClaimsComponent {

  public currentPage = 0;
  public totalSize = 0;
  pageSize: 0;
  todayDate = new Date();

  constructor(
    public dialog: MatDialog,
    public _location: Location
  ) { }

  ngOnInt() { }

  back() {
    this._location.back();
  }

  rows = [
    {
      claimsId: 12345,
      patientId: 98765124,
      patientName: 'John Doe',
      claimStatus: 'Scheduled', // This will be a dropdown in the table
      finance: true, // mat-checkbox value (true means checked)
      estimate: 1500,
      deposit: 500,
      negotiatedAmount: 1000,
      negotiationDate: new Date(), // Today's date
      purchaseAmount: 1200,
      paidAmount: 1300,
      paymentDate: new Date(), // Today's date
      paymentReference: 'REF12345',
      visitReference: 'VST123',
      submittedBy: 'Admin',
      service: 'Insurance',
      serviceType: 'Surgery',
      serviceDate: new Date(), // Today's date
      dateOfInjury: new Date(), // Today's date
      notes: 'Claim is under review'
    },
    {
      claimsId: 67890,
      patientId: 12312456,
      patientName: 'Jane Smith',
      claimStatus: 'Completed',
      finance: false,
      estimate: 2000,
      deposit: 1500,
      negotiatedAmount: 1800,
      negotiationDate: new Date('2024-10-01'),
      purchaseAmount: 1900,
      paidAmount: 2000,
      paymentDate: new Date('2024-10-10'),
      paymentReference: 'REF67890',
      visitReference: 'VST678',
      submittedBy: 'Nurse A',
      service: 'Medical',
      serviceType: 'Consultation',
      serviceDate: new Date('2024-09-15'),
      dateOfInjury: new Date('2024-09-10'),
      notes: 'No issues with the claim.'
    },
    {
      claimsId: 12345,
      patientId: 98427654,
      patientName: 'John Doe',
      claimStatus: 'Scheduled', // This will be a dropdown in the table
      finance: true, // mat-checkbox value (true means checked)
      estimate: 1500,
      deposit: 500,
      negotiatedAmount: 1000,
      negotiationDate: new Date(), // Today's date
      purchaseAmount: 1200,
      paidAmount: 1300,
      paymentDate: new Date(), // Today's date
      paymentReference: 'REF12345',
      visitReference: 'VST123',
      submittedBy: 'Admin',
      service: 'Insurance',
      serviceType: 'Surgery',
      serviceDate: new Date(), // Today's date
      dateOfInjury: new Date(), // Today's date
      notes: 'Claim is under review'
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

  openEditDialog(item: any) {
    // this.dialog.open(AddClaimsComponent, {
    //   data: item,
    //   height: 'auto',
    //   width: '1000px'
    // });
  }

  notesDialog(item: any) {
    // this.dialog.open(NotesComponent, {
    //   data: item,
    //   height: 'auto',
    //   width: '520px'
    // });
  }

  openMerge() {
    // this.dialog.open(ClaimsMergeComponent, {
    //   width: '700px',
    //   height: 'auto',
    // });
  }

  openpermissiondialog() { }

}
