import { Component } from '@angular/core';

@Component({
  selector: 'app-partner-report',
  templateUrl: './partner-report.component.html',
  styleUrl: './partner-report.component.scss'
})
export class PartnerReportComponent {

  constructor() { }
  ngOnInit() { }


  isNavOpen = true;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

}
