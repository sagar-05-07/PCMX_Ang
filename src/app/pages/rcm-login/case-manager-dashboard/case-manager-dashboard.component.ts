import { Component } from '@angular/core';
import { AddPatientsComponent } from '../patients/add-patients/add-patients.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-case-manager-dashboard',
  templateUrl: './case-manager-dashboard.component.html',
  styleUrl: './case-manager-dashboard.component.scss'
})
export class CaseManagerDashboardComponent {

  constructor(
    public dialog: MatDialog) { }

  ngOnInit() { }


  isNavOpen = true;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  back() {
    history.back();
  }


  openAddPaitent(item: any) {
    this.dialog.open(AddPatientsComponent, {
      data: item,
      height: 'auto',
      width: '1200px',
    });
  }

}