import { Component } from '@angular/core';
import { ClaimsvspaidComponent } from '../../patients/claimsvspaid/claimsvspaid.component';
import { VisitsvsclaimsComponent } from '../../patients/visitsvsclaims/visitsvsclaims.component';
import { ReferralvsvisitsComponent } from '../../patients/referralvsvisits/referralvsvisits.component';
import { MatDialog } from '@angular/material/dialog';
import { ReferralsfilterComponent } from '../../referrals/referralsfilter/referralsfilter.component';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-new-matrics',
  templateUrl: './new-matrics.component.html',
  styleUrl: './new-matrics.component.scss',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.3s ease-in-out', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('0.3s ease-in-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class NewMatricsComponent {

  constructor(public dialog: MatDialog) { }

  
  showCard: boolean;

  toggleCard() {

    this.showCard = !this.showCard;

    if (!this.showCard) {
      this.showTable = false;
      this.showTable1 = false;
      this.showTable2 = false;
    }
  }



  dataSource = [
    { workList: 'Total Referrals', volume: 120201 },
    { workList: 'Pending Verification', volume: 1875 },
    { workList: 'Pending Authorization', volume: 3790 },
    { workList: 'Delayed', volume: 9078 },
    { workList: 'Denied', volume: 908 },
    { workList: 'Verified NOT AUTH', volume: 8900 },
    { workList: 'AUTH NOT SCH', volume: 890 },
    { workList: 'SCH NOT Verified', volume: 1987 },
    { workList: 'Total SCH Visits', volume: 190234 },
    { workList: 'Visits Per Referral', volume: 1.58 }
  ];


  dataSource1 = [
    { workList: 'Total SCH Visits', volume: 190234 },
    { workList: 'No Show', volume: 20200 },
    { workList: 'Cancelled', volume: 9201 },
    { workList: 'COM Insurance', volume: 12001 },
    { workList: 'Workers Comp', volume: 2908 },
    { workList: 'Self Pay', volume: 7780 },
    { workList: 'Total Claims', volume: 130001 },
    { workList: 'Claims Per SCH Visits', volume: 0.68 },
  ];

  dataSource2 = [
    { workList: 'Total Claims', volume: 130001 },
    { workList: 'Claims Closed', volume: 110000 },
    { workList: 'Claims Dropped', volume: 12800 },
    { workList: 'Deposit Received', volume: 23902 },
    { workList: 'Claims Settled', volume: 95001 },
    { workList: 'Claims Paid', volume: 80001 },
    { workList: 'Value of Claims', volume: 2902091 },
    { workList: 'Payment Received', volume: 1098121 },
    { workList: 'Fraction Paid By Volume', volume: 0.61 },
    { workList: 'Fraction Paid By Value', volume: 0.38 },
  ];

  showTable: boolean = false;
  showTable1: boolean = false;
  showTable2: boolean = false;

  toggleTable(table: string) {
    if (table === 'table') {
      this.showTable = !this.showTable; // Toggle the state
      this.showTable1 = false; // Ensure other tables are closed
      this.showTable2 = false;
    } else if (table === 'table1') {
      this.showTable1 = !this.showTable1; // Toggle the state
      this.showTable = false;
      this.showTable2 = false;
    } else if (table === 'table2') {
      this.showTable2 = !this.showTable2; // Toggle the state
      this.showTable = false;
      this.showTable1 = false;
    }
  }


   referralsFilter(event: MouseEvent): void {

    this.showTable = false;
    this.showTable1 = false;
    this.showTable2 = false;

      const buttonRect = (event.target as HTMLElement).getBoundingClientRect();
      const marginRight = -400; // Adjust this value as needed for the left margin
      const dialogPosition = {
        top: `${buttonRect.bottom}px`,
        left: `${buttonRect.left + marginRight}px`, // Add margin to the left
      };
  
      this.dialog.open(ReferralsfilterComponent, {
        height: 'auto',
        width: '450px',
        position: dialogPosition,
      });
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
