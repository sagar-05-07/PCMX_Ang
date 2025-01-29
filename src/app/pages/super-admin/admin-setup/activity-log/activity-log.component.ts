import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrl: './activity-log.component.scss',
})
export class ActivityLogComponent {
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
      eventName: 'Escalation Matrix : Viewed Records',
      userName: 'Sharanya',
      dateTime: '11/20/24, 4:40 AM',
      screenName: 'Escalation Matrix',
      userRole: 'Manager',
      eventType: 'READ',
    },
    {
      eventName: 'Dashboard : Viewed the screen',
      userName: 'Sharanya',
      dateTime: '11/20/24, 4:39 AM',
      screenName: 'Dashboard',
      userRole: 'Manager',
      eventType: 'READ',
    },
    {
      eventName: 'Variant Master : Viewed Records',
      userName: 'Sharanya',
      dateTime: '11/19/24, 12:21 PM',
      screenName: 'Master Data',
      userRole: 'Manager',
      eventType: 'READ',
    },
    {
      eventName: 'Variant Master : Viewed Records',
      userName: 'Sharanya',
      dateTime: '11/19/24, 11:44 AM',
      screenName: 'Master Data',
      userRole: 'Manager',
      eventType: 'READ',
    },
    {
      eventName: 'Model Master : Viewed Records',
      userName: 'Sharanya',
      dateTime: '11/19/24, 11:44 AM',
      screenName: 'Master Data',
      userRole: 'Manager',
      eventType: 'READ',
    },
    {
      eventName: 'Escalation Matrix : Viewed Records',
      userName: 'Sharanya',
      dateTime: '11/19/24, 11:44 AM',
      screenName: 'Escalation Matrix',
      userRole: 'Manager',
      eventType: 'READ',
    },
    {
      eventName: 'Escalation Matrix : Viewed Records',
      userName: 'Sharanya',
      dateTime: '11/19/24, 11:14 AM',
      screenName: 'Escalation Matrix',
      userRole: 'Manager',
      eventType: 'READ',
    },
    {
      eventName: 'Preferences : Viewed Records',
      userName: 'Sharanya',
      dateTime: '11/19/24, 11:00 AM',
      screenName: 'Preferences',
      userRole: 'Manager',
      eventType: 'READ',
    },
    {
      eventName: 'Viewed Users Screen',
      userName: 'Sharanya',
      dateTime: '11/19/24, 10:57 AM',
      screenName: 'Users',
      userRole: 'Manager',
      eventType: 'READ',
    },
    {
      eventName: 'Viewed Users Screen',
      userName: 'Sharanya',
      dateTime: '11/19/24, 10:57 AM',
      screenName: 'Users',
      userRole: 'Manager',
      eventType: 'READ',
    },
  ];
}
