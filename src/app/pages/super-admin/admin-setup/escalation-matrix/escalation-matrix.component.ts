import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddSettingsComponent } from '../settings/add-settings/add-settings.component';

export interface NotificationLevel {
  level: string;
  recipient: string;
  remarks: string;
  delay: number;
  status: string;
}

@Component({
  selector: 'app-escalation-matrix',
  templateUrl: './escalation-matrix.component.html',
  styleUrl: './escalation-matrix.component.scss',
})
export class EscalationMatrixComponent {
  notificationLevels: NotificationLevel[] = [
    {
      level: 'Level - 0',
      recipient: 'User',
      remarks:
        'This notification is sent when an action is not done by its due date',
      delay: 0,
      status: 'Active',
    },
    {
      level: 'Level - 1',
      recipient: 'User',
      remarks:
        'This notification is sent when an action is overdue beyond its due date by two days',
      delay: 2,
      status: 'Active',
    },
    {
      level: 'Level - 2',
      recipient: 'Manager',
      remarks:
        'This notification is sent when an action is overdue beyond its due date by 3 days and both the user and the managers get the notification email',
      delay: 5,
      status: 'Active',
    },
    {
      level: 'Level - 3',
      recipient: 'Director',
      remarks:
        'This notification is sent when an action is overdue beyond its due date by 7 days. The notification is sent by email to the user, all the managers and the director',
      delay: 7,
      status: 'Active',
    },
  ];
  filterToggle8: any;
  filterForm: FormGroup<any>;
  totalSize: number;
  currentPage: number;

  filterToggle: boolean;
  filterToggle1: boolean;

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
      newValue: '', // Starts empty until selected
      dropdownOptions: ['5', '10', '15'],
      placeholder: 'Value', // Custom placeholder
    },
    {
      subject: 'Audit Approval',
      Description: 'Permission to approve the Audit',
      previousValue: '5',
      newValue: '', // Starts empty until selected
      dropdownOptions: ['10', '15', '20'],
      placeholder: 'Audit Status', // Custom placeholder
    },
    {
      subject: 'Start Year',
      Description: 'Default Start Year',
      previousValue: '2023',
      newValue: '', // Starts empty until selected
      dropdownOptions: ['2022', '2023', '2024', '2025'],
      placeholder: 'Starting Year', // Custom placeholder
    },
    {
      subject: 'End Year',
      Description: 'Default End Year',
      previousValue: '2024',
      newValue: '', // Starts empty until selected
      dropdownOptions: ['2024', '2025', '2026', '2027'],
      placeholder: 'Ending Year', // Custom placeholder
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
