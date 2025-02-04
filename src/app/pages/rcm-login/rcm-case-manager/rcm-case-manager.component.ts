import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LiaisonsPopComponent } from '../rcm-setup/case-managers/liaisons-pop/liaisons-pop.component';
import { ReferralsfilterComponent } from '../referrals/referralsfilter/referralsfilter.component';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-rcm-case-manager',
  templateUrl: './rcm-case-manager.component.html',
  styleUrls: ['./rcm-case-manager.component.scss'],
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
export class RcmCaseManagerComponent implements OnInit {



  filterForm: FormGroup;
  filterToggle: boolean = false;
  currentPage: number = 0;
  totalSize: number = 0;

  roleDetails: Array<any> = [
    { IsActive: true, RoleName: 'James Bond', NoofUsers: '11', TotalUsers: '159', permissionCount: '8959', totalPermissionCount: '5899' },
    { IsActive: true, RoleName: 'John Doe', NoofUsers: '12', TotalUsers: '529', permissionCount: '9059', totalPermissionCount: '5990' },
    { IsActive: false, RoleName: 'Jone Smith', NoofUsers: '31', TotalUsers: '519', permissionCount: '5099', totalPermissionCount: '1259' },
  ];

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.filterForm = this.fb.group({
      Role: new FormControl(''),
      Keyword: new FormControl('')
    });
  }

  
  isAscending: boolean = true;

  toggleSort(event: Event) {
    event.stopPropagation(); // Prevent menu from opening
    this.isAscending = !this.isAscending; // Toggle sort order
  }
  
  onSortOptionSelected(option: string) {
    console.log('Selected sort option:', option);
  }

  ngOnInit(): void { }

  locationPop(item: any): void {
    this.dialog.open(LiaisonsPopComponent, {
      data: item,
      width: '800px',
      height: 'auto'
    });
  }

}
