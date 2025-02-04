import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddInsuranceComponent } from './add-insurance/add-insurance.component';

@Component({
  selector: 'app-insurance-groups',
  templateUrl: './insurance-groups.component.html',
  styleUrl: './insurance-groups.component.scss'
})
export class InsuranceGroupsComponent {


  filterToggle:boolean=false
  eventDetails: Array<any> = [
    {
      insuranceCompany: 'Nationwide Insurance',
      providers: '700',
      status:'Active',
     
    },
    {
      insuranceCompany: 'Cigna',
      providers: '700',
      status:'Active',
    },
    {
      insuranceCompany: 'American Family Insurance',
      providers: '900',
      status:'Active',
    },
    {
      insuranceCompany: 'Erie Insurance',
      providers: '1200',
      status:'Active',
     
    },
    {
      insuranceCompany: 'Farmers Insurance',
      providers: '750',     
      status:'Active',
    },
    {
      insuranceCompany: 'State Farm',
      providers: '1500',
      status:'Inactive',
    },
    {
      insuranceCompany: 'AIG',
      providers: '900',
      status:'Active',
    },
    {
      insuranceCompany: 'Nationwide Insurance',
      providers: '1500',
      status:'Active',
     
    },
   
  ];
filterToggle1: boolean;
totalSize: number;
currentPage: number;
filterForm:FormGroup;
selectedEventType3: string | null = null;
selectedEventType: string | null = null;



eventTypes: string[] = [
  'Hamilton',
  'Beeville',
  'Houston',
  'Delete',
  'Refugio',
  'Winters',
  'Sweeny',
];
filteredEventTypes: string[] = [...this.eventTypes];

eventTypes3: string[] = [
  'Texas',
  'California',
  'Florida',
  'Virginia',
  'Alaska',
  'Hawaii',
  'Ohio',
];
filteredEventTypes3: string[] = [...this.eventTypes3];
applyFilter3(event: Event): void {
  const filterValue2 = (event.target as HTMLInputElement).value
    .trim()
    .toLowerCase(); // Safe casting to HTMLInputElement
  this.filteredEventTypes3 = this.eventTypes3.filter((eventType3) =>
    eventType3.toLowerCase().includes(filterValue2)
  );
}

applyFilter(event: Event): void {
  const filterValue = (event.target as HTMLInputElement).value
    .trim()
    .toLowerCase(); // Safe casting to HTMLInputElement
  this.filteredEventTypes = this.eventTypes.filter((eventType) =>
    eventType.toLowerCase().includes(filterValue)
  );
}


isAscending: boolean = true;

toggleSort(event: Event) {
  event.stopPropagation(); // Prevent menu from opening
  this.isAscending = !this.isAscending; // Toggle sort order
}

onSortOptionSelected(option: string) {
  console.log('Selected sort option:', option);
}

eventTypes2: string[] = [
  'Tenet Healthcare	',
  'CHRISTUS Health	',
  'Nutex Health	',
  'Oceans Healthcare	',
];
filteredEventTypes2: string[] = [...this.eventTypes2];
selectedEventType2: string | null = null;
applyFilter2(event: Event): void {
  const filterValue2 = (event.target as HTMLInputElement).value
    .trim()
    .toLowerCase(); // Safe casting to HTMLInputElement
  this.filteredEventTypes2 = this.eventTypes2.filter((eventType2) =>
    eventType2.toLowerCase().includes(filterValue2)
  );
}


constructor(public dialog: MatDialog) {}

public openproviderdialog(id: any) {
  console.log('jkhksbdjk');
  let dialogRef = this.dialog.open(AddInsuranceComponent, {
    data: id,
    height: 'auto',
    width: '600px',
  });
  dialogRef.afterClosed().subscribe((data: any) => {});
}
}



