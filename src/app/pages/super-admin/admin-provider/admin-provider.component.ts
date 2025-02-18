import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '../../breadcrumb.service';
import { UserService } from '../../login/user.service';
import { ProviderdialogComponent } from './providerdialog/providerdialog.component';
import { GridProviderComponent } from './grid-provider/grid-provider.component';
import { InsuranceDialogComponent } from '../rcm-accounts/insurance-dialog/insurance-dialog.component';
import { NetworkDialogComponent } from './network-dialog/network-dialog.component';
import { AdmnProviderSpecialtyComponent } from './admn-provider-specialty/admn-provider-specialty.component';
import { FilterSaveComponent } from 'src/app/shared/filter-save/filter-save.component';

@Component({
  selector: 'app-admin-provider',
  templateUrl: './admin-provider.component.html',
  styleUrl: './admin-provider.component.scss',
})
export class AdminProviderComponent {
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

  eventTypes2: string[] = [
    'Chris Waller',
    'Chunck James	',
    'Andrew',
    'Chunck James	',
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
      status: 'Active',
      paitents: '1231',
      referrals: '600',
      visits: '925',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: '4',
      insurances: '3',
      group: 'AdvanceDiagnosticsGroup 1',
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
      names: 'WorkWell, TX'
    },
    {
      status: 'Active',
      paitents: '1231',
      referrals: '246',
      visits: '792',
      category: '5',
      speciality: '8',
      subSpecialty: '18',
      networks: '1',
      insurances: '5',
      group: 'Hamilton Group 1',
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
      names: 'Liberty Health Care Network'
    },
    {
      status: 'Inactive',
      paitents: '1231',
      referrals: '903',
      visits: '1500',
      category: '24',
      speciality: '8',
      subSpecialty: '18',
      networks: '6',
      insurances: '2',
      group: 'Memorial Group 2',
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
      names: 'GENEX Health Care Network'
    },
    {
      status: 'Active',
      paitents: '1231',
      referrals: '600',
      visits: '925',
      category: '38',
      speciality: '8',
      subSpecialty: '18',
      networks: '4',
      insurances: '3',
      group: 'AdvanceDiagnosticsGroup 2',
      name: 'Bennett Pugh',
      Phone: ' (555) 456-7890',
      Email: 'emily.brown@brownlawfirm.com',
      Firm: 'Brown & Partners',
      requests: '90',
      overdue: '10',
      wip: '20',
      pending: '10',
      completed: '50',
      totalbilling: '$7500',
      currentbilling: '$5800',
      city: 'San Antonio',
      names: 'First Health / CSS HCN'
    },
    {
      status: 'Active',
      paitents: '1231',
      referrals: '850',
      visits: '1200',
      category: '8',
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
      names: 'Argus Provider Network'
    },
    {
      status: 'Inactive',
      paitents: '1231',
      referrals: '900',
      visits: '1351',
      category: '12',
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
      names: 'Caramor TX HCN'
    },
    {
      status: 'Active',
      paitents: '1231',
      referrals: '561',
      visits: '1234',
      category: '20',
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
      names: 'Texas Star Network'
    },
    {
      status: 'Active',
      paitents: '1231',
      referrals: '600',
      visits: '1250',
      category: '13',
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
      names: 'The Lone Star Network'
    },
    {
      status: 'Active',
      paitents: '1231',
      referrals: '900',
      visits: '1562',
      category: '32',
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
      names: 'Texas Star Network'
    },
    {
      status: 'Active',
      paitents: '1231',
      referrals: '600',
      visits: '1341',
      category: '42',
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
      names: 'Baylor Scott & White Health'
    },
    {
      status: 'Active',
      paitents: '1231',
      referrals: '760',
      visits: '1552',
      category: '52',
      speciality: '8',
      subSpecialty: '18',
      networks: '7',
      insurances: '2',
      group: 'North Runnels Group 3',
      name: 'Bennett Pugh',
      Phone: ' (555) 456-7890',
      Email: 'emily.brown@brownlawfirm.com',
      Firm: 'Brown & Partners',
      requests: '90',
      overdue: '10',
      wip: '20',
      pending: '10',
      completed: '50',
      totalbilling: '$7500',
      currentbilling: '$5800',
      city: 'San Antonio',
      names: 'Tenet Healthcare '
    },
    {
      status: 'Active',
      paitents: '1231',
      referrals: '440',
      visits: '1025',
      category: '12',
      speciality: '8',
      subSpecialty: '18',
      networks: '2',
      insurances: '6',
      group: 'North Runnels Group 3',
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
      names: 'Argus Provider Network'
    },
    {
      status: 'Active',
      paitents: '1231',
      referrals: '600',
      visits: '1225',
      category: '32',
      speciality: '8',
      subSpecialty: '18',
      networks: '4',
      insurances: '3',
      group: 'North Runnels Group 3',
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
      names: 'Caramor TX HCN'
    },
    {
      status: 'Active',
      paitents: '1231',
      referrals: '860',
      visits: '1343',
      category: '10',
      speciality: '8',
      subSpecialty: '18',
      networks: '4',
      insurances: '5',
      group: 'Memorial Group 4',
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
      names: 'GENEX Health Care Network'
    },
  ];
  public searchText: string;
  clientName: string = '';
  constructor(
    public router: Router,
    private userService: UserService,
    private _breadcrumbService: BreadcrumbService,
    public dialog: MatDialog,
    private ref: ChangeDetectorRef,
    private _fb: FormBuilder,
    public helpdialogRef: MatDialog,
    public datePipe: DatePipe,
    private route: ActivatedRoute
  ) {
    this.filterForm = this._fb.group({
      contactMunicipalityID: [null],
      contactbtStatus: [null],
      contactDateType: [null],
      fromDate: [null],
      toDate: [null],
      keyword: [null],
      contactPrimary: [null],
      contactBilling: [null],
    });
    // this.session = JSON.parse(localStorage.getItem("userloginsession"));
    // this.permissions = this._globalMethods.checkPermissions('Manage contacts', 'Manage');
    // this.permissionsClient = this._globalMethods.checkPermissions('Manage clients', 'Manage');
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

  public openHelpVideo(id: any) {
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

  deleteModalToggle(value: any) { }
  getGridColumns() { }

  scrollTable(side: any) {
    var table = document.getElementById('divTable');
  }

  public openAddClientDialog(oppurtunity: any) {
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
    console.log('jkhksbdjk');
    let dialogRef = this.dialog.open(ProviderdialogComponent, {
      data: id,
      height: 'auto',
      width: '900px',
    });
    dialogRef.afterClosed().subscribe((data) => { });
  }

  public openNetworks(id: any) {
    console.log('jkhksbdjk');
    let dialogRef = this.dialog.open(NetworkDialogComponent, {
      data: id,
      height: 'auto',
      width: '900px',
    });
    dialogRef.afterClosed().subscribe((data) => { });
  }

  public openSpecialties(id: any) {
    console.log('jkhksbdjk');
    let dialogRef = this.dialog.open(AdmnProviderSpecialtyComponent, {
      data: id,
      height: 'auto',
      width: '900px',
    });
    dialogRef.afterClosed().subscribe((data) => { });
  }

  public openproviderdialoge(id: any) {
    console.log('jkhksbdjk');
    let dialogRef = this.dialog.open(GridProviderComponent, {
      data: id,
      height: 'auto',
      width: '900px',
    });
    dialogRef.afterClosed().subscribe((data) => { });
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


  openPatients() {
    this.router.navigate(['super-admin/rcm-accounts/patients']);
  }

  openReferreals() {
    this.router.navigate(['super-admin/rcm-accounts/referrals']);
  }
  openVisits() {
    this.router.navigate(['super-admin/rcm-accounts/visits']);

  }


  public openinsurancedialog(id: any) {
    console.log('jkhksbdjk');
    let dialogRef = this.dialog.open(InsuranceDialogComponent, {
      data: id,
      height: 'auto',
      width: '900px',
    });
    dialogRef.afterClosed().subscribe((data) => { });
  }

  openlocations() {
    this.router.navigate(['super-admin/rcm-accounts/locations']);
  }



  isAscending: boolean = true;

  toggleSort(event: Event) {
    event.stopPropagation(); // Prevent menu from opening
    this.isAscending = !this.isAscending; // Toggle sort order
  }
  
  onSortOptionSelected(option: string) {
    console.log('Selected sort option:', option);
  }


  eventTypes5: string[] = [
    'Tenet Healthcare	',
    'CHRISTUS Health	',
    'Nutex Health	',
    'Oceans Healthcare	',
  ];
  filteredEventTypes5: string[] = [...this.eventTypes5];
  selectedEventType5: string | null = null;
  applyFilter5(event: Event): void {
    const filterValue5 = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase(); // Safe casting to HTMLInputElement
    this.filteredEventTypes5 = this.eventTypes5.filter((eventType5) =>
      eventType5.toLowerCase().includes(filterValue5)
    );
  }


  saveFilters() {
    this.dialog.open(FilterSaveComponent, {
      height: 'auto',
      width: '450px'
    });
  }

}
