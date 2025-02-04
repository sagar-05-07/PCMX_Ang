import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddPatientsComponent } from '../patients/add-patients/add-patients.component';

@Component({
  selector: 'app-visits-dashboard',
  templateUrl: './visits-dashboard.component.html',
  styleUrl: './visits-dashboard.component.scss'
})
export class VisitsDashboardComponent {

  constructor(
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() { }


  isNavOpen = true;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  // back() {
  //   this.router.navigate(['rcm-login/visits']);
  // }

  back() {
    history.back();
    // this.router.navigate(['rcm-login/visits']);
  }

    openAddPaitent(item: any) {
      this.dialog.open(AddPatientsComponent, {
        data: item,
        height: 'auto',
        width: '1200px',
      });
    }

}
