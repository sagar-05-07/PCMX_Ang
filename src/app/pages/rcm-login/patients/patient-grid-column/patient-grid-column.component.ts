import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-grid-column',
  templateUrl: './patient-grid-column.component.html',
  styleUrl: './patient-grid-column.component.scss'
})
export class PatientGridColumnComponent {

  constructor(public dialog: Dialog) { }
  roles = [
    { role: 'First Name ' },
    { role: 'Last Name ' },
    { role: 'Date of Birth' },
    { role: 'SSN' },
    { role: 'Home Address' },
    { role: 'City' },
    { role: 'State' },
    { role: 'Zip Code' },
    { role: 'Email' },
    { role: 'Gender' },
    { role: 'Marital Status' },
    { role: 'Home Phone' },
    { role: 'Work Phone' },
    { role: 'Cell Phone' },
    { role: 'Ethnicity' },
    { role: 'Language' },
    { role: 'Preferred Method' },
    { role: 'Name' },
    { role: 'Cell Phone' },
    { role: 'Relation to Patient' },
    { role: 'Employment Status' },
    { role: 'Payment Method' },
    { role: 'Date of Injury' },
    { role: 'Insurance' },
    { role: 'Phone Number' },
    { role: 'Relationship' },
    { role: 'Home Address' },
    { role: 'City' },
    { role: 'State' },
    { role: 'Zip Code' },
    { role: 'Policy Order ID' },
    { role: 'Group' },
  ];

  close() {
    this.dialog.closeAll();
  }
}
