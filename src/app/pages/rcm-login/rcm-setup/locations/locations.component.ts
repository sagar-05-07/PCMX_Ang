import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddLocationComponent } from './add-location/add-location.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent {

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
