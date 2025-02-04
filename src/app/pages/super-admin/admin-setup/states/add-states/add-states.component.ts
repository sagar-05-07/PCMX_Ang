import { Component,Inject,  OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-states',
  templateUrl: './add-states.component.html',
  styleUrl: './add-states.component.scss'
})
export class AddStatesComponent implements OnInit {
  public phoneNumberMask = [/[0-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  session: any;

  clients = [];
  public ContactForm: FormGroup;
  isClientTobeDisabled: boolean = false;
  isAddressCopySelected: boolean = false;
  enableAddressCopycheckbox: boolean = true;
  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<AddStatesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    private _snackBar: MatSnackBar) {
    this.isClientTobeDisabled = this.data ? this.data.isClientDisabled ? this.data.isClientDisabled : false : false;
    // this.session = JSON.parse(localStorage.getItem("userloginsession"));
    this.ContactForm = this.fb.group({
      'contactId': null,
      'clientId': [null, Validators.compose([Validators.required])],
      'contactName': [null, Validators.compose([Validators.required])],
      'contactJobTitle': [null, Validators.compose([Validators.required])],
      'contactPhone': [null, Validators.compose([Validators.required])],
      'ext': [null],
      'contactEmail': [null, Validators.compose([Validators.required])],
      // 'contactCountryID': [null, Validators.compose([Validators.required])],
      // 'contactStateID': [null, Validators.compose([Validators.required])],
      // 'contactMuncipalityID': [null],
      'contactState': [null, Validators.compose([Validators.required])],
      'contactCountry': [null, Validators.compose([Validators.required])],
      'contactCity': [null, Validators.compose([Validators.required])],
      'contactZip': [null, Validators.compose([Validators.required])],
      'contactStreetAddress': [null, Validators.compose([Validators.required])],
      'contactIsPrimaryContact': [null],
      'contactIsBillingContact': [null],
      'createdBy': [null],
      'modifiedBy': [null],
      'autoClientName': [null, Validators.compose([Validators.required])]
    })
  }
  formattedaddress = " ";
  options = {
    componentRestrictions: {
      country: ["ca"]
    }
  }
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
        if (item == "country") {
          country = address['long_name'];
        }
        else if (item == "administrative_area_level_1") {
          province = address['long_name'];
        }
        else if (item == "locality" || item == "administrative_area_level_2" || item == "administrative_area_level_3" || item == "administrative_area_level_4") {
          city = city + address['long_name'] + ', ';
        }
        else if (item == "postal_code") {
          postalCode = address['long_name'];
        }
        else {
          streetAddress = streetAddress + address['long_name'];
        }
      });
    });
    // city = this.trim(city, ' ');
    // city = this.trim(city, ',');
    this.formattedaddress = address.formatted_address
    this.ContactForm.controls['contactStreetAddress'].setValue(address.name);

    this.ContactForm.controls['contactCity'].setValue(city);
    this.ContactForm.controls['contactCountry'].setValue(country);
    this.ContactForm.controls['contactState'].setValue(province);
    this.ContactForm.controls['contactZip'].setValue(postalCode);
  }
  // trim(s, c) {
  //   if (c === "]") c = "\\]";
  //   if (c === "\\") c = "\\\\";
  //   return s.replace(new RegExp(
  //     "^[" + c + "]+|[" + c + "]+$", "g"
  //   ), "");
  // }
  // GetStates(value, id?) {
  //   this.manageService.GetStates(value).subscribe(
  //     data => {
  //       this.provinceOptions = data['Data'];
  //       if (id == 'new') {
  //         if (this.provinceOptions.filter(x => x.stateName == "Ontario").length > 0) {
  //           this.ContactForm.controls['contactStateID'].setValue(this.provinceOptions.filter(x => x.stateName == "Ontario")[0].stateId);
  //         }
  //         else {
  //           this.ContactForm.controls['contactStateID'].setValue(null);
  //         }
  //       }
  //       else {
  //         //this.ContactForm.controls['contactStateID'].setValue(null);
  //       }
  //     }
  //   );
  // }

  private _filter(name: string): any {
    this.ContactForm.controls['clientId'].setValue('');
    //this.clearAddress();
    this.enableAddressCopycheckbox = true;
    //this.isAddressCopySelected = false;
    const filterValue = name.toLowerCase();
    //return this.clients.filter(option => option.clientName.toLowerCase().indexOf(filterValue) === 0);
    // return this.clients.filter(option => option.clientName.toLowerCase().trim().includes(filterValue));
  }

  onClientChangeEvent(event: { clientID: number; clientName: string; }) {
    //let target = event.source.selected._element.nativeElement;
    let clientId: number = event.clientID;
    let clientName: string = event.clientName;
    this.ContactForm.controls['clientId'].setValue(clientId);
    this.enableAddressCopycheckbox = false;
    //this.GeneralForm.controls['contactTypeId'].reset();
  }

  // getCountries(id?) {
  //   this.manageService.GetCountries().subscribe(
  //     data => {
  //       this.countries = data['Data'];
  //       console.log(this.countries.filter(x => x.countryName == "Canada"), 'Countries List');
  //       if (id == 'new') {
  //         if (this.countries.filter(x => x.countryName == "Canada").length > 0) {
  //           this.ContactForm.controls['contactCountryID'].setValue(this.countries.filter(x => x.countryName == "Canada")[0].countryId);
  //           this.GetStates(this.ContactForm.controls['contactCountryID'].value, 'new');
  //         }
  //       }
  //       else {
  //         this.GetStates(this.ContactForm.controls['contactCountryID'].value);
  //       }
  //       //  if(this.data == null) {
  //       //this.GetStates(this.siteForm.controls['countryId'].value);
  //       // }
  //     });
  // }

  onlyNumbers(event: any) {
    var k;
    k = event.charCode;
    return ((k > 47 && k < 58));
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
    // if (event.checked) {
    //   let clientId = this.ContactForm.controls['clientId'].value;
    //   let clientName = this.ContactForm.controls['autoClientName'].value;
    //   if (clientId != null && clientId != '' && clientName != null && clientName != '') {
    //     let client = this.clients.filter(x => x.clientID == clientId)[0];
    //     this.ContactForm.controls['contactStreetAddress'].setValue(client.clientStreetAddress);
    //     this.ContactForm.controls['contactCity'].setValue(client.clientCity);
    //     this.ContactForm.controls['contactCountry'].setValue(client.clientCountry);
    //     // this.GetStates(client.clientCountryID);
    //     this.ContactForm.controls['contactState'].setValue(client.clientState);
    //     this.ContactForm.controls['contactZip'].setValue(client.clientZip);
    //   }
    //   else {
    //     this.clearAddress();
    //     this._snackBar.open('Please select client', '', {
    //       duration: 3000,
    //       panelClass: 'redSnackBar'
    //     });
    //   }
    // }
    // else {
    //   this.clearAddress();
    // }
  }
  clearAddress() {

    this.ContactForm.controls['contactStreetAddress'].setValue(null);
    this.ContactForm.controls['contactCity'].setValue(null);
    this.ContactForm.controls['contactCountry'].setValue(null);
    this.ContactForm.controls['contactState'].setValue(null);
    this.ContactForm.controls['contactZip'].setValue(null);
    // if (this.countries.filter(x => x.countryName == "Canada").length > 0) {
    //   this.ContactForm.controls['contactCountryID'].setValue(this.countries.filter(x => x.countryName == "Canada")[0].countryId);
    //   this.GetStates(this.ContactForm.controls['contactCountryID'].value, 'new');
    // }
    // if (this.provinceOptions.filter(x => x.stateName == "Ontario").length > 0) {
    //   this.ContactForm.controls['contactStateID'].setValue(this.provinceOptions.filter(x => x.stateName == "Ontario")[0].stateId);
    // }
  }
  isFormsubmitted = false;
  onSubmitContactForm(formValues: any) {
    if (formValues['contactId'] != null) {
      formValues['modifiedBy'] = this.session['UserDetails'].int_user_id;
    }
    else {
      formValues['createdBy'] = this.session['UserDetails'].int_user_id;
    }
    if (this.ContactForm.valid) {
      this.isFormsubmitted = true;
      formValues.contactIsPrimaryContact = formValues.contactIsPrimaryContact == 1 ? true : false;
      formValues.contactIsBillingContact = formValues.contactIsBillingContact == 1 ? true : false;
      formValues.isAddressCopiedFromClient = this.isAddressCopySelected;
      // this.manageService.upsertContact(formValues).subscribe(
      //   data => {
      //     this.isFormsubmitted = false;
      //     if (data['Status'] == true) {
      //       this.dialogRef.close();

      //     }
      //   }
      // )
    }
    else {
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
    // this.filteredClients = this.ContactForm.controls.autoClientName.valueChanges
    // .pipe(
    //   startWith(''),
    //   map(value => typeof value === 'string' ? value : value.name),
    //   map(name => name ? this._filter(name) : [])
    // );
    if (this.data) {
      this.editContact(this.data);
    }
    else {
      // this.getCountries('new');
    }
    this.getclients();
  }

  editContact(data: any) {
    // this.getCountries();
    this.ContactForm.reset();
    if (data != null) {
      console.log("data:" + data)

      this.ContactForm.controls['autoClientName'].setValue(data.clientName);
      this.ContactForm.controls['contactId'].setValue(data.contactID);
      this.ContactForm.controls['clientId'].setValue(data.clientID);
      this.ContactForm.controls['contactName'].setValue(data.contactName);
      this.ContactForm.controls['contactJobTitle'].setValue(data.contactJobTitle);
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
      this.ContactForm.controls['contactStreetAddress'].setValue(data.contactStreetAddress);
      this.ContactForm.controls['contactIsPrimaryContact'].setValue(data.contactIsPrimaryContact == true ? "1" : "0");
      this.ContactForm.controls['contactIsBillingContact'].setValue(data.contactIsBillingContact == true ? "1" : "0");
      this.isAddressCopySelected = data['isAddressCopiedFromClient'];
    }
  }

  public close(): void {
    this.dialogRef.close();
  }

  saveOpp() {
    this.dialogRef.close();
  }


}

