import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Client } from '../../admin-provider/providerdialog/providerdialog.component';


@Component({
  selector: 'app-networkdialog',
  templateUrl: './networkdialog.component.html',
  styleUrl: './networkdialog.component.scss',
})
export class NetworkdialogComponent {
  public phoneNumberMask = [
    /[0-9]/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];
  session: any;
  // countries = [];
  // provinceOptions = [];
  filteredClients: Observable<Client[]>;
  // muncipalityOptions = [];
  clients = [];
  public ContactForm: FormGroup;
  isClientTobeDisabled: boolean = false;
  isAddressCopySelected: boolean = false;
  enableAddressCopycheckbox: boolean = true;
  account: any;
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<NetworkdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.isClientTobeDisabled = this.data
      ? this.data.isClientDisabled
        ? this.data.isClientDisabled
        : false
      : false;
   
    // this.ContactForm = this.fb.group({
    //   contactId: null,
    //   clientId: [null, [Validators.required]],
    //   contactName: [null, [Validators.required]],
    //   contactJobTitle: [null, [Validators.required]],
    //   contactPhone: [null, [Validators.required]],
    //   ext: [null],
    //   contactEmail: [null, [Validators.required]],
    //   // 'contactCountryID': [null, [Validators.required]],
    //   // 'contactStateID': [null, [Validators.required]],
    //   // 'contactMuncipalityID': [null],
    //   contactState: [null, [Validators.required]],
    //   contactCountry: [null, [Validators.required]],
    //   contactCity: [null, [Validators.required]],
    //   contactZip: [null, [Validators.required]],
    //   contactStreetAddress: [null, [Validators.required]],
    //   contactIsPrimaryContact: [null],
    //   contactIsBillingContact: [null],
    //   createdBy: [null],
    //   modifiedBy: [null],
    //   autoClientName: [null, [Validators.required]],
    // });
  }
  formattedaddress = ' ';
  options = {
    componentRestrictions: {
      country: ['ca'],
    },
  };
  public AddressChange(address: any) {
    //setting address from API to local variable
    // console.log(address,'address log')
    let country = '';
    let province = '';
    let city = '';
    let postalCode = '';
    let streetAddress = '';
    address.address_components.forEach((address: any) => {
      address.types.forEach((item: any) => {
        if (item == 'country') {
          country = address['long_name'];
        } else if (item == 'administrative_area_level_1') {
          province = address['long_name'];
        } else if (
          item == 'locality' ||
          item == 'administrative_area_level_2' ||
          item == 'administrative_area_level_3' ||
          item == 'administrative_area_level_4'
        ) {
          city = city + address['long_name'] + ', ';
        } else if (item == 'postal_code') {
          postalCode = address['long_name'];
        } else {
          streetAddress = streetAddress + address['long_name'];
        }
      });
    });
    // city = this.trim(city, ' ');
    // city = this.trim(city, ',');
    this.formattedaddress = address.formatted_address;
    this.ContactForm.controls['contactStreetAddress'].setValue(address.name);

    this.ContactForm.controls['contactCity'].setValue(city);
    this.ContactForm.controls['contactCountry'].setValue(country);
    this.ContactForm.controls['contactState'].setValue(province);
    this.ContactForm.controls['contactZip'].setValue(postalCode);
  }

  private _filter(name: string): any {
    this.ContactForm.controls['clientId'].setValue('');
    //this.clearAddress();
    this.enableAddressCopycheckbox = true;
    //this.isAddressCopySelected = false;
    const filterValue = name.toLowerCase();
    //return this.clients.filter(option => option.clientName.toLowerCase().indexOf(filterValue) === 0);
    // return this.clients.filter(option => option.clientName.toLowerCase().trim().includes(filterValue));
  }

  onClientChangeEvent(event: { clientID: number; clientName: string }) {
    //let target = event.source.selected._element.nativeElement;
    let clientId: number = event.clientID;
    let clientName: string = event.clientName;
    this.ContactForm.controls['clientId'].setValue(clientId);
    this.enableAddressCopycheckbox = false;
    //this.GeneralForm.controls['contactTypeId'].reset();
  }

 

  onlyNumbers(event: any) {
    var k;
    k = event.charCode;
    return k > 47 && k < 58;
  }

  public getclients() {
    // this.manageService.getAllClients().subscribe(
    //   data => {
    //     this.clients = data['Data'];
    //   }
    // );
  }
  copyClientAddress(event: any) {
    this.isAddressCopySelected = event.checked;
   
  }
  clearAddress() {
    this.ContactForm.controls['contactStreetAddress'].setValue(null);
    this.ContactForm.controls['contactCity'].setValue(null);
    this.ContactForm.controls['contactCountry'].setValue(null);
    this.ContactForm.controls['contactState'].setValue(null);
    this.ContactForm.controls['contactZip'].setValue(null);
    
  }
  isFormsubmitted = false;
  onSubmitContactForm(formValues: any) {
    if (formValues['contactId'] != null) {
      formValues['modifiedBy'] = this.session['UserDetails'].int_user_id;
    } else {
      formValues['createdBy'] = this.session['UserDetails'].int_user_id;
    }
    if (this.ContactForm.valid) {
      this.isFormsubmitted = true;
      formValues.contactIsPrimaryContact =
        formValues.contactIsPrimaryContact == 1 ? true : false;
      formValues.contactIsBillingContact =
        formValues.contactIsBillingContact == 1 ? true : false;
      formValues.isAddressCopiedFromClient = this.isAddressCopySelected;
     
    } else {
      this.ContactForm.controls.clientId.markAsTouched();
      this.ContactForm.controls.contactName.markAsTouched();
      this.ContactForm.controls.contactJobTitle.markAsTouched();
      this.ContactForm.controls.contactPhone.markAsTouched();
      this.ContactForm.controls.contactEmail.markAsTouched();
      this.ContactForm.controls.contactCountry.markAsTouched();
      this.ContactForm.controls.contactState.markAsTouched();
      // this.ContactForm.controls.contactMuncipalityID.markAsTouched();
      this.ContactForm.controls.contactCity.markAsTouched();
      this.ContactForm.controls.contactZip.markAsTouched();
      this.ContactForm.controls.contactStreetAddress.markAsTouched();
      // this.ContactForm.controls.contactIsPrimaryContact.markAsTouched();
      // this.ContactForm.controls.contactIsBillingContact.markAsTouched();
    }
  }

  ngOnInit() {
    // this.getCountries();
    // this.editContact(this.data);
    // this.GetMuncipalities();
    // this.getclients();
    this.filteredClients =
      this.ContactForm.controls.autoClientName.valueChanges;
    
    if (this.data) {
      this.editContact(this.data);
    } else {
      // this.getCountries('new');
    }
    this.getclients();
  }

  editContact(data: any) {
    // this.getCountries();
    this.ContactForm.reset();
    if (data != null) {
      console.log('data:' + data);

      this.ContactForm.controls['autoClientName'].setValue(data.clientName);
      this.ContactForm.controls['contactId'].setValue(data.contactID);
      this.ContactForm.controls['clientId'].setValue(data.clientID);
      this.ContactForm.controls['contactName'].setValue(data.contactName);
      this.ContactForm.controls['contactJobTitle'].setValue(
        data.contactJobTitle
      );
      this.ContactForm.controls['contactPhone'].setValue(data.contactPhone);
      if (data.ext != '-') {
        this.ContactForm.controls['ext'].setValue(data.ext);
      }
      this.ContactForm.controls['contactEmail'].setValue(data.contactEmail);
      // this.GetStates(data.contactCountryID);
      this.ContactForm.controls['contactCountry'].setValue(data.contactCountry);
      this.ContactForm.controls['contactState'].setValue(data.contactState);
      // this.ContactForm.controls['contactMuncipalityID'].setValue(data.contactMuncipalityID);
      this.ContactForm.controls['contactCity'].setValue(data.contactCity);
      this.ContactForm.controls['contactZip'].setValue(data.contactZip);
      this.ContactForm.controls['contactStreetAddress'].setValue(
        data.contactStreetAddress
      );
      this.ContactForm.controls['contactIsPrimaryContact'].setValue(
        data.contactIsPrimaryContact == true ? '1' : '0'
      );
      this.ContactForm.controls['contactIsBillingContact'].setValue(
        data.contactIsBillingContact == true ? '1' : '0'
      );
      this.isAddressCopySelected = data['isAddressCopiedFromClient'];
    }
  }

  public close(): void {
    this.dialogRef.close();
  }

  saveOpp() {
    this.dialogRef.close();
  }

  // networks

  networks = [
    { id: 1, name: 'AD Healthcare' },
    { id: 2, name: 'Tenet Healthcare ' },
    { id: 3, name: 'Baylor Scott & White Health' },
    { id: 4, name: 'Steward Health Care System' },
    { id: 5, name: 'The Lone Star Network' },
    { id: 6, name: 'Texas Star Network' },
    { id: 7, name: 'Caramor TX HCN' },
    { id: 8, name: 'Argus Provider Network' },
    { id: 9, name: 'First Health / CSS HCN' },
    { id: 10, name: 'GENEX Health Care Network' },
    { id: 11, name: 'Liberty Health Care Network' },
    { id: 12, name: 'WorkWell, TX' },
  ];

  // Locations

  locations = [
    { id: 1, name: 'USA' },
    { id: 2, name: 'Texas' },
    { id: 3, name: 'Virginia' },
    { id: 4, name: 'California' },
    { id: 5, name: 'Dallas' },
    { id: 6, name: 'Houston' },
  ];

  // Insurances

  insurances = [
    { id: 1, name: 'Aetna ' },
    { id: 2, name: 'Blue Cross Blue Shield' },
    { id: 3, name: 'Cigna Group' },
    { id: 4, name: 'Superior HealthPlan' },
    { id: 6, name: 'Amerigroup ' },
    { id: 5, name: 'Baylor Scott and White Health Plan' },
  ];

  // Specialities

  rows: any[] = [{ category: '', specialty: '', subSpecialty: '' }];

  categories = [
    'Medical',
    'Surgery/Procedures',
    'Imaging',
    'Ancillary',
    'FSER',
  ];
  specialties = ['Primary Care', 'Psychology', 'Specialist'];
  subSpecialties = [
    'Nephrology',
    'Neurology',
    'Neuropsychology',
    'OBGYN',
    'Oncologist',
    'Opthalmology',
    'Orthodontist',
    'Orthopedic',
    'Plastic Surgery',
    'PM&R',
  ];

  addRow() {
    this.rows.push({ category: '', specialty: '', subSpecialty: '' });
  }

  saveRow(index: number) {
    console.log('Saved row:', this.rows[index]);
    alert('Row saved!');
  }

  deleteRow(index: number) {
    this.rows.splice(index, 1);
  }

}
