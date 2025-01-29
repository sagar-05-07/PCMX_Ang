import { Component } from '@angular/core';
import { AddReferralsComponent } from '../../rcm-login/referrals/add-referrals/add-referrals.component';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LawAddReferralComponent } from './law-add-referral/law-add-referral.component';
import { Router } from '@angular/router';
import { ReferralMergeComponent } from '../../rcm-login/referrals/referral-merge/referral-merge.component';

@Component({
  selector: 'app-law-referral',
  templateUrl: './law-referral.component.html',
  styleUrl: './law-referral.component.scss'
})
export class LawReferralComponent {

  filterToggle2: boolean = false;
  public currentPage = 0;
  public totalSize = 0;
  pageSize: 0;
  filterForm: FormGroup;
  filterToggle: boolean = false;

  constructor(
    public dialog: MatDialog,
    public router: Router
  ) { }

  ngOnInit() { }

  isNavOpen = true; // Start with the navigation open

  toggleNav() {
    this.isNavOpen = !this.isNavOpen; // Toggle between open and closed states
  }

  openMerge() {
    this.dialog.open(ReferralMergeComponent, {
      width: '700px',
      height: 'auto',
    });
  }

  users = [
    {
      visits: '5',
      claims: '4',
      id: 1,
      status: 'New',
      referralId: '11212345',
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
      referralId: '16711890',
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
      referralId: '11122223',
      patientName: 'Alice Smith',
      referralFrom: 'Dr. Clark',
      referralTo: 'Dr. White',
      specialty: 'Pediatrics',
      caseType: 'Family Law',
      lastUpdated: new Date(2024, 10, 25),
      created: new Date(2024, 10, 15),
      orderType: 'Insurance',
    },
    {
      visits: '5',
      claims: '4',
      id: 4,
      status: 'Authotized',
      referralId: '14454556',
      patientName: 'Bob Johnson',
      referralFrom: 'Dr. Miller',
      referralTo: 'Dr. Taylor',
      specialty: 'Cardiology',
      caseType: 'Disability Claims',
      lastUpdated: new Date(2024, 10, 18),
      created: new Date(2024, 10, 5),
      orderType: 'Clinical',
    },
    {
      visits: '5',
      claims: '8',
      id: 5,
      status: 'Denied',
      referralId: '17890221',
      patientName: 'Carol Davis',
      referralFrom: 'Dr. Moore',
      referralTo: 'Dr. Hernandez',
      specialty: 'Dermatology',
      caseType: 'Workers Compensation',
      lastUpdated: new Date(2024, 10, 12),
      created: new Date(2024, 10, 8),
      orderType: 'Medical',
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
    this.dialog.open(AddReferralsComponent, {
      data: item,
      height: 'auto',
      width: '950px',
    });
  }

  openpermissiondialog() { }

  onpermclick() {
    this.router.navigate(['rcm-login/referrals/referrals-dashboard']);
  }
}
