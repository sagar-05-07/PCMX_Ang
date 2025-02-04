import { Component } from '@angular/core';

@Component({
  selector: 'app-referral-radar',
  templateUrl: './referral-radar.component.html',
  styleUrl: './referral-radar.component.scss'
})
export class ReferralRadarComponent {

  // isClicked: number = 1; // Start from 'Scheduled'

  // nextStep(step: number) {
  //   if (this.isClicked === step - 1) {
  //     this.isClicked = step;
  //   }
  // }


  isClicked: number | null = null; // Currently active button
  clickedButtons: { [key: number]: boolean } = {}; // Track clicked buttons

  nextStep(step: number) {
    if (!this.clickedButtons[step]) {
      this.isClicked = step; // Activate the clicked button
      this.clickedButtons[step] = true; // Disable the button after click
    }
  }

  rectangleColor = 'red';

  changeColor() {
    this.rectangleColor = this.rectangleColor === 'red' ? 'gray' : 'red'; 
  }

  // isClicked: number | null = null;

  // toggleColor(index: number) {
  //   this.isClicked = this.isClicked === index ? null : index; // If the same button is clicked again, it unclicks it.
  // }

  isClicked1 =false

  toggleColor1(){
    this.isClicked1 = !this.isClicked1;
  }
  
  

  selectedTab: 'overview' | 'diagnosis' | 'moreInfo' | 'resolve' | 'specialties' = 'overview';
  selectTab(tab: 'overview' | 'diagnosis' | 'moreInfo' | 'resolve' | 'specialties') {
    this.selectedTab = tab;
  }

  addRow() {
    this.rows.push({ category: '', specialty: '', subSpecialty: '' });
  }

  rows: any[] = [
    { category: 'Medical', specialty: 'Primary Care', subSpecialty: 'OBGYN' },
    { category: 'Surgery/Procedures', specialty: 'General', subSpecialty: '' }
  ];


}
