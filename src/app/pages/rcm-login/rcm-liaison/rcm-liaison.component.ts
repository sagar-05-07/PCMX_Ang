import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LiaisonsPopComponent } from '../rcm-setup/case-managers/liaisons-pop/liaisons-pop.component';

@Component({
  selector: 'app-rcm-liaison',
  templateUrl: './rcm-liaison.component.html',
  styleUrl: './rcm-liaison.component.scss'
})
export class RcmLiaisonComponent {

  filterForm: FormGroup;
  filterToggle: boolean = false;
  currentPage: number = 0;
  totalSize: number = 0;

  roleDetails: Array<any> = [
    { IsActive: true, RoleName: 'Jone Smith', NoofUsers: 'James Bond', TotalUsers: '159', permissionCount: '8959', totalPermissionCount: '5899' },
    { IsActive: true, RoleName: 'John Doe', NoofUsers: 'Sarah Mitchell', TotalUsers: '529', permissionCount: '9059', totalPermissionCount: '5990' },
    { IsActive: false, RoleName: 'James Bond', NoofUsers: 'Emily Certer', TotalUsers: '519', permissionCount: '5099', totalPermissionCount: '1259' },
  ];

  constructor(
    public dialog: MatDialog,
  ) {
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
