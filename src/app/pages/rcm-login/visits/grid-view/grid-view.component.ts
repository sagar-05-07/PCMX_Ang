import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddVisitComponent } from './add-visit/add-visit.component';
import { VisitMergeComponent } from './visit-merge/visit-merge.component';
import { PatientPopComponent } from '../../patient-pop/patient-pop.component';
import { PerspectivesComponent } from 'src/app/shared/perspectives/perspectives.component';
import { PerspectiveFilterComponent } from '../../patients/perspective-filter/perspective-filter.component';
import { FilterSaveComponent } from 'src/app/shared/filter-save/filter-save.component';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrl: './grid-view.component.scss'
})
export class GridViewComponent {

  filterToggle2: boolean = false;
  public currentPage = 0;
  public totalSize = 0;
  pageSize: 0;
  filterForm: FormGroup;
  filterToggle: boolean = false;

  constructor(public dialog: MatDialog,) { }

  ngOnInt() { }



  isNavOpen = true; // Start with the navigation open

  toggleNav() {
    this.isNavOpen = !this.isNavOpen; // Toggle between open and closed states
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

    saveFilters() {
      this.dialog.open(FilterSaveComponent, {
        height: 'auto',
        width: '450px'
      });
    }

  openMerge() {
    this.dialog.open(VisitMergeComponent, {
      width: '600px',
      height: 'auto',
    });
  }

  perspectives() {
    this.dialog.open(PerspectivesComponent, {
      height: 'auto',
      width: '450px'
    });
  }

  perspectiveFilter(event: MouseEvent): void {
    const buttonRect = (event.target as HTMLElement).getBoundingClientRect();
    const marginRight = -400; // Adjust this value as needed for the left margin
    const dialogPosition = {
      top: `${buttonRect.bottom}px`,
      left: `${buttonRect.left + marginRight}px`, // Add margin to the left
    };

    this.dialog.open(PerspectiveFilterComponent, {
      height: 'auto',
      width: '450px',
      position: dialogPosition,
    });
  }

  selectedIcon: number | null = 3;

  icons = [
    { name: 'account_box', tooltip: 'Liaisons Perspective' },
    { name: 'add_box', tooltip: 'Patient Intake Perspective' },
    // { name: 'verified_user', tooltip: 'Authorization' },
    { name: 'group', tooltip: 'Case Manager Perspective' },
    { name: 'event', tooltip: 'Scheduling Perspective' },
    // { name: 'health_and_safety', tooltip: 'Patient Care' },
    { name: 'receipt_long', tooltip: 'Claim Perspective' },
    { name: 'attach_money', tooltip: 'Funds Perspective' },
    { name: 'collections', tooltip: 'Collection Perspective' },
    { name: 'business', tooltip: 'Leadership Perspective' },
    { name: 'campaign', tooltip: 'Marketing Perspective' },
    { name: '', tooltip: '' },
  ];

  selectIcon(index: number): void {
    this.selectedIcon = index; // Set the clicked icon as selected
  }


  patientData = [
    { description: 'Total Visits', count: '120,201' },
    { description: 'Visits this Year', count: '56,987' },
    { description: 'Visits Last Year', count: '42,987' },
    { description: 'Visits this Quarter', count: '15,009' }
  ];

  patientData2 = [
    { description: 'Visits this month', count: '14,985' },
    { description: 'Visits last month', count: '6,521' },
    { description: 'Pending Verification', count: '5,621' },
    { description: 'Pending Authorization', count: '98' }
  ];

  logData = [
    { description: 'Visits this week', count: '74' },
    { description: 'Logged this month', count: '49' },
    { description: 'Delayed', count: '48', style: 'red' },
    { description: 'Denied', count: '268', style: 'red' }
  ];
  // for Collection
  collectionData = [
    { description: 'New This Month', count: '120,201' },
    { description: 'Settled This Month', count: '56,987' },
    { description: 'Paid This Month', count: '42,987' },
  ];

  collectionData2 = [
    { description: 'Overdue Claims', count: '14,985' },
    { description: 'New This Year', count: '6,521' },
    { description: 'Settled This Year', count: '5,621' },
  ];

  collectionLogData = [
    { description: 'Paid This Year ', count: '74' },
    { description: 'Delayed', count: '48', style: 'red' },
    { description: 'Denied', count: '268', style: 'red' }
  ];

  Liaisons = [
    { text: 'Visits this year', number: '421,998' },
    { text: 'Visits this quarter', number: '98,909' },
    { text: 'Visits this month', number: '74,786' },
    { text: 'Pending Verification', number: '12,871' },
    { text: 'Pending Authorization', number: '10,981' },
    { text: 'SCH & Pending Auth', number: '32,987' },
  ];

  getBackgroundColor(index: number): string {
    const colors = ['#D9D9D9', '#FFD2B2', '#A8E5C1', '#C4C2FF', '#B3E3F6', '#E0DBFF'];
    return colors[index] || '#FFFFFF';
  }

  users = [
    {
      id: 1,
      date: new Date(),
      time: '10:30 AM',
      visitId: '11212334',
      patientId: '78123432',
      patientName: 'John Doe',
      provider: 'Dr. Smith',
      location: 'Room 101',
      referralFrom: 'Dr. Robert Brown',
      caseId: '11224532',
      referralId: '21252322',
      status: 'Scheduled ',
    },
    {
      id: 2,
      date: new Date(),
      time: '11:45 AM',
      visitId: '11561278',
      patientId: '34126545',
      patientName: 'Jane Doe',
      provider: 'Dr. Brown',
      location: 'Room 102',
      referralFrom: 'Dr. Michael Johnson',
      caseId: '22654345',
      referralId: '3432345',
      status: 'Completed',
    },
    {
      id: 3,
      date: new Date(),
      time: '02:15 PM',
      visitId: '19101111',
      patientId: '53234546',
      patientName: 'Alice Johnson',
      provider: 'Dr. Taylor',
      location: 'Room 103',
      referralFrom: 'Dr. John Smith',
      caseId: '33687654',
      referralId: '43432345',
      status: 'No Show',
    },
  ];



  openEditDialog(item: any) {
    this.dialog.open(AddVisitComponent, {
      data: item,
      height: 'auto',
      width: '920px'
    });
  }

  open(item: any) {
    this.dialog.open(PatientPopComponent, {
      data: item,
      height: 'auto',
      width: '1200px'
    });
  }

  openpermissiondialog() { }

}
