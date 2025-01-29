import { Component } from '@angular/core';
import { AddPatientsComponent } from '../patients/add-patients/add-patients.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-claims-dashboard',
  templateUrl: './claims-dashboard.component.html',
  styleUrl: './claims-dashboard.component.scss'
})
export class ClaimsDashboardComponent {

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