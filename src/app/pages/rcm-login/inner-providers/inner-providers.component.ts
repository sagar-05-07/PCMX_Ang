import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-inner-providers',
  templateUrl: './inner-providers.component.html',
  styleUrl: './inner-providers.component.scss'
})
export class InnerProvidersComponent {

  session: any;
  gridColumns = [];
  email: any;
  muncipalityOptions = [];
  permissions: Permissions;
  permissionsClient: Permissions;
  filterToggle: boolean = false;
  id: string;
  filterForm: FormGroup;
  public currentPage = 0;
  public totalSize = 0;
  public everyContacts = [];
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
  selectedEventType: string | null = null;
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase(); // Safe casting to HTMLInputElement
    this.filteredEventTypes = this.eventTypes.filter((eventType) =>
      eventType.toLowerCase().includes(filterValue)
    );
  }

  eventTypes1: string[] = [
    'Memorial Group 2',
    'AdvanceDiagnosticsGroup 4',
    'Concho Group 1',
  ];
  filteredEventTypes1: string[] = [...this.eventTypes1];
  selectedEventType1: string | null = null;
  applyFilter1(event: Event): void {
    const filterValue1 = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase(); // Safe casting to HTMLInputElement
    this.filteredEventTypes1 = this.eventTypes1.filter((eventType1) =>
      eventType1.toLowerCase().includes(filterValue1)
    );
  }

  back() {
    // if (confirm('Are you sure you want to go back?')) {
    //   this._location.back();
    // }
    this._location.back();
  }

  eventTypes2: string[] = [
    'Tim David',
    'George',
    'Wayne Parnel',
    'Emily Johnson',
  ];

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
  selectedEventType3: string | null = null;
  applyFilter3(event: Event): void {
    const filterValue2 = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase(); // Safe casting to HTMLInputElement
    this.filteredEventTypes3 = this.eventTypes3.filter((eventType3) =>
      eventType3.toLowerCase().includes(filterValue2)
    );
  }
  // public allContacts = [];
  allContacts = [
    {
      cases: '6',
      claims: '18',
      status: 'Active',
      paitents: '1231',
      referrals: '850',
      visits: '1200',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: '4',
      insurances: '7',
      group: 'AdvanceDiagnosticsGroup 3',
      name: 'Andrew',
      Phone: '(555) 567-8901',
      Email: 'david.martinez@martinezlaw.com',
      Firm: 'Martinez & Associates',
      requests: '75',
      overdue: '2',
      wip: '12',
      pending: '1',
      completed: '61',
      totalbilling: '$6100',
      currentbilling: '$5200',
      city: 'Austin',
    },
    {
      cases: '12',
      claims: '15',
      status: 'Inactive',
      paitents: '1231',
      referrals: '900',
      visits: '1351',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: '7',
      insurances: '6',
      group: 'Concho Group 1',
      name: 'John Russell',
      Phone: '(555) 678-9012',
      Email: ' lisa.wilson@wilsonlegal.com',
      Firm: 'Wilson Legal Group',
      requests: '55',
      overdue: '12',
      wip: '13',
      pending: '0',
      completed: '30',
      totalbilling: '$4500',
      currentbilling: '$3100',
      city: 'Dallas',
    },
    {
      cases: '6',
      claims: '12',
      status: 'Active',
      paitents: '1231',
      referrals: '561',
      visits: '1234',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: '1',
      insurances: '3',
      group: 'AdvanceDiagnosticsGroup 4',
      name: 'William C.Bomer',
      Phone: '(555) 789-0123',
      Email: ' james.taylor@taylorlaw.com',
      Firm: 'Taylor Law Firm',
      requests: '25',
      overdue: '2',
      wip: '10',
      pending: '2',
      completed: '11',
      totalbilling: '$1100',
      currentbilling: '$900',
      city: 'Houston',
    },
    {
      cases: '6',
      claims: '2',
      status: 'Active',
      paitents: '1231',
      referrals: '600',
      visits: '1250',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: '2',
      insurances: '6',
      group: 'Concho Group 4',
      name: 'Chris Waller',
      Phone: '(555) 123-4567',
      Email: 'john.doe@lawfirm.com',
      Firm: 'Doe & Associates',
      requests: '75',
      overdue: '2',
      wip: '12',
      pending: '1',
      completed: '61',
      totalbilling: '$6100',
      currentbilling: '$5200',
      city: 'Austin',
    },
    {
      cases: '6',
      claims: '34',
      status: 'Active',
      paitents: '1231',
      referrals: '900',
      visits: '1562',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: '6',
      insurances: '2',
      group: 'North Runnels Group 3',
      name: 'Chunck James',
      Phone: '(555) 234-5678',
      Email: 'jane.smith@smithlaw.com',
      Firm: 'Smith Legal Services',
      requests: '55',
      overdue: '12',
      wip: '13',
      pending: '0',
      completed: '30',
      totalbilling: '$4500',
      currentbilling: '$3100',
      city: 'Dallas',
    },
    {
      cases: '6',
      claims: '12',
      status: 'Active',
      paitents: '1231',
      referrals: '600',
      visits: '1341',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: '2',
      insurances: '7',
      group: 'AdvanceDiagnosticsGroup 5',
      name: 'Catherina Jefferson',
      Phone: '(555) 345-6789',
      Email: 'michael.johnson@johnsonlaw.com',
      Firm: 'Johnson Law Office',
      requests: '25',
      overdue: '2',
      wip: '10',
      pending: '2',
      completed: '11',
      totalbilling: '$1100',
      currentbilling: '$900',
      city: 'Houston',
    },
  ];
  public searchText: string;
  clientName: string = '';
  constructor(
    public router: Router,
    public dialog: MatDialog,
    public helpdialogRef: MatDialog,
    public datePipe: DatePipe,
    private _location: Location

  ) {
  }
  ngOnInit() {
    //this.id = this.route.snapshot.paramMap.get('id');
    // this.GetMuncipalities();
    this.filterForm.controls['contactDateType'].setValue(1);
    //this.changedatetype(1);
    //this.getcontacts(this.id);
    //this.getcontacts(1, this.pageSize);
    this.getGridColumns();

    // this.getleads();
  }
  redirect() {
    this.router.navigate(['/edit_provider_request']);
  }
  isGridView: boolean = true;

  municipalityOptions = [
    'Toronto',
    'Hamilton',
    'Brampton',
    'Windsor',
    'Kitchener',
  ];
  statusOptions = ['Any', 'Active', 'Inactive'];

  // public opengridColDialog(lead: any) {
  //   let dialogRef = this.dialog.open(ContactsGridColDialogComponent, {
  //     data: lead,
  //     height: 'auto',
  //     width: '600px',
  //   });

  //   dialogRef.afterClosed().subscribe(lead => {
  //     this.getGridColumns();
  //   });
  // }

  GetMuncipalities() {
    // this.manageService.GetMuncipalities().subscribe(
    //   data => {
    //     this.muncipalityOptions = data['Data'];
    //   }
    // );
  }

  public openHelpVideo() {
    // let dialogRef = this.helpdialogRef.open(HelpVideoDialogComponent, {
    //   data: id,
    //   height: 'auto',
    //   width: '850px'
    // });
    // dialogRef.afterClosed().subscribe(data => {
    // });
  }
  colorOptions = ['Green', 'Blue', 'Gray', 'Red'];
  colorOptionSelected: any;

  onColorOptionsSelected(event: any) {
    console.log(event); //option value will be sent as event
  }

  // public opencontactDialog(contact: any) {
  //   let dialogRef = this.dialog.open(ContactsDialogComponent, {
  //     data: contact,
  //     height: 'auto',
  //     width: '950px',
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //     //this.getcontacts(this.id);
  //     // this.getcontacts((this.currentPage * this.pageSize) + 1, (this.currentPage * this.pageSize) + this.pageSize);
  //   });
  // }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    // this.pageSize = e.pageSize;
    //  this.getcontacts((this.currentPage * this.pageSize) + 1, (this.currentPage * this.pageSize) + this.pageSize);
    //this.allContacts = this.everyContacts.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }
  filterData: any = new Object();
  filterBy(filter: any) {
    this.filterData = filter;
  }

  sortData(sort: Sort) {
    const data = this.allContacts.slice();
    if (!sort.active || sort.direction === '') {
      this.allContacts = data;
      return;
    }
  }

  public compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  ResetContacts() {
    this.filterForm.reset();
    this.filterData = new Object();
  }
  public getcontacts(startIndex: number, endIndex: any) {
    this.filterData['StartIndex'] = startIndex;
    this.filterData['EndIndex'] = endIndex;
    this.filterData['clientId'] = this.id;
    this.filterData['contactbtStatus'] =
      this.filterData['contactbtStatus'] == 0
        ? null
        : this.filterData['contactbtStatus'] == 1
          ? true
          : this.filterData['contactbtStatus'] == 2
            ? false
            : this.filterData['contactbtStatus'];
  }

  changeContactStatus(data: any) {
    data.contactbtStatus = !data.contactbtStatus;
    data.modifiedBy = this.session['UserDetails'].int_user_id;
  }

  deleteModalToggle() { }
  getGridColumns() { }

  scrollTable() {
  }

  public openAddClientDialog() {
    // let dialogRef = this.dialog.open(ClientsDialogComponent, {
    //   data: oppurtunity,
    //   height: 'auto',
    //   width: '850px',
    // });
    // dialogRef.afterClosed().subscribe((oppurtunity: any) => {
    //   if (oppurtunity) {
    //     // (campaign.id) ? this.updateCampaign(campaign) : this.addCampaign(campaign);
    //   }
    // });
  }

  excelData: any[];
  exportAsExcel() {
    console.log(this.allContacts, 'Whole Data');
    this.excelData = [];
  }

  // public openConfirmDialog(action: any, value: any, name: any) {
  //   let dialogRef = this.dialog.open(ContactsDialogComponent, {
  //     data: { 'action': action, 'value': value, 'name': name },
  //   });

  //   dialogRef.afterClosed().subscribe(account => {
  //     this.dialog.closeAll();
  //     return account;
  //   });
  // }
  public openproviderdialog(id: any) {
    // console.log('jkhksbdjk');
    // let dialogRef = this.dialog.open(ProviderdialogComponent, {
    //   data: id,
    //   height: 'auto',
    //   width: '900px',
    // });
    // dialogRef.afterClosed().subscribe(() => { });
  }

  public openproviderdialoge(id: any) {
    console.log('jkhksbdjk');
    // let dialogRef = this.dialog.open(GridColumnComponent, {
    //   data: id,
    //   height: 'auto',
    //   width: '900px',
    // });
    // dialogRef.afterClosed().subscribe(() => { });
  }

  options: string[] = [
    'Aetna',
    'Cigna',
    'UnitedHealthCare',
    'Cigna Health Spring',
  ];
  filteredOptions: string[] = [...this.options];
  selectedOption: string | null = null;

  applyFilters(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredOptions = this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  scrollGrid(side: 'left' | 'right') {
    const ele = document.getElementById('grid-table-container');
    const scrollAmount = 210; // Adjust this value as needed

    if (ele) {
      // Check if ele is not null
      if (side === 'right') {
        ele.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      } else {
        ele.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    }
  }
}
