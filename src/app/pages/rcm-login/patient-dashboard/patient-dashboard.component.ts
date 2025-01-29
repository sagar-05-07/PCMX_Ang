import { Component } from '@angular/core';
import { AddPatientsComponent } from '../patients/add-patients/add-patients.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrl: './patient-dashboard.component.scss'
})
export class PatientDashboardComponent {

  constructor(
    public dialog: MatDialog) { }

  ngOnInit() { }


  isNavOpen = true;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  back() {
    history.back();
    // this.router.navigate(['rcm-login/referrals']);
  }


  openAddPaitent(item: any) {
    this.dialog.open(AddPatientsComponent, {
      data: item,
      height: 'auto',
      width: '1200px',
    });
  }

}