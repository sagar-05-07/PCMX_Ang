import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddLocationComponent } from './add-location/add-location.component';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ReferralsfilterComponent } from '../../referrals/referralsfilter/referralsfilter.component';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.3s ease-in-out', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('0.3s ease-in-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class LocationsComponent {



 
  showCard: boolean;

  toggleCard() {

    this.showCard = !this.showCard;

    if (!this.showCard) {
      this.showTable = false;
      this.showTable1 = false;
      this.showTable2 = false;
    }
  }



  dataSource = [
    { workList: 'Total Referrals', volume: 120201 },
    { workList: 'Pending Verification', volume: 1875 },
    { workList: 'Pending Authorization', volume: 3790 },
    { workList: 'Delayed', volume: 9078 },
    { workList: 'Denied', volume: 908 },
    { workList: 'Verified NOT AUTH', volume: 8900 },
    { workList: 'AUTH NOT SCH', volume: 890 },
    { workList: 'SCH NOT Verified', volume: 1987 },
    { workList: 'Total SCH Visits', volume: 190234 },
  ];


  dataSource1 = [
    { workList: 'Total SCH Visits', volume: 190234 },
    { workList: 'No Show', volume: 20200 },
    { workList: 'Cancelled', volume: 9201 },
    { workList: 'COM Insurance', volume: 12001 },
    { workList: 'Workers Comp', volume: 2908 },
    { workList: 'Self Pay', volume: 7780 },
    { workList: 'Total Claims', volume: 130001 },
    { workList: 'Claims Per SCH Visits', volume: 0.68 },
  ];

  dataSource2 = [
    { workList: 'Total Claims', volume: 130001 },
    { workList: 'Claims Closed', volume: 110000 },
    { workList: 'Claims Dropped', volume: 12800 },
    { workList: 'Deposit Received', volume: 23902 },
    { workList: 'Claims Settled', volume: 95001 },
    { workList: 'Claims Paid', volume: 80001 },
    { workList: 'Value of Claims', volume: 2902091 },
    { workList: 'Payment Received', volume: 1098121 },
    { workList: 'Fraction Paid By Volume', volume: 0.61 },
    { workList: 'Fraction Paid By Value', volume: 0.38 },
  ];

  showTable: boolean = false;
  showTable1: boolean = false;
  showTable2: boolean = false;

  toggleTable(table: string) {
    if (table === 'table') {
      this.showTable = !this.showTable; // Toggle the state
      this.showTable1 = false; // Ensure other tables are closed
      this.showTable2 = false;
    } else if (table === 'table1') {
      this.showTable1 = !this.showTable1; // Toggle the state
      this.showTable = false;
      this.showTable2 = false;
    } else if (table === 'table2') {
      this.showTable2 = !this.showTable2; // Toggle the state
      this.showTable = false;
      this.showTable1 = false;
    }
  }


  
  referralsFilter(event: MouseEvent): void {

    this.showTable = false;
    this.showTable1 = false;
    this.showTable2 = false;
    this.showTable = false;
    this.showTable1 = false;
    this.showTable2 = false;
    const buttonRect = (event.target as HTMLElement).getBoundingClientRect();
    const marginRight = -400; // Adjust this value as needed for the left margin
    const dialogPosition = {
      top: `${buttonRect.bottom}px`,
      left: `${buttonRect.left + marginRight}px`, // Add margin to the left
    };

    this.dialog.open(ReferralsfilterComponent, {
      height: 'auto',
      width: '450px',
      position: dialogPosition,
    });
  }



  filterToggle2: boolean = false;
  public currentPage = 0;
  public totalSize = 0;
  pageSize: 0;
  filterForm: FormGroup;
  filterToggle: boolean = false;

  constructor(public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInt() { }

  users = [
    {
      locationName: 'Sunrise Nursing Home',
      type: 'Nursing Home',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      phone: '(123) 456-7890',
      email: 'user1@example.com',
      fax: '(123) 456-7891',
      id: 1,
      isActive: true,
      paitents: '3231',
      referrals: '1600',
      visits: '125',
      referralsFrom: 'Dr. Davis'
    },
    {
      locationName: 'St. Mary\'s Hospital',
      type: 'Hospital',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90001',
      phone: '(234) 567-8901',
      email: 'user2@example.com',
      fax: '(234) 567-8902',
      id: 2,
      paitents: '1531',
      referrals: '400',
      visits: '825',
      referralsFrom: 'Dr. Emily Davis'
    },
    {
      locationName: 'Greenwood Clinic',
      type: 'Clinic',
      city: 'Chicago',
      state: 'IL',
      zip: '60001',
      phone: '345 678-9012',
      email: 'user3@example.com',
      fax: '(345) 678-9013',
      id: 3,
      isActive: true,
      paitents: '1231',
      referrals: '600',
      visits: '925',
      referralsFrom: 'Dr. Sarah Lee'
    },
    {
      locationName: 'Sunrise Nursing Home',
      type: 'Nursing Home',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      phone: '(123) 456-7890',
      email: 'user1@example.com',
      fax: '(123) 456-7891',
      id: 1,
      isActive: true,
      paitents: '3231',
      referrals: '1600',
      visits: '125',
      referralsFrom: 'Dr. John Smith'
    },
    {
      locationName: 'St. Mary\'s Hospital',
      type: 'Hospital',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90001',
      phone: '(234) 567-8901',
      email: 'user2@example.com',
      fax: '(234) 567-8902',
      id: 2,
      paitents: '1531',
      referrals: '400',
      visits: '825',
      referralsFrom: 'Dr. Emily Davis'
    },
    {
      locationName: 'Greenwood Clinic',
      type: 'Clinic',
      city: 'Chicago',
      state: 'IL',
      zip: '60001',
      phone: '345 678-9012',
      email: 'user3@example.com',
      fax: '(345) 678-9013',
      id: 3,
      isActive: true,
      paitents: '1231',
      referrals: '600',
      visits: '925',
      referralsFrom: 'Dr. Michael Johnson'
    }
  ];


  openPatients() {
    this.router.navigate(['super-admin/rcm-accounts/patients']);
  }

  openEditDialog(item: any) {
    this.dialog.open(AddLocationComponent, {
      data: item,
      height: 'auto',
      width: '920px'
    });
  }

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
