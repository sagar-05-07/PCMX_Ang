import { Component } from '@angular/core';
import { AddCasesComponent } from '../../rcm-login/cases/add-cases/add-cases.component';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CasesMergeComponent } from '../../rcm-login/cases/cases-merge/cases-merge.component';

@Component({
  selector: 'app-law-cases',
  templateUrl: './law-cases.component.html',
  styleUrl: './law-cases.component.scss'
})
export class LawCasesComponent {

  filterToggle2: boolean = false;
  public currentPage = 0;
  public totalSize = 0;
  pageSize: 0;
  filterForm: FormGroup;
  filterToggle: boolean = false;

  isNavOpen = true; // Start with the navigation open

  toggleNav() {
    this.isNavOpen = !this.isNavOpen; // Toggle between open and closed states
  }


  constructor(public dialog: MatDialog) { }

  ngOnInt() { }

  users = [
    {
      claims: '2',
      referrals: '3',
      liaison: 'Sarah Smith',
      id: 1,
      status: true,
      caseId: '32112345',
      patientId: '9',
      patientName: 'John Doe',
      dob: new Date('1990-05-15'),
      dol: new Date('2023-11-01'),
      lawFirm: 'Legal Associates',
      updated: new Date('2024-11-25'),
      gender: 'Male',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      locations: '5',
      providers: '9'
    },
    {
      claims: '3',
      referrals: '3',
      liaison: 'Michael Brown	',
      id: 2,
      status: false,
      caseId: '65354321',
      patientId: '6',
      patientName: 'Jane Smith',
      dob: new Date('1985-03-22'),
      dol: new Date('2023-10-10'),
      lawFirm: 'Smith & Co.',
      updated: new Date('2024-11-20'),
      gender: 'Female',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001',
      locations: '5',
      providers: '8'
    },
    {
      claims: '9',
      referrals: '7',
      liaison: 'Emily Davis',
      id: 3,
      status: 'Pending',
      caseId: '09167890',
      patientId: '7',
      patientName: 'Alice Johnson',
      dob: new Date('1992-08-10'),
      dol: new Date('2023-08-15'),
      lawFirm: 'Johnson Legal',
      updated: new Date('2024-11-15'),
      gender: 'Female',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      locations: '5',
      providers: '8'
    },
    {
      claims: '5',
      referrals: '5',
      liaison: 'Sarah Smith	',
      id: 4,
      status: true,
      caseId: '12398765',
      patientId: '5',
      patientName: 'Michael Brown',
      dob: new Date('1975-12-25'),
      dol: new Date('2023-07-20'),
      lawFirm: 'Brown Partners',
      updated: new Date('2024-11-22'),
      gender: 'Male',
      city: 'Houston',
      state: 'TX',
      zipCode: '77001',
      locations: '3',
      providers: '6'
    },
    {
      claims: '3',
      referrals: '5',
      liaison: 'Emily Davis',
      id: 5,
      status: false,
      caseId: '54145678',
      patientId: '2',
      patientName: 'Emily Davis',
      dob: new Date('1999-09-30'),
      dol: new Date('2023-09-10'),
      lawFirm: 'Davis & Associates',
      updated: new Date('2024-11-10'),
      gender: 'Female',
      city: 'Phoenix',
      state: 'AZ',
      zipCode: '85001',
      locations: '9',
      providers: '6'
    },
    {
      claims: '6',
      referrals: '2',
      liaison: 'Emily Davis',
      id: 6,
      status: 'Pending',
      caseId: '21311111',
      patientId: '9',
      patientName: 'Robert Wilson',
      dob: new Date('1988-06-18'),
      dol: new Date('2023-06-15'),
      lawFirm: 'Wilson Group',
      updated: new Date('2024-11-18'),
      gender: 'Male',
      city: 'Philadelphia',
      state: 'PA',
      zipCode: '19101',
      locations: '2',
      providers: '4'
    },
    {
      claims: '3',
      referrals: '6',
      liaison: 'Emily Davis',
      id: 7,
      status: true,
      caseId: '11222222',
      patientId: '8',
      patientName: 'Olivia Martinez',
      dob: new Date('1983-04-10'),
      dol: new Date('2023-04-12'),
      lawFirm: 'Martinez & Sons',
      updated: new Date('2024-11-12'),
      gender: 'Female',
      city: 'San Antonio',
      state: 'TX',
      zipCode: '78201',
      locations: '1',
      providers: '3'
    },
    {
      claims: '6',
      referrals: '5',
      liaison: 'Emily Davis',
      id: 8,
      status: false,
      caseId: '64233333',
      patientId: '7',
      patientName: 'David Anderson',
      dob: new Date('1972-11-11'),
      dol: new Date('2023-11-09'),
      lawFirm: 'Anderson Legal',
      updated: new Date('2024-11-09'),
      gender: 'Male',
      city: 'San Diego',
      state: 'CA',
      zipCode: '92101',
      locations: '7',
      providers: '9'
    },
    {
      claims: '6',
      referrals: '5',
      liaison: 'Emily Davis',
      id: 9,
      status: true,
      caseId: '64244444',
      patientId: '6',
      patientName: 'Sophia Hernandez',
      dob: new Date('1995-02-14'),
      dol: new Date('2023-02-14'),
      lawFirm: 'Hernandez & Co.',
      updated: new Date('2024-11-14'),
      gender: 'Female',
      city: 'Dallas',
      state: 'TX',
      zipCode: '75201',
      locations: '9',
      providers: '8'
    },
    {
      claims: '7',
      referrals: '6',
      liaison: 'Emily Davis',
      id: 10,
      status: 'Pending',
      caseId: '12355555',
      patientId: '5',
      patientName: 'James Garcia',
      dob: new Date('1986-07-07'),
      dol: new Date('2023-07-01'),
      lawFirm: 'Garcia Legal',
      updated: new Date('2024-11-01'),
      gender: 'Male',
      city: 'Austin',
      state: 'TX',
      zipCode: '73301',
      locations: '7',
      providers: '5'
    },
  ];

  openEditDialog(item: any) {
    this.dialog.open(AddCasesComponent, {
      data: item,
      height: 'auto',
      width: '950px',
    });
  }

  openMerge() {
    this.dialog.open(CasesMergeComponent, {
      width: '700px',
      height: 'auto',
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
