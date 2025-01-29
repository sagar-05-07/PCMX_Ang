import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rcm-setup',
  templateUrl: './rcm-setup.component.html',
  styleUrl: './rcm-setup.component.scss'
})
export class RcmSetupComponent {

  @ViewChild('sidenav') sidenav: any;

  constructor() { }
  ngOnInit() { }


  isNavOpen = true;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

}
