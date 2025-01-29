import { Component } from '@angular/core';

@Component({
  selector: 'app-pro-reports',
  templateUrl: './pro-reports.component.html',
  styleUrl: './pro-reports.component.scss'
})
export class ProReportsComponent {

  constructor() { }
  ngOnInit() { }


  isNavOpen = true;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

}
