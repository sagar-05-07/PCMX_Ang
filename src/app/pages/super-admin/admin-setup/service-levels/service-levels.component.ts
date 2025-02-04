import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface Servicelevel {
  name: string;
  units: string;
  previousValue: string | number;
  newValue?: string | number;
  isDropdown?: boolean;
  dropdownOptions?: string[];
  placeholder?: string;
  
}

@Component({
  selector: 'app-service-levels',
  templateUrl: './service-levels.component.html',
  styleUrl: './service-levels.component.scss',
})
export class ServiceLevelsComponent {
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

  users1: Servicelevel[] = [
    {
      name: 'Penalty amount for delay per hour',
      units: 'Rupees',
      previousValue: 150,
      newValue: '',
      dropdownOptions: ['100', '200', '300', '400'],
      placeholder: 'Rupees',
    },
    {
      name: 'Auto generated Performance report via mail (Instant)',
      units: '-',
      previousValue: '2023',
      newValue: '',
      isDropdown: true,
      dropdownOptions: ['2020', '2021', '2022', '2023', '2024'],
      placeholder: 'Year',
    },

    {
      name: 'Customer Service Level ratios (OTA, OTP, POD)',
      units: 'Percentage',
      previousValue: '10',
      newValue: '',
      dropdownOptions: ['10', '20', '30', '40'],
      placeholder: 'Percentage',
    },
    {
      name: 'Fleet Manager Service Level ratios (OTA, OTP, POD)',
      units: 'Percentage',
      previousValue: '15',
      newValue: '',
      dropdownOptions: ['10', '20', '30', '40'],
      placeholder: 'Percentage',
    },
    {
      name: 'Driver Service Level ratios (OTA, OTP, POD)',
      units: 'Percentage',
      previousValue: '25',
      newValue: '',
      dropdownOptions: ['10', '20', '30', '40'],
      placeholder: 'Percentage',
    },
    {
      name: 'Instant Service Level ratios (OTA, OTP, POD)',
      units: 'Percentage',
      previousValue: '5',
      newValue: '',
      dropdownOptions: ['10', '20', '30', '40'],
      placeholder: 'Percentage',
    },
  ];


  
  isAscending: boolean = true;

  toggleSort(event: Event) {
    event.stopPropagation(); // Prevent menu from opening
    this.isAscending = !this.isAscending; // Toggle sort order
  }
  
  onSortOptionSelected(option: string) {
    console.log('Selected sort option:', option);
  }

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
