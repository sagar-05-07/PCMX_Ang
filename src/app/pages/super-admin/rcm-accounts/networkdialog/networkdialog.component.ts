import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NetworkService } from '../network.service';

@Component({
  selector: 'app-networkdialog',
  templateUrl: './networkdialog.component.html',
  styleUrl: './networkdialog.component.scss',
})
export class NetworkdialogComponent {

  networkAccounts: FormGroup;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<NetworkdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    private _networkServices: NetworkService,
  ) { }

  ngOnInit() {
    if (this.data) {
      this.formInit(this.data);
    }
    else {
      this.formInit(null);
    }
  }

  fnUpsertCityMaster() {
    console.log('.......................')
    this._networkServices.UpsertNetworkAccount(this.networkAccounts.value).subscribe((data: any) => {
      if (data.Success) {
        this.dialogRef.close("Update");
      }
    });
  }

  formInit(data: any) {
    this.networkAccounts = this.fb.group({
      NetworkAccountId: new FormControl(data?.StateId),
      StateId: new FormControl(data?.StateId),
      CityId: new FormControl(data?.CityId),
      NetworkAccountName: new FormControl(data?.NetworkAccountName, Validators.compose([Validators.required])),
      NetworkAccountPhone: new FormControl(data?.NetworkAccountPhone, [Validators.required, Validators.pattern(/^\d{10}$/)]),
      NetworkAccountEmail: new FormControl(data?.NetworkAccountEmail, [Validators.required, Validators.email]),
    });
  }
  // convienience getter for form
  get f() { return this.networkAccounts.controls; }

  public close(): void {
    this.dialogRef.close();
  }
}
