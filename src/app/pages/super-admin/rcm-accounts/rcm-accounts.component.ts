import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '../../breadcrumb.service';
import { UserService } from '../../login/user.service';
import { ProviderdialogComponent } from '../admin-provider/providerdialog/providerdialog.component';
import { NetworkdialogComponent } from './networkdialog/networkdialog.component';
import { GridNetworkComponent } from './grid-network/grid-network.component';
import { InsuranceDialogComponent } from './insurance-dialog/insurance-dialog.component';
import { AdminLawfirmDialogComponent } from './admin-lawfirm-dialog/admin-lawfirm-dialog.component';
import { ProviderDialogeboxComponent } from './provider-dialogebox/provider-dialogebox.component';

@Component({
  selector: 'app-rcm-accounts',
  templateUrl: './rcm-accounts.component.html',
  styleUrl: './rcm-accounts.component.scss',
})
export class RcmAccountsComponent {
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
      cases: '920',
      locations: '300',
      status: 'Active',
      paitents: '1231',
      referrals: '600',
      visits: '925',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: 'Tenet Healthcare',
      insurances: '10',
      group: 'AdvanceDiagnosticsGroup 1',
      name: '5',
      Phone: '(555) 123-4567',
      Email: 'admin@tenet.com',
      Firm: '25',
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
      cases: '650',
      locations: '520',
      status: 'Active',
      paitents: '1231',
      referrals: '246',
      visits: '792',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: 'Baylor Scott & White Health',
      insurances: '15',
      group: 'Hamilton Group 1',
      name: '9',
      Phone: '(555) 234-5678',
      Email: 'nefi@lopezfrancolaw.com',
      Firm: '12',
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
      cases: '810',
      locations: '700',
      status: 'Inactive',
      paitents: '1231',
      referrals: '903',
      visits: '1500',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: 'Steward Health Care System',
      insurances: '12',
      group: 'Memorial Group 2',
      name: '8',
      Phone: '(555) 345-6789',
      Email: 'maldonadolaw@yahoo.com',
      Firm: '52',
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
      cases: '100',
      locations: '410',
      status: 'Active',
      paitents: '1231',
      referrals: '600',
      visits: '925',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: '	CHRISTUS Health',
      insurances: '13',
      group: 'AdvanceDiagnosticsGroup 2',
      name: '23',
      Phone: ' (555) 456-7890',
      Email: 'andrew@akgardener.com',
      Firm: '29',
      requests: '90',
      overdue: '10',
      wip: '20',
      pending: '10',
      completed: '50',
      totalbilling: '$7500',
      currentbilling: '$5800',
      city: 'San Antonio',
    },
    {
      cases: '240',
      locations: '820',
      status: 'Active',
      paitents: '1231',
      referrals: '850',
      visits: '1200',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: 'Texas Health Resources',
      insurances: '17',
      group: 'AdvanceDiagnosticsGroup 3',
      name: '1',
      Phone: '(555) 567-8901',
      Email: 'ayuda@abogadaparoda.com',
      Firm: '9',
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
      cases: '927',
      locations: '190',
      status: 'Inactive',
      paitents: '1231',
      referrals: '900',
      visits: '1351',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: 'Oceans Healthcare	',
      insurances: '36',
      group: 'Concho Group 1',
      name: '26',
      Phone: '(555) 678-9012',
      Email: ' lisa.wilson@wilsonlegal.com',
      Firm: '47',
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
      cases: '123',
      locations: '300',
      status: 'Active',
      paitents: '1231',
      referrals: '561',
      visits: '1234',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: 'Community Hospital Corporation',
      insurances: '23',
      group: 'AdvanceDiagnosticsGroup 4',
      name: '45',
      Phone: '(555) 789-0123',
      Email: ' kadibe@adibelaw.com',
      Firm: '21',
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
      cases: '430',
      locations: '700',
      status: 'Active',
      paitents: '1231',
      referrals: '600',
      visits: '1250',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: '	Memorial Hermann Health System',
      insurances: '16',
      group: 'Concho Group 4',
      name: '18',
      Phone: '(555) 123-4567',
      Email: 'jsalazae@adleyfirm.com',
      Firm: '28',
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
      cases: '670',
      locations: '800',
      status: 'Active',
      paitents: '1231',
      referrals: '900',
      visits: '1562',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: 'Cornerstone Healthcare Group	',
      insurances: '12',
      group: 'North Runnels Group 3',
      name: '19',
      Phone: '(555) 234-5678',
      Email: 'adrianalcsw@kindredspiritscounselling.org',
      Firm: '22',
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
      cases: '920',
      locations: '200',
      status: 'Active',
      paitents: '1231',
      referrals: '600',
      visits: '1341',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: 'HCA Medical City Healthcare	',
      insurances: '17',
      group: 'AdvanceDiagnosticsGroup 5',
      name: '102',
      Phone: '(555) 345-6789',
      Email: 'michael.johnson@johnsonlaw.com',
      Firm: '56',
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
      cases: '870',
      locations: '472',
      status: 'Active',
      paitents: '1231',
      referrals: '760',
      visits: '1552',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: 'Nutex Health	',
      insurances: '12',
      group: 'North Runnels Group 3',
      name: '111',
      Phone: ' (555) 456-7890',
      Email: 'eman@afsharlaw.com',
      Firm: '73',
      requests: '90',
      overdue: '10',
      wip: '20',
      pending: '10',
      completed: '50',
      totalbilling: '$7500',
      currentbilling: '$5800',
      city: 'San Antonio',
    },
    {
      cases: '920',
      locations: '830',
      status: 'Active',
      paitents: '1231',
      referrals: '440',
      visits: '1025',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: 'Nutex Health	',
      insurances: '16',
      group: 'North Runnels Group 3',
      name: '56',
      Phone: '(555) 567-8901',
      Email: 'david.martinez@martinezlaw.com',
      Firm: '12',
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
      cases: '630',
      locations: '300',
      status: 'Active',
      paitents: '1231',
      referrals: '600',
      visits: '1225',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: 'Ascension Seton	',
      insurances: '13',
      group: 'North Runnels Group 3',
      name: '7',
      Phone: '(555) 678-9012',
      Email: ' lisa.wilson@wilsonlegal.com',
      Firm: '10',
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
      cases: '920',
      locations: '610',
      status: 'Active',
      paitents: '1231',
      referrals: '860',
      visits: '1343',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: 'Nobis Rehabilitation Partners	',
      insurances: '15',
      group: 'Memorial Group 4',
      name: '12',
      Phone: '(555) 789-0123',
      Email: ' james.taylor@taylorlaw.com',
      Firm: '66',
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
  public openinsurancedialog(id: any) {
    console.log('jkhksbdjk');
    let dialogRef = this.dialog.open(InsuranceDialogComponent, {
      data: id,
      height: 'auto',
      width: '900px',
    });
    dialogRef.afterClosed().subscribe((data) => { });
  }
  
  public openlawfirmdialog(id: any) {
    console.log('jkhksbdjk');
    let dialogRef = this.dialog.open(AdminLawfirmDialogComponent, {
      data: id,
      height: 'auto',
      width: '900px',
    });
    dialogRef.afterClosed().subscribe((data) => { });
  }
  
  public openproviders(id: any) {
    console.log('jkhksbdjk');
    let dialogRef = this.dialog.open(ProviderDialogeboxComponent, {
      data: id,
      height: 'auto',
      width: '900px',
    });
    dialogRef.afterClosed().subscribe((data) => { });
  }
  

  public openproviderdialog(id: any) {
    console.log('jkhksbdjk');
    let dialogRef = this.dialog.open(NetworkdialogComponent, {
      data: id,
      height: 'auto',
      width: '900px',
    });
    dialogRef.afterClosed().subscribe((data) => { });
  }

  public openproviderdialoge(id: any) {
    console.log('jkhksbdjk');
    let dialogRef = this.dialog.open(GridNetworkComponent, {
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


  // locations

  openlocations() {
    this.router.navigate(['super-admin/rcm-accounts/locations']);
  }

  // patients

  openPatients() {
    this.router.navigate(['super-admin/rcm-accounts/patients']);
  }


  openReferreals() {
    this.router.navigate(['super-admin/rcm-accounts/referrals']);
  }

  opencases() {
    this.router.navigate(['super-admin/rcm-accounts/cases']);
  }

  openVisits() {
    this.router.navigate(['super-admin/rcm-accounts/visits']);

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
