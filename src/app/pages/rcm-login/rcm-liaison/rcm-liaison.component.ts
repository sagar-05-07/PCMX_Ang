import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LiaisonsPopComponent } from '../rcm-setup/case-managers/liaisons-pop/liaisons-pop.component';
import { ReferralsfilterComponent } from '../referrals/referralsfilter/referralsfilter.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { LiaisionpopComponent } from '../liaisionpop/liaisionpop.component';



@Component({
  selector: 'app-rcm-liaison',
  templateUrl: './rcm-liaison.component.html',
  styleUrl: './rcm-liaison.component.scss',
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
export class RcmLiaisonComponent {


  filterForm: FormGroup;
  filterToggle: boolean = false;
  currentPage: number = 0;
  totalSize: number = 0;

  roleDetails: Array<any> = [
    { IsActive: true, RoleName: 'Jone Smith', NoofUsers: '11', TotalUsers: '159', permissionCount: '8959', totalPermissionCount: '5899' },
    { IsActive: true, RoleName: 'John Doe', NoofUsers: '12', TotalUsers: '529', permissionCount: '9059', totalPermissionCount: '5990' },
    { IsActive: false, RoleName: 'James Bond', NoofUsers: '13', TotalUsers: '519', permissionCount: '5099', totalPermissionCount: '1259' },
  ];

  constructor(
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void { }

  
  isAscending: boolean = true;

  toggleSort(event: Event) {
    event.stopPropagation(); // Prevent menu from opening
    this.isAscending = !this.isAscending; // Toggle sort order
  }
  
  onSortOptionSelected(option: string) {
    console.log('Selected sort option:', option);
  }

  locationPop(item: any): void {
    this.dialog.open(LiaisionpopComponent, {
      data: item,
      width: '800px',
      height: 'auto'
    });
  }

}
