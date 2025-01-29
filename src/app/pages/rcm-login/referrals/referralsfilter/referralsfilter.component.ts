import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-referralsfilter',
  templateUrl: './referralsfilter.component.html',
  styleUrl: './referralsfilter.component.scss'
})
export class ReferralsfilterComponent {


  constructor(
    public dialogRef: MatDialogRef<ReferralsfilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  buttons = [
    { name: 'Last 10 Days', clicked: true },
    { name: 'This Year', clicked: false },
    { name: 'Last Quarter', clicked: false },
    { name: 'This Month', clicked: false },
    { name: 'Last 6 Months', clicked: false },
    { name: 'Last Year', clicked: false },
    { name: 'Last 2 Years', clicked: false },
    { name: 'All Times', clicked: false }

  ];

  changeColor(index: number) {
    // this.buttons[index].clicked = !this.buttons[index].clicked;
    this.buttons.forEach(button => button.clicked = false);
    this.buttons[index].clicked = true;
  }



  close() {
    this.dialogRef.close();
  }
}

