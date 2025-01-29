import { Component } from '@angular/core';

@Component({
  selector: 'app-law-reports',
  templateUrl: './law-reports.component.html',
  styleUrl: './law-reports.component.scss'
})
export class LawReportsComponent {

  constructor() { }
  ngOnInit() { }


  isNavOpen = true;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

}
