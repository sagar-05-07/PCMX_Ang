import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LookupDialogComponent } from './lookup-dialog/lookup-dialog.component';
import { MatDialog } from '@angular/material/dialog';


export interface Servicelevel {
  name: string;
  units: string;
  previousValue: string | number;
  newValue?: string | number;
  isDropdown?: boolean;
  dropdownOptions?: string[];
  placeholder?: string;
  code: string;
  lookupName: string;
  status: string;
}

@Component({
  selector: 'app-lookup-options',
  templateUrl: './lookup-options.component.html',
  styleUrl: './lookup-options.component.scss',
})
export class LookupOptionsComponent {
  filterForm: FormGroup<any>;

  filterToggle1: boolean;

  opencontactDialog(arg0: null) {
    throw new Error('Method not implemented.');
  }
  redirect() {
    throw new Error('Method not implemented.');
  }
  filterToggle: boolean;
  totalSize: number;
  currentPage: number;

  filterOptions = [
    { value: '1', viewValue: 'Front View' },
    { value: '2', viewValue: 'Side View' },
  ];


  users1: Servicelevel[] = [
    {
      code: 'Side View',
      lookupName: 'LH',
      status: 'Active',
      name: 'Penalty amount for delay per hour',
      units: 'Rupees',
      previousValue: 150,
      newValue: '',
      dropdownOptions: ['100', '200', '300', '400'],
      placeholder: 'Rupees',
    },
    {
      code: 'Side View',
      lookupName: 'LH',
      status: 'Active',
      name: 'Auto generated Performance report via mail (Instant)',
      units: '-',
      previousValue: '2023',
      newValue: '',
      isDropdown: true,
      dropdownOptions: ['2020', '2021', '2022', '2023', '2024'],
      placeholder: 'Year',
    },

    {
      code: 'Side View',
      lookupName: 'LH',
      status: 'Active',
      name: 'Customer Service Level ratios (OTA, OTP, POD)',
      units: 'Percentage',
      previousValue: '10',
      newValue: '',
      dropdownOptions: ['10', '20', '30', '40'],
      placeholder: 'Percentage',
    },
    {
      code: 'Side View',
      lookupName: 'LH',
      status: 'Active',
      name: 'Fleet Manager Service Level ratios (OTA, OTP, POD)',
      units: 'Percentage',
      previousValue: '15',
      newValue: '',
      dropdownOptions: ['10', '20', '30', '40'],
      placeholder: 'Percentage',
    },
    {
      code: 'Side View',
      lookupName: 'LH',
      status: 'Active',
      name: 'Driver Service Level ratios (OTA, OTP, POD)',
      units: 'Percentage',
      previousValue: '25',
      newValue: '',
      dropdownOptions: ['10', '20', '30', '40'],
      placeholder: 'Percentage',
    },
    {
      code: 'Side View',
      lookupName: 'LH',
      status: 'Active',
      name: 'Instant Service Level ratios (OTA, OTP, POD)',
      units: 'Percentage',
      previousValue: '5',
      newValue: '',
      dropdownOptions: ['10', '20', '30', '40'],
      placeholder: 'Percentage',
    },
  ];

  tableData = [
    {
      subject: 'Grid Length',
      Description: 'Default Grid Length',
      previousValue: '20',
      newValue: '', // Starts empty until selected
      dropdownOptions: ['10', '20', '30', '40'],
      placeholder: 'Grid Size', // Custom placeholder
    },
    {
      subject: 'Email of the Director',
      Description: 'Email Address of the Director',
      previousValue: '10',
      newValue: '',
      dropdownOptions: ['5', '10', '15'],
      placeholder: 'Value',
    },
    {
      subject: 'Audit Approval',
      Description: 'Permission to approve the Audit',
      previousValue: '5',
      newValue: '',
      dropdownOptions: ['10', '15', '20'],
      placeholder: 'Audit Status',
    },
    {
      subject: 'Start Year',
      Description: 'Default Start Year',
      previousValue: '2023',
      newValue: '',
      dropdownOptions: ['2022', '2023', '2024', '2025'],
      placeholder: 'Starting Year',
    },
    {
      subject: 'End Year',
      Description: 'Default End Year',
      previousValue: '2024',
      newValue: '',
      dropdownOptions: ['2024', '2025', '2026', '2027'],
      placeholder: 'Ending Year',
    },
  ];

  saveItem(item: any) {
    if (!item.newValue) {
      console.warn('Please select a valid option for:', item.subject);
      return;
    }
    console.log('Saved item:', item);
  }

  constructor(public dialog: MatDialog,
  ) {

  }

  public openproviderdialog(id: any) {
    console.log('jkhksbdjk');
    let dialogRef = this.dialog.open(LookupDialogComponent, {
      data: id,
      height: 'auto',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((data) => { });
  }
}

