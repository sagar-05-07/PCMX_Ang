import { Component } from '@angular/core';
import { ReferralsfilterComponent } from '../referrals/referralsfilter/referralsfilter.component';
import { MatDialog } from '@angular/material/dialog';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-rcm-funds',
  templateUrl: './rcm-funds.component.html',
  styleUrl: './rcm-funds.component.scss',
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
export class RcmFundsComponent {

  constructor( public dialog: MatDialog,) { }
  ngOnInit() { }


  isNavOpen = true;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  
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
    

}
