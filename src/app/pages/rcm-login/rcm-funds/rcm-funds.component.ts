import { Component } from '@angular/core';

@Component({
  selector: 'app-rcm-funds',
  templateUrl: './rcm-funds.component.html',
  styleUrl: './rcm-funds.component.scss'
})
export class RcmFundsComponent {

  constructor() { }
  ngOnInit() { }


  isNavOpen = true;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

}
