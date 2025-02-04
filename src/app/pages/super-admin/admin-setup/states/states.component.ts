import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStatesComponent } from './add-states/add-states.component';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrl: './states.component.scss'
})
export class StatesComponent {
  public currentPage = 0;
  public totalSize = 0;
  filterToggle:boolean=false;
  constructor( public dialog: MatDialog) { }
  feesetup = [{ taxrate: '5', billingExpedited: '5', medicalExpedited: '5', cities: '8', 'name': 'Texas', code: 'TX', 'fee': '2/6', 'platform': '30', 'billing': '25', 'medical': '25', 'pages': '25', 'expedited': '150' },
    { taxrate: '10', billingExpedited: '5', medicalExpedited: '5', cities: '6', 'name': 'California', code: 'CL', 'fee': '4/6', 'platform': '30', 'billing': '25', 'medical': '25', 'pages': '25', 'expedited': '150' },
    { taxrate: '8', billingExpedited: '5', medicalExpedited: '5', cities: '3', 'name': 'Florida', code: 'FL', 'fee': '6/6', 'platform': '30', 'billing': '25', 'medical': '25', 'pages': '25', 'expedited': '150' },
    { taxrate: '5', billingExpedited: '5', medicalExpedited: '5', cities: '9', 'name': 'Hawaii', code: 'HAW', 'fee': '5/6', 'platform': '30', 'billing': '25', 'medical': '25', 'pages': '25', 'expedited': '150' },
    { taxrate: '10', billingExpedited: '5', medicalExpedited: '5', cities: '4', 'name': 'Idaho', code: 'ID', 'fee': '1/6', 'platform': '30', 'billing': '25', 'medical': '25', 'pages': '25', 'expedited': '150' },
    { taxrate: '5', billingExpedited: '5', medicalExpedited: '5', cities: '3', 'name': 'Ohio', code: 'OH', 'fee': '6/6', 'platform': '30', 'billing': '25', 'medical': '25', 'pages': '25', 'expedited': '150' },
    { taxrate: '6', billingExpedited: '5', medicalExpedited: '5', cities: '1', 'name': 'Alaska', code: 'AL', 'fee': '2/6', 'platform': '30', 'billing': '25', 'medical': '25', 'pages': '25', 'expedited': '150' },
    { taxrate: '8', billingExpedited: '5', medicalExpedited: '5', cities: '5', 'name': 'Arizona', code: 'AR', 'fee': '3/6', 'platform': '30', 'billing': '25', 'medical': '25', 'pages': '25', 'expedited': '150' },
    { taxrate: '5', billingExpedited: '5', medicalExpedited: '5', cities: '8', 'name': 'Virginia', code: 'TX', 'fee': '4/6', 'platform': '30', 'billing': '25', 'medical': '25', 'pages': '25', 'expedited': '150' }
    ]

    states: Array<any> = [
      { setup: "Custodian Fee for physician", UserName: "Admin", UserEmail: "Admin@optionmatrix.com", UserPhone: "9834578945", RoleName: "	Admin", rolescreens: "10", totalscreens: "56", splperm: "5", totalspl: "16", IsActive: 'true' },
      { setup: "Sales Tax Rate", UserName: "Test Pavan", UserEmail: "Pavan@optionmatrix.com", UserPhone: "9584672150", RoleName: "	Tester", rolescreens: "21", totalscreens: "56", splperm: "8", totalspl: "16" },
      { setup: "Custodian Fee for physician	", UserName: "Satya", UserEmail: "Satya@optionmatrix.com", UserPhone: "7070938861", RoleName: "Developer", rolescreens: "43", totalscreens: "56", splperm: "6", totalspl: "16", IsActive: 'true' },
      { setup: "Sales Tax Rate", UserName: "Surya", UserEmail: "Surya@optionmatrix.com", UserPhone: "9365874152", RoleName: "Developer", rolescreens: "53", totalscreens: "56", splperm: "11", totalspl: "16" },
    ];
  public openstateDialog(contact: any) {
    let dialogRef = this.dialog.open(AddStatesComponent, {
      data: contact,
      height: 'auto',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(data => {
      //this.getcontacts(this.id);
      // this.getcontacts((this.currentPage * this.pageSize) + 1, (this.currentPage * this.pageSize) + this.pageSize);
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

}
