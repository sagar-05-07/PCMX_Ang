import { Component } from '@angular/core';

@Component({
  selector: 'app-visit-radar',
  templateUrl: './visit-radar.component.html',
  styleUrl: './visit-radar.component.scss'
})
export class VisitRadarComponent {

  rectangleColor = 'red';

  changeColor() {
    this.rectangleColor = this.rectangleColor === 'red' ? 'gray' : 'red'; 
  }


  isClicked: number | null = null;

  toggleColor(index: number) {
    this.isClicked = this.isClicked === index ? null : index; // If the same button is clicked again, it unclicks it.
  }

  isClicked1 =false

  toggleColor1(){
    this.isClicked1 = !this.isClicked1;
  }

  
  isClickedgray: number | null = null;

  toggleColorgray(index: number) {
    this.isClickedgray = this.isClickedgray === index ? null : index; // If the same button is clicked again, it unclicks it.
  }





  selectedTab: 'overview' |'diagnosis' | 'moreInfo' | 'resolve' | 'specialties' = 'overview';
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


  isVerifiedActive = false;
  isAuthorizeActive = false;
  isAuthorizeClaimed = false;

  toggleButton(buttonType: string) {
    if (buttonType === 'verified') {
      this.isVerifiedActive = !this.isVerifiedActive; // Toggle state
    } else if (buttonType === 'authorize') {
      this.isAuthorizeActive = !this.isAuthorizeActive; // Toggle state
    } else if (buttonType === 'claimed') {
      this.isAuthorizeClaimed = !this.isAuthorizeClaimed; // Toggle state
    }
  }



}
