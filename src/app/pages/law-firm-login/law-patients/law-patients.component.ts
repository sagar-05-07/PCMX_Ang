import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PatientGridColumnComponent } from '../../rcm-login/patients/patient-grid-column/patient-grid-column.component';
import { LawAddPatientComponent } from './law-add-patient/law-add-patient.component';
import { AddPatientsComponent } from '../../rcm-login/patients/add-patients/add-patients.component';
import { MergePopComponent } from '../../rcm-login/patients/merge-pop/merge-pop.component';

@Component({
  selector: 'app-law-patients',
  templateUrl: './law-patients.component.html',
  styleUrl: './law-patients.component.scss',
})
export class LawPatientsComponent {

  filterToggle2: boolean = false;
  public currentPage = 0;
  public totalSize = 0;
  pageSize: 0;
  filterForm: FormGroup;
  filterToggle: boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInt() { }

  //Grid Column Manager
  headers = [
    { Name: 'Actions', IsSelected: true },
    { Name: 'Status', IsSelected: true },
    { Name: 'VIN', IsSelected: true },
    { Name: 'Audit Type', IsSelected: true },
    { Name: 'Demerit', IsSelected: true },
    { Name: 'Target', IsSelected: true },
    { Name: 'Location', IsSelected: true },
    { Name: 'Vehicle Type', IsSelected: true },
    { Name: 'Engine Type', IsSelected: true },
    { Name: 'Drive Grade', IsSelected: true },
    { Name: 'Auditor', IsSelected: true },
    { Name: 'Model', IsSelected: true },
    { Name: 'Color', IsSelected: true },
    { Name: 'Variant', IsSelected: true },
    { Name: 'Interior Trim', IsSelected: true },
    { Name: 'Transmission', IsSelected: true },
    { Name: 'Fuel Type', IsSelected: true },
    { Name: 'Stage', IsSelected: true },
    { Name: 'Start Date', IsSelected: true },
    { Name: 'End Date', IsSelected: true },
    { Name: 'Level', IsSelected: true },
  ];
  savedHeaders = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  openManageGridDialog() {
    this.dialog.open(PatientGridColumnComponent, {
      width: '700px',
      height: 'auto',
    });
  }

  openMerge() {
    this.dialog.open(MergePopComponent, {
      width: '700px',
      height: 'auto',
    });
  }

  values = [
    {
      note: 'NA',
      contactNumber: '9781922008',
      landline: '-',
      tagName: 'Initial',
      Campaign: 'Surveyors USA',
      state: 'Pennsylvania',
      city: 'Moon Township',
      account: 'Allana Group',
      name: 'AG',
      contname: 'Information Technology',
      email: 'AG@gmail.com',
      companyName: 'PQA India',
      notes: 'initial message has been sent. waiting for his reply.',
      country: 'india',
      solution: '1',
      industry: 'Surveyors',
      bdname: 'Sara',
      followpDate: '234',
      log: '1/9',
      activity: 5,
      resDate: '2024-03-14',
    },
    {
      note: 'NA',
      contactNumber: '9781922010',
      landline: '+91-11-42092300',
      tagName: 'Confirmed',
      Campaign: 'Surveyors Canada',
      state: 'Pennsylvania',
      city: 'Moon Township',
      account: 'Allana Group',
      name: 'AG',
      contname: 'Information Technology',
      email: 'AG@gmail.com',
      companyName: 'PQA India',
      notes: 'initial message has been sent. waiting for his reply.',
      country: 'india',
      solution: '1',
      industry: 'Surveyors',
      bdname: 'Sara',
      followpDate: '234',
      log: '1/9',
      activity: 5,
      resDate: '2024-03-10',
    },
    {
      note: 'NA',
      contactNumber: '9881922011',
      landline: '-',
      tagName: 'Initial',
      Campaign: 'Surveyors UK',
      state: 'Pennsylvania',
      city: 'Moon Township',
      account: 'Allana Group',
      name: 'AG',
      contname: 'Information Technology',
      email: 'AG@gmail.com',
      companyName: 'PQA India',
      notes: 'initial message has been sent. waiting for his reply.',
      country: 'india',
      solution: '1',
      industry: 'Surveyors',
      bdname: 'Sara',
      followpDate: '234',
      log: '1/9',
      activity: 5,
      resDate: '2024-03-19',
    },
    {
      note: 'NA',
      contactNumber: '7781922008',
      landline: '-',
      tagName: 'Confirmed',
      Campaign: 'Surveyors Russia',
      state: 'Pennsylvania',
      city: 'Moon Township',
      account: 'Allana Group',
      name: 'AG',
      contname: 'Information Technology',
      email: 'AG@gmail.com',
      companyName: 'PQA India',
      notes: 'initial message has been sent. waiting for his reply.',
      country: 'india',
      solution: '1',
      industry: 'Surveyors',
      bdname: 'Sara',
      followpDate: '234',
      log: '1/9',
      activity: 5,
      resDate: '2024-03-11',
    },
    {
      note: 'NA',
      contactNumber: '6781922012',
      landline: '+91-11-42092300	',
      tagName: 'Initial',
      Campaign: 'Surveyors Africa',
      state: 'Pennsylvania',
      city: 'Moon Township',
      account: 'Allana Group',
      name: 'AG',
      contname: 'Information Technology',
      email: 'AG@gmail.com',
      companyName: 'PQA India',
      notes: 'initial message has been sent. waiting for his reply.',
      country: 'india',
      solution: '1',
      industry: 'Surveyors',
      bdname: 'Sara',
      followpDate: '234',
      log: '1/9',
      activity: 5,
      resDate: '2024-03-17',
    },
  ];

