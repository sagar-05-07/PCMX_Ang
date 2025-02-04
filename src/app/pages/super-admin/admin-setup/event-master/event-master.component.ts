import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-event-master',
  templateUrl: './event-master.component.html',
  styleUrl: './event-master.component.scss',
})
export class EventMasterComponent {
openproviderdialog(arg0: null) {
throw new Error('Method not implemented.');
}
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
      eventname: 'Case Added Successfully',
      userName: 'Franklin Brothers',
      userType: 'Law Firm',
      eventType: 'Create',
      frequency: '21,109',
      lastInstace: '10-29-2024',
    },
    {
      eventname: 'Case Added Successfully',
      userName: 'John Doe',
      userType: 'Law Firm',
      eventType: 'Update',
      frequency: '29,289',
      lastInstace: '11-19-2024',
    },
    {
      eventname: 'Case Added Successfully',
      userName: 'Jane Smith',
      userType: 'Provider',
      eventType: 'Create',
      frequency: '10,509',
      lastInstace: '05-12-2024',
    },
    {
      eventname: 'Case Added Successfully',
      userName: 'Alice Johnson',
      userType: 'Law Firm',
      eventType: 'Read',
      frequency: '29,289',
      lastInstace: '11-19-2024',
    },
    {
      eventname: 'Case Added Successfully',
      userName: 'Krishna',
      userType: 'Network',
      eventType: 'delete',
      frequency: '35,839',
      lastInstace: '02-26-2024',
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
