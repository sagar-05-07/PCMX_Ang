import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';

@Component({
  selector: 'app-patient-cases',
  templateUrl: './patient-cases.component.html',
  styleUrl: './patient-cases.component.scss'
})
export class PatientCasesComponent {

  public currentPage = 0;
  public totalSize = 0;
  pageSize: 0;

  constructor(
    public dialog: MatDialog,
    private _location: Location
  ) { }

  ngOnInt() { }

  back() {
    this._location.back();
  }

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
  ];

  openEditDialog(item: any) {
    // this.dialog.open(AddCasesComponent, {
    //   data: item,
    //   height: 'auto',
    //   width: '950px',
    // });
  }

  openMerge() {
    // this.dialog.open(CasesMergeComponent, {
    //   width: '700px',
    //   height: 'auto',
    // });
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