  users: Array<any> = [
    {
      claims: '5',
      status: false,
      patientId: '10025423',
      name: 'John Doe',
      cases: 5,
      referrals: '2',
      providers: 1,
      liaison: 'Sarah Smith',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      emergency: 'Yes',
      employment: 'Full-time',
      insurance: 'Blue Shield',
      cellPhone: '2302130987',
      email: 'john.doe@example.com',
    },
    {
      claims: '10',
      status: 'Inactive',
      patientId: '10025422',
      name: 'Jane Smith',
      cases: 3,
      referrals: '1',
      providers: 0,
      liaison: 'Michael Brown',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001',
      emergency: 'No',
      employment: 'Part-time',
      insurance: 'United Health',
      cellPhone: '2302130987',
      email: 'jane.smith@example.com',
    },
    {
      claims: '12',
      status: 'Active',
      patientId: '10025421',
      name: 'Mike Johnson',
      cases: 8,
      referrals: '5',
      providers: 1,
      liaison: 'Emily Davis',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      emergency: 'Yes',
      employment: 'Contract',
      insurance: 'Aetna',
      cellPhone: '2302130987',
      email: 'mike.johnson@example.com',
    },
    {
      claims: '8',
      status: 'Active',
      patientId: '10025423',
      name: 'John Doe',
      cases: 5,
      referrals: '2',
      providers: 1,
      liaison: 'Sarah Smith',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      emergency: 'Yes',
      employment: 'Full-time',
      insurance: 'Blue Shield',
      cellPhone: '2302130987',
      email: 'john.doe@example.com',
    },
    {
      claims: '11',
      status: false,
      patientId: '10025422',
      name: 'Jane Smith',
      cases: 3,
      referrals: '1',
      providers: 0,
      liaison: 'Michael Brown',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001',
      emergency: 'No',
      employment: 'Part-time',
      insurance: 'United Health',
      cellPhone: '2302130987',
      email: 'jane.smith@example.com',
    },
    {
      claims: '4',
      status: 'Active',
      patientId: '10025421',
      name: 'Mike Johnson',
      cases: 8,
      referrals: '5',
      providers: 1,
      liaison: 'Emily Davis',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      emergency: 'Yes',
      employment: 'Contract',
      insurance: 'Aetna',
      cellPhone: '2302130987',
      email: 'mike.johnson@example.com',
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
    this.dialog.open(AddPatientsComponent, {
      data: item,
      height: 'auto',
      width: '1200px',
    });
  }

  openpermissiondialog() { }
}
