import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '../../breadcrumb.service';
import { UserService } from '../../login/user.service';
import { NetworkdialogComponent } from '../rcm-accounts/networkdialog/networkdialog.component';
import { AddLawfirmComponent } from './add-lawfirm/add-lawfirm.component';
import { GridLawfirmComponent } from './grid-lawfirm/grid-lawfirm.component';
import { LawfirmAttysComponent } from './lawfirm-attys/lawfirm-attys.component';

@Component({
  selector: 'app-admin-law-firm',
  templateUrl: './admin-law-firm.component.html',
  styleUrl: './admin-law-firm.component.scss',
})
export class AdminLawFirmComponent {
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
    'William J MCCarthy PLLC	',
    'A.K Gardener Law	',
    'Adley Law Firm	',
    'Johnson Law Office		',
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
      attys: '2',
      locations: '300',
      status: 'Active',
      paitents: '1231',
      referrals: '600',
      visits: '925',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: 'Tenet Healthcare',
      insurances: '3',
      group: 'AdvanceDiagnosticsGroup 1',
      name: '41',
      Phone: '(555) 123-4567',
      Email: 'admin@tenet.com',
      Firm: 'William J MCCarthy PLLC',
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
      attys: '7',
      locations: '520',
      status: 'Active',
      paitents: '1231',
      referrals: '246',
      visits: '792',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: 'Baylor Scott & White Health',
      insurances: '5',
      group: 'Hamilton Group 1',
      name: '22',
      Phone: '(555) 234-5678',
      Email: 'nefi@lopezfrancolaw.com',
      Firm: 'Lopez Franco PLLC',
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
      attys: '1',
      locations: '700',
      status: 'Inactive',
      paitents: '1231',
      referrals: '903',
      visits: '1500',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: 'Steward Health Care System',
      insurances: '2',
      group: 'Memorial Group 2',
      name: '51',
      Phone: '(555) 345-6789',
      Email: 'maldonadolaw@yahoo.com',
      Firm: 'Law Office Of A.Andre Maldonado ',
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
      attys: '6',
      locations: '410',
      status: 'Active',
      paitents: '1231',
      referrals: '600',
      visits: '925',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: '	CHRISTUS Health',
      insurances: '3',
      group: 'AdvanceDiagnosticsGroup 2',
      name: '29',
      Phone: ' (555) 456-7890',
      Email: 'andrew@akgardener.com',
      Firm: 'A.K Gardener Law',
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
      attys: '4',
      locations: '820',
      status: 'Active',
      paitents: '1231',
      referrals: '850',
      visits: '1200',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: 'Texas Health Resources',
      insurances: '7',
      group: 'AdvanceDiagnosticsGroup 3',
      name: '10',
      Phone: '(555) 567-8901',
      Email: 'ayuda@abogadaparoda.com',
      Firm: 'Abogada Parada',
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
      attys: '10',
      locations: '190',
      status: 'Inactive',
      paitents: '1231',
      referrals: '900',
      visits: '1351',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: 'Oceans Healthcare	',
      insurances: '6',
      group: 'Concho Group 1',
      name: '29',
      Phone: '(555) 678-9012',
      Email: ' lisa.wilson@wilsonlegal.com',
      Firm: 'Adame Garza',
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
      attys: '1',
      locations: '300',
      status: 'Active',
      paitents: '1231',
      referrals: '561',
      visits: '1234',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: 'Community Hospital Corporation',
      insurances: '3',
      group: 'AdvanceDiagnosticsGroup 4',
      name: '37',
      Phone: '(555) 789-0123',
      Email: ' kadibe@adibelaw.com',
      Firm: 'Adibe Law Group',
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
      attys: '26',
      locations: '700',
      status: 'Active',
      paitents: '1231',
      referrals: '600',
      visits: '1250',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: '	Memorial Hermann Health System',
      insurances: '6',
      group: 'Concho Group 4',
      name: '12',
      Phone: '(555) 123-4567',
      Email: 'jsalazae@adleyfirm.com',
      Firm: 'Adley Law Firm',
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
      attys: '3',
      locations: '800',
      status: 'Active',
      paitents: '1231',
      referrals: '900',
      visits: '1562',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: 'Cornerstone Healthcare Group	',
      insurances: '2',
      group: 'North Runnels Group 3',
      name: '11',
      Phone: '(555) 234-5678',
      Email: 'adrianalcsw@kindredspiritscounselling.org',
      Firm: 'Adriana Davidson LCSW',
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
      attys: '1',
      locations: '200',
      status: 'Active',
      paitents: '1231',
      referrals: '600',
      visits: '1341',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: 'HCA Medical City Healthcare	',
      insurances: '7',
      group: 'AdvanceDiagnosticsGroup 5',
      name: '29',
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
    {
      attys: '4',
      locations: '472',
      status: 'Active',
      paitents: '1231',
      referrals: '760',
      visits: '1552',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: 'Nutex Health	',
      insurances: '2',
      group: 'North Runnels Group 3',
      name: '4',
      Phone: ' (555) 456-7890',
      Email: 'eman@afsharlaw.com',
      Firm: 'The Afshar Law Firm',
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
      attys: '6',
      locations: '830',
      status: 'Active',
      paitents: '1231',
      referrals: '440',
      visits: '1025',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: 'Nutex Health	',
      insurances: '6',
      group: 'North Runnels Group 3',
      name: '16',
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
      attys: '10',
      locations: '300',
      status: 'Active',
      paitents: '1231',
      referrals: '600',
      visits: '1225',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: 'Ascension Seton	',
      insurances: '3',
      group: 'North Runnels Group 3',
      name: '72',
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
      attys: '2',
      locations: '610',
      status: 'Active',
      paitents: '1231',
      referrals: '860',
      visits: '1343',
      category: '2',
      speciality: '8',
      subSpecialty: '18',
      networks: 'Nobis Rehabilitation Partners	',
      insurances: '5',
      group: 'Memorial Group 4',
      name: '57',
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
    let dialogRef = this.dialog.open(AddLawfirmComponent, {
      data: id,
      height: 'auto',
      width: '900px',
    });
    dialogRef.afterClosed().subscribe((data) => { });
  }


  public openattys(id: any) {
    console.log('jkhksbdjk');
    let dialogRef = this.dialog.open(LawfirmAttysComponent, {
      data: id,
      height: 'auto',
      width: '900px',
    });
    dialogRef.afterClosed().subscribe((data) => { });
  }

  public openproviderdialoge(id: any) {
    console.log('jkhksbdjk');
    let dialogRef = this.dialog.open(GridLawfirmComponent, {
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
  opencases() {
    this.router.navigate(['super-admin/rcm-accounts/cases']);
  }
}
