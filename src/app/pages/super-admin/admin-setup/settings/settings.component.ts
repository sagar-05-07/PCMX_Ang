import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AddSettingsComponent } from './add-settings/add-settings.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  public currentPage = 0;
  public totalSize = 0;
  filterToggle: boolean;
  filterToggle1: boolean;
  filterForm: FormGroup;

  constructor(public dialog: MatDialog) {}

  public openproviderdialog(id: any) {
    console.log('jkhksbdjk');
    let dialogRef = this.dialog.open(AddSettingsComponent, {
      data: id,
      height: 'auto',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((data: any) => {});
  }

  // settings
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
}
function openproviderdialog(id: any, any: any) {
  throw new Error('Function not implemented.');
}
