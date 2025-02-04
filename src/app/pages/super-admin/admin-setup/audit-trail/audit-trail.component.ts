import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-audit-trail',
  templateUrl: './audit-trail.component.html',
  styleUrl: './audit-trail.component.scss',
})
export class AuditTrailComponent {
  opensalesDialog(arg0: null) {
    throw new Error('Method not implemented.');
  }
  public currentPage = 0;
  public totalSize = 0;
  filterToggle1: boolean;
  filterToggle: boolean;
  filterForm: FormGroup;

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
  }

  public opencontactDialog(contact: any) {
    // let dialogRef = this.dialog.open(ContactsDialogComponent, {
    //   data: contact,
    //   height: 'auto',
    //   width: '500px',
    // });
    // dialogRef.afterClosed().subscribe((data) => {
    //   //this.getcontacts(this.id);
    //   // this.getcontacts((this.currentPage * this.pageSize) + 1, (this.currentPage * this.pageSize) + this.pageSize);
    // });
  }

  // settings
  tableData = [
    {
      userType: 'Law Firm',
      eventName: 'Case Added Successfully',
      userName: 'Franklin Brothers',
      dateTime: '11/20/24, 4:40 AM',
      screenName: 'Escalation Matrix',
      userRole: 'Manager',
      eventType: 'READ',
    },
    {
      userType: 'Provider',
      eventName: 'Case Added Successfully',
      userName: 'Sharanya K',
      dateTime: '11/20/24, 4:39 AM',
      screenName: 'Dashboard',
      userRole: 'Manager',
      eventType: 'READ',
    },
    {
      userType: 'Network',
      eventName: 'Case Added Successfully',
      userName: 'Radha Krishna',
      dateTime: '11/19/24, 12:21 PM',
      screenName: 'Master Data',
      userRole: 'Manager',
      eventType: 'READ',
    },
    {
      userType: 'Law Firm',
      eventName: 'Case Added Successfully',
      userName: 'Sai Kumar',
      dateTime: '11/19/24, 11:44 AM',
      screenName: 'Master Data',
      userRole: 'Manager',
      eventType: 'READ',
    },
    {
      userType: 'Law Firm',
      eventName: 'Case Added Successfully',
      userName: 'Navin Malik',
      dateTime: '11/19/24, 11:44 AM',
      screenName: 'Master Data',
      userRole: 'Manager',
      eventType: 'READ',
    },
    {
      userType: 'Network',
      eventName: 'Case Added Successfully',
      userName: 'Vamshi Krishna',
      dateTime: '11/19/24, 11:44 AM',
      screenName: 'Escalation Matrix',
      userRole: 'Manager',
      eventType: 'READ',
    },
    {
      userType: 'Provider',
      eventName: 'Case Added Successfully',
      userName: 'Sharanya K',
      dateTime: '11/19/24, 11:14 AM',
      screenName: 'Escalation Matrix',
      userRole: 'Manager',
      eventType: 'READ',
    },
  ];



  
  isAscending: boolean = true;

  toggleSort(event: Event) {
    event.stopPropagation(); // Prevent menu from opening
    this.isAscending = !this.isAscending; // Toggle sort order
  }
  
  onSortOptionSelected(option: string) {
    console.log('Selected sort option:', option);
  }



}
