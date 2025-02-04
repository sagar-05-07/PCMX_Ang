import { Component } from '@angular/core';
import { AddCitiesComponent } from './add-cities/add-cities.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.scss'
})
export class CitiesComponent {
  filterToggle:boolean=false;
  public currentPage = 0;
  public totalSize = 0;

constructor( public dialog: MatDialog) { }

    cities = [{ state: 'Texas', 'name': 'Houston', 'fee': '2/6', 'platform': '30', 'billing': '25', 'medical': '25', 'pages': '25', 'expedited': '150' },
      { state: 'Texas', 'name': 'Dallas', 'fee': '4/6', 'platform': '30', 'billing': '25', 'medical': '25', 'pages': '25', 'expedited': '150' },
      { state: 'Texas', 'name': 'Austin', 'fee': '6/6', 'platform': '30', 'billing': '25', 'medical': '25', 'pages': '25', 'expedited': '150' },
      { state: 'Texas', 'name': 'San Antonio', 'fee': '5/6', 'platform': '30', 'billing': '25', 'medical': '25', 'pages': '25', 'expedited': '150' },
      { state: 'Texas', 'name': 'Galveston', 'fee': '1/6', 'platform': '30', 'billing': '25', 'medical': '25', 'pages': '25', 'expedited': '150' },
      { state: 'Texas', 'name': 'Arlington', 'fee': '6/6', 'platform': '30', 'billing': '25', 'medical': '25', 'pages': '25', 'expedited': '150' },
      { state: 'Texas', 'name': 'Corpos Cristy', 'fee': '2/6', 'platform': '30', 'billing': '25', 'medical': '25', 'pages': '25', 'expedited': '150' },
      { state: 'Texas', 'name': 'Fort Orth', 'fee': '3/6', 'platform': '30', 'billing': '25', 'medical': '25', 'pages': '25', 'expedited': '150' },
      { state: 'Texas', 'name': 'Amarillo', 'fee': '4/6', 'platform': '30', 'billing': '25', 'medical': '25', 'pages': '25', 'expedited': '150' }
      ]

      states: Array<any> = [
        { setup: "Custodian Fee for physician", UserName: "Admin", UserEmail: "Admin@optionmatrix.com", UserPhone: "9834578945", RoleName: "	Admin", rolescreens: "10", totalscreens: "56", splperm: "5", totalspl: "16", IsActive: 'true' },
        { setup: "Sales Tax Rate", UserName: "Test Pavan", UserEmail: "Pavan@optionmatrix.com", UserPhone: "9584672150", RoleName: "	Tester", rolescreens: "21", totalscreens: "56", splperm: "8", totalspl: "16" },
        { setup: "Custodian Fee for physician	", UserName: "Satya", UserEmail: "Satya@optionmatrix.com", UserPhone: "7070938861", RoleName: "Developer", rolescreens: "43", totalscreens: "56", splperm: "6", totalspl: "16", IsActive: 'true' },
        { setup: "Sales Tax Rate", UserName: "Surya", UserEmail: "Surya@optionmatrix.com", UserPhone: "9365874152", RoleName: "Developer", rolescreens: "53", totalscreens: "56", splperm: "11", totalspl: "16" },
      ];

  public opencityDialog(contact: any) {
    let dialogRef = this.dialog.open(AddCitiesComponent, {
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
