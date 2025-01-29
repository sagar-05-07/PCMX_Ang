import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inner-referrals',
  templateUrl: './inner-referrals.component.html',
  styleUrl: './inner-referrals.component.scss'
})
export class InnerReferralsComponent {


  public currentPage = 0;
  public totalSize = 0;
  pageSize: 0;

  constructor(
    public dialog: MatDialog,
    public router: Router,
    private _location: Location
  ) { }

  ngOnInit() { }

  isNavOpen = true; // Start with the navigation open

  toggleNav() {
    this.isNavOpen = !this.isNavOpen; // Toggle between open and closed states
  }

  back() {
    this._location.back();
  }

  openMerge() {
    // this.dialog.open(ReferralMergeComponent, {
    //   width: '700px',
    //   height: 'auto',
    // });
  }

  users = [
    {
      visits: '5',
      claims: '4',
      id: 1,
      status: 'New',
      referralId: '112345',
      patientName: 'John Doe',
      referralFrom: 'Dr. Smith',
      referralTo: 'Dr. Brown',
      specialty: 'Orthopedics',
      caseType: 'Personal Injury',
      lastUpdated: new Date(2024, 10, 15),
      created: new Date(2024, 10, 1),
      orderType: 'Clinical',
    },
    {
      visits: '5',
      claims: '8',
      id: 2,
      status: 'Verified',
      referralId: '167890',
      patientName: 'Jane Roe',
      referralFrom: 'Dr. Adams',
      referralTo: 'Dr. Lee',
      specialty: 'Neurology',
      caseType: 'Medical Malpractice',
      lastUpdated: new Date(2024, 10, 20),
      created: new Date(2024, 10, 10),
      orderType: 'Legal',
    },
    {
      visits: '5',
      claims: '2',
      id: 3,
      status: 'New',
      referralId: '111223',
      patientName: 'Alice Smith',
      referralFrom: 'Dr. Clark',
      referralTo: 'Dr. White',
      specialty: 'Pediatrics',
      caseType: 'Family Law',
      lastUpdated: new Date(2024, 10, 25),
      created: new Date(2024, 10, 15),
      orderType: 'Insurance',
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
    // this.dialog.open(AddReferralsComponent, {
    //   data: item,
    //   height: 'auto',
    //   width: '950px',
    // });
  }

  openpermissiondialog() { }

  onpermclick() {
    this.router.navigate(['rcm-login/referrals/referrals-dashboard']);
  }
}
