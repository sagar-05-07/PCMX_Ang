import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-partner-setup',
  templateUrl: './partner-setup.component.html',
  styleUrl: './partner-setup.component.scss'
})
export class PartnerSetupComponent {
  @ViewChild('sidenav') sidenav: any;

  constructor() { }
  ngOnInit() { }


  isNavOpen = true;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
}
