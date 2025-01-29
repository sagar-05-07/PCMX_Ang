import { Component } from '@angular/core';
import { AddVisitComponent } from '../../visits/grid-view/add-visit/add-visit.component';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-referral-visits',
  templateUrl: './referral-visits.component.html',
  styleUrl: './referral-visits.component.scss'
})
export class ReferralVisitsComponent {

  filterToggle2: boolean = false;
  public currentPage = 0;
  public totalSize = 0;
  pageSize: 0;
  filterForm: FormGroup;
  filterToggle: boolean = false;

  constructor(public dialog: MatDialog,) { }

  ngOnInt() { }

  users = [
    {
      id: 1,
      date: new Date(),
      time: '10:30 AM',
      visitId: '121234',
      patientId: 'P5678',
      patientName: 'John Doe',
      provider: 'Dr. Smith',
      location: 'Room 101',
      referralFrom: 'Clinic A',
      caseId: '111',
      referralId: '222',
      status: 'Scheduled ',
    },
    {
      id: 2,
      date: new Date(),
      time: '11:45 AM',
      visitId: '435678',
      patientId: 'P1234',
      patientName: 'Jane Doe',
      provider: 'Dr. Brown',
      location: 'Room 102',
      referralFrom: 'Clinic B',
      caseId: '222',
      referralId: '333',
      status: 'Completed',
    },
    {
      id: 3,
      date: new Date(),
      time: '02:15 PM',
      visitId: '119101',
      patientId: 'P3456',
      patientName: 'Alice Johnson',
      provider: 'Dr. Taylor',
      location: 'Room 103',
      referralFrom: 'Clinic C',
      caseId: '333',
      referralId: '444',
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

  openpermissiondialog() { }

}
