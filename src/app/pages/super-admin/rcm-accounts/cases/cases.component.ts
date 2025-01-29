import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';


@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrl: './cases.component.scss'
})
export class CasesComponent {

  filterToggle2: boolean = false;
  public currentPage = 0;
  public totalSize = 0;
  pageSize: 0;
  filterForm: FormGroup;
  filterToggle: boolean = false;

  constructor(public dialog: MatDialog, private location: Location) { }

  ngOnInt() { }

  users = [
    {
      claims: '5',
      referrals: '8',
      liaison: 'Sarah Smith',
      id: 1,
      status: 'Active',
      caseId: 'C12345',

      patientId: 'P67890',
      patientName: 'John Doe',
      dob: new Date('1990-05-15'),
      dol: new Date('2023-11-01'),
      lawFirm: 'Legal Associates',
      updated: new Date('2024-11-25'),
      gender: 'Male',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
    },
    {
      claims: '7',
      referrals: '2',
      liaison: 'Michael Brown	',
      id: 2,
      status: 'Inactive',
      caseId: 'C54321',
      patientId: 'P09876',
      patientName: 'Jane Smith',
      dob: new Date('1985-03-22'),
      dol: new Date('2023-10-10'),
      lawFirm: 'Smith & Co.',
      updated: new Date('2024-11-20'),
      gender: 'Female',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001',
    },
    {
      claims: '6',
      referrals: '2',
      liaison: 'Emily Davis',
      id: 3,
      status: 'Pending',
      caseId: 'C67890',
      patientId: 'P34567',
      patientName: 'Alice Johnson',
      dob: new Date('1992-08-10'),
      dol: new Date('2023-08-15'),
      lawFirm: 'Johnson Legal',
      updated: new Date('2024-11-15'),
      gender: 'Female',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
    },
    {
      claims: '2',
      referrals: '5',
      liaison: 'Sarah Smith	',
      id: 4,
      status: 'Active',
      caseId: 'C98765',
      patientId: 'P12345',
      patientName: 'Michael Brown',
      dob: new Date('1975-12-25'),
      dol: new Date('2023-07-20'),
      lawFirm: 'Brown Partners',
      updated: new Date('2024-11-22'),
      gender: 'Male',
      city: 'Houston',
      state: 'TX',
      zipCode: '77001',
    },
    {
      claims: '6',
      referrals: '2',
      liaison: 'Emily Davis',
      id: 5,
      status: 'Inactive',
      caseId: 'C45678',
      patientId: 'P67812',
      patientName: 'Emily Davis',
      dob: new Date('1999-09-30'),
      dol: new Date('2023-09-10'),
      lawFirm: 'Davis & Associates',
      updated: new Date('2024-11-10'),
      gender: 'Female',
      city: 'Phoenix',
      state: 'AZ',
      zipCode: '85001',
    },
    {
      claims: '9',
      referrals: '2',
      liaison: 'Emily Davis',
      id: 6,
      status: 'Pending',
      caseId: 'C11111',
      patientId: 'P99999',
      patientName: 'Robert Wilson',
      dob: new Date('1988-06-18'),
      dol: new Date('2023-06-15'),
      lawFirm: 'Wilson Group',
      updated: new Date('2024-11-18'),
      gender: 'Male',
      city: 'Philadelphia',
      state: 'PA',
      zipCode: '19101',
    },
    {
      claims: '2',
      referrals: '5',
      liaison: 'Emily Davis',
      id: 7,
      status: 'Active',
      caseId: 'C22222',
      patientId: 'P88888',
      patientName: 'Olivia Martinez',
      dob: new Date('1983-04-10'),
      dol: new Date('2023-04-12'),
      lawFirm: 'Martinez & Sons',
      updated: new Date('2024-11-12'),
      gender: 'Female',
      city: 'San Antonio',
      state: 'TX',
      zipCode: '78201',
    },
    {
      claims: '6',
      referrals: '8',
      liaison: 'Emily Davis',
      id: 8,
      status: 'Inactive',
      caseId: 'C33333',
      patientId: 'P77777',
      patientName: 'David Anderson',
      dob: new Date('1972-11-11'),
      dol: new Date('2023-11-09'),
      lawFirm: 'Anderson Legal',
      updated: new Date('2024-11-09'),
      gender: 'Male',
      city: 'San Diego',
      state: 'CA',
      zipCode: '92101',
    },
    {
      claims: '6',
      referrals: '5',
      liaison: 'Emily Davis',
      id: 9,
      status: 'Active',
      caseId: 'C44444',
      patientId: 'P66666',
      patientName: 'Sophia Hernandez',
      dob: new Date('1995-02-14'),
      dol: new Date('2023-02-14'),
      lawFirm: 'Hernandez & Co.',
      updated: new Date('2024-11-14'),
      gender: 'Female',
      city: 'Dallas',
      state: 'TX',
      zipCode: '75201',
    },
    {
      claims: '6',
      referrals: '2',
      liaison: 'Emily Davis',
      id: 10,
      status: 'Pending',
      caseId: 'C55555',
      patientId: 'P55555',
      patientName: 'James Garcia',
      dob: new Date('1986-07-07'),
      dol: new Date('2023-07-01'),
      lawFirm: 'Garcia Legal',
      updated: new Date('2024-11-01'),
      gender: 'Male',
      city: 'Austin',
      state: 'TX',
      zipCode: '73301',
    },
  ];

  openEditDialog(item: any) {
    this.dialog.open(CasesComponent, {
      data: item,
      height: 'auto',
      width: '950px',
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

  goBack() {
    this.location.back();

  }
}

