import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-law-setup',
  templateUrl: './law-setup.component.html',
  styleUrl: './law-setup.component.scss'
})
export class LawSetupComponent {
  @ViewChild('sidenav') sidenav: any;

  constructor() { }
  ngOnInit() { }


  isNavOpen = true;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
}

