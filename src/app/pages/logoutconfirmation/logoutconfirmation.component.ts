import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoutconfirmation',

  templateUrl: './logoutconfirmation.component.html',
  styleUrl: './logoutconfirmation.component.scss'
})
export class LogoutconfirmationComponent implements OnInit {
  // public phoneNumberMask = ['+','1', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public phoneNumberMask = [/[0-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  session: any;
  // countries = [];
  // provinceOptions = [];

  isClientTobeDisabled: boolean = false;
  isAddressCopySelected: boolean = false;
  enableAddressCopycheckbox: boolean = true;
  constructor(public dialog: MatDialog,
    public router: Router,
    public dialogRef: MatDialogRef<LogoutconfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    private _snackBar: MatSnackBar) {
    this.isClientTobeDisabled = this.data ? this.data.isClientDisabled ? this.data.isClientDisabled : false : false;
    // this.session = JSON.parse(localStorage.getItem("userloginsession"));

  }
  formattedaddress = " ";
  options = {
    componentRestrictions: {
      country: ["ca"]
    }
  }







  ngOnInit() {

  }

  editContact(data: any) {
    this.router.navigate(['/login']);
    this.dialogRef.close();
  }

  public close(): void {
    this.dialogRef.close();
  }

  saveOpp() {
    this.dialogRef.close();
  }


}

