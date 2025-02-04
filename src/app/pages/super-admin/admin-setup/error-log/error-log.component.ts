import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error-log',
  templateUrl: './error-log.component.html',
  styleUrl: './error-log.component.scss'
})
export class ErrorLogComponent {
  eventDetails: Array<any> = [
    {
      Eventname: 'Create',
      Username: 'Satya',
      createddate: '20/03/2022, 6:30 A:M',
      Module: '	Admin',
      Userrole: 'Admin',
      ip: '	192.168.0.115',
      eventtype: '	Create',
    },
    {
      Eventname: 'Update',
      Username: 'Surya',
      createddate: '12/03/2022, 4:00 A:M',
      Module: '	Admin',
      Userrole: 'Manager',
      ip: '	192.168.0.115',
      eventtype: '	Update',
    },
    {
      Eventname: 'Delete',
      Username: 'Sagar',
      createddate: '24/03/2022, 2:30 A:M',
      Module: '	Admin',
      Userrole: 'Admin',
      ip: '	192.168.0.222',
      eventtype: '	Delete',
    },
    {
      Eventname: 'Create',
      Username: 'Sai',
      createddate: '30/03/2022, 3:00 A:M',
      Module: '	Admin',
      Userrole: 'Admin',
      ip: '	192.168.0.115',
      eventtype: '	Create',
    },
    {
      Eventname: 'Delete',
      Username: 'Mohan',
      createddate: '10/03/2022, 7:10 A:M',
      Module: '	Admin',
      Userrole: 'Admin',
      ip: '	192.168.0.115',
      eventtype: '	Delete',
    },
  ];
filterToggle1: boolean;
totalSize: number;
currentPage: number;
filterForm:FormGroup;



isAscending: boolean = true;

toggleSort(event: Event) {
  event.stopPropagation(); // Prevent menu from opening
  this.isAscending = !this.isAscending; // Toggle sort order
}

onSortOptionSelected(option: string) {
  console.log('Selected sort option:', option);
}


}
