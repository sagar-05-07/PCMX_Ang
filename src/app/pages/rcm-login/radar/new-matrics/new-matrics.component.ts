import { Component } from '@angular/core';
import { ClaimsvspaidComponent } from '../../patients/claimsvspaid/claimsvspaid.component';
import { VisitsvsclaimsComponent } from '../../patients/visitsvsclaims/visitsvsclaims.component';
import { ReferralvsvisitsComponent } from '../../patients/referralvsvisits/referralvsvisits.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-new-matrics',
  templateUrl: './new-matrics.component.html',
  styleUrl: './new-matrics.component.scss'
})
export class NewMatricsComponent {

  constructor(public dialog: MatDialog) { }

  showCard: boolean ;
 


  // Toggles the flag
  toggleCard() {
    this.showCard = !this.showCard;
  }

  referralvsvisits(){
    this.dialog.open(ReferralvsvisitsComponent, {
      height: 'auto',
      width: '600px'
    });
  }

  visitvsclaims(){
    this.dialog.open(VisitsvsclaimsComponent, {
      height: 'auto',
      width: '600px'
    });
  }

  clamisvspaid() {
     this.dialog.open(ClaimsvspaidComponent, {
      height: 'auto',
      width: '600px'
    });
  }


  users = [
    {
      category: 'Insurance Scheduling',
      context: 'Pending Schedule',
      newToday: 12,
      incomplete: { '12/04': 5, '12/03': 14, '12/02': 10, all: 120, hold: 12 },
      compToday: 7
    },
    {
      category: 'Sub-Acute Trauma',
      context: 'Pending Authorization',
      newToday: 16,
      incomplete: { '12/04': 4, '12/03': 18, '12/02': 15, all: 167, hold: 17 },
      compToday: 12
    },
    {
      category: 'Sub-Acute Trauma',
      context: 'Pending Schedule',
      newToday: 12,
      incomplete: { '12/04': 2, '12/03': 10, '12/02': 11, all: 132, hold: 12 },
      compToday: 10
    },
    {
      category: 'Self Pay',
      context: 'Pending Authorization',
      newToday: 6,
      incomplete: { '12/04': 1, '12/03': 6, '12/02': 5, all: 67, hold: 14 },
      compToday: 5
    },
    {
      category: 'Self Pay',
      context: 'Pending Schedule',
      newToday: 9,
      incomplete: { '12/04': 0, '12/03': 8, '12/02': 7, all: 98, hold: 18 },
      compToday: 9
    },
    {
      category: 'Insurance Variation',
      context: 'Non-Surgical Authorization',
      newToday: 9,
      incomplete: { '12/04': 0, '12/03': 7, '12/02': 8, all: 87, hold: 23 },
      compToday: 9
    },
    {
      category: 'Insurance Variation',
      context: 'Surgical Authorization',
      newToday: 7,
      incomplete: { '12/04': 2, '12/03': 9, '12/02': 9, all: 68, hold: 12 },
      compToday: 5
    },
    {
      category: 'Work Comp',
      context: 'Pending Authorization',
      newToday: 6,
      incomplete: { '12/04': 0, '12/03': 7, '12/02': 7, all: 59, hold: 12 },
      compToday: 6
    },
    {
      category: 'Work Comp',
      context: 'Pending Schedule',
      newToday: 5,
      incomplete: { '12/04': 4, '12/03': 5, '12/02': 6, all: 44, hold: 21 },
      compToday: 5
    },
    {
      category: 'Medical Records Sub Acute',
      context: 'Appointment Expired',
      newToday: 7,
      incomplete: { '12/04': 6, '12/03': 6, '12/02': 6, all: 71, hold: 22 },
      compToday: 1
    },
    {
      category: 'Medical Records Sub Acute',
      context: 'Pending Records',
      newToday: 11,
      incomplete: { '12/04': 4, '12/03': 14, '12/02': 12, all: 81, hold: 18 },
      compToday: 7
    },
  ];

  isFirstInCategory(index: number, data: any[]): boolean {
    return index === 0 || data[index].category !== data[index - 1].category;
  }

  getRowspan(category: string, data: any[]): number {
    return data.filter(item => item.category === category).length;
  }

}
