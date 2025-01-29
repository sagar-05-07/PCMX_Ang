import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddPatientsComponent } from '../patients/add-patients/add-patients.component';

@Component({
  selector: 'app-refferral-dashboard',
  templateUrl: './refferral-dashboard.component.html',
  styleUrl: './refferral-dashboard.component.scss'
})
export class RefferralDashboardComponent {

  constructor(
    private router: Router,
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