import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { AddPatientsComponent } from '../patients/add-patients/add-patients.component';
import { PatientPopComponent } from '../patient-pop/patient-pop.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inner-visits',
  templateUrl: './inner-visits.component.html',
  styleUrl: './inner-visits.component.scss'
})
export class InnerVisitsComponent {

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

  openMerge() {
    // this.dialog.open(VisitMergeComponent, {
    //   width: '600px',
    //   height: 'auto',
    // });
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

  back() {
    history.back();
  }



  openEditDialog(item: any) {
    // this.dialog.open(AddVisitComponent, {
    //   data: item,
    //   height: 'auto',
    //   width: '920px'
    // });
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
