import { Component } from '@angular/core';

@Component({
  selector: 'app-pro-setup',
  templateUrl: './pro-setup.component.html',
  styleUrl: './pro-setup.component.scss'
})
export class ProSetupComponent {


  constructor() { }
  ngOnInit() { }


  isNavOpen = true;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

}
