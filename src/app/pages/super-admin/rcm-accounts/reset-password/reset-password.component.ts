import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MustMatch, passwordValidator } from 'src/app/shared/FormValidators/formValidators';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {

  passwordResetForm: FormGroup;
  isSubmitting = false;
  type: any;
  alertService: any;
  passwordType: string = 'password';
  confirmPasswordType: string = 'password';

  constructor(
    public _fb: FormBuilder,
    // private _userService: ManageUserService,
    public dialogRef: MatDialogRef<ResetPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formInIt(this.data)
  }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
  public togglePassword() {
    this.passwordType = this.passwordType == 'text' ? 'password' : 'text';
  }
  public toggleCondirmPassword() {
    this.confirmPasswordType = this.confirmPasswordType == 'text' ? 'password' : 'text';
  }
  formInIt(val: any) {
    this.passwordResetForm = this._fb.group({
      UserId: new FormControl(val?.UserId, [Validators.required]),
      Password: new FormControl(null, Validators.compose([Validators.required, passwordValidator])),
      ConfirmPassword: new FormControl(null, [Validators.required])
    }, {
      validator: MustMatch('Password', 'ConfirmPassword')
    });
  }
  // convienience getter for form
  get f() { return this.passwordResetForm.controls }
  fnChangePassword() {
    this.isSubmitting = true;
    if (this.passwordResetForm.valid) {
      // this._userService.ChangeUserPassword(this.passwordResetForm.value).subscribe(data => {
      //   if (data != null) {
      //     this.dialogRef.close(data['Data']);
      //     if (data['Success'] != null) {
      //       if (data['Success']) {
      //         this.dialogRef.close(data['Data']);
      //       }
      //       else {
      //         this.isSubmitting = false;
      //       }
      //     }
      //   }
      // });
    }
  }
}



