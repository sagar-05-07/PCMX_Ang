import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormGroup, UntypedFormBuilder, Validators, FormGroup } from '@angular/forms';
import { emailValidator } from '../../theme/utils/app-validators';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { UserService } from './user.service';
import { MatDialog } from '@angular/material/dialog';
// import { GroupdialogComponent } from '../admin/user/groupdialog/groupdialog.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public form: FormGroup;
  public settings: Settings;
  passwordType: string;
  public TypeString: string = "password";
  public isPassword: boolean = true;
  public showpass: boolean = true;

  constructor(
    public dialog: MatDialog,
    public appSettings: AppSettings,
    public fb: UntypedFormBuilder,
    public router: Router,
    private userService: UserService
  ) {
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  public onSubmit() {
    // All Login for ADH Projects

    // RCM Login
    if (this.form.value.email === "network@adhsys.com" && this.form.value.password === "pcmx@12345") {
      this.userService.setEmail(this.form.value.email);
      this.router.navigate(['/rcm-login/dashboard']);
    }
    // Admin LogIn 
    else if (this.form.value.email === "admin@adhsys.com" && this.form.value.password === "pcmx@12345") {
      this.userService.setEmail(this.form.value.email);
      this.router.navigate(['super-admin/analytics']);
    }
    // Provider LogIn
    else if (this.form.value.email === "provider@provider.com" && this.form.value.password === "pcmx@12345") {
      this.userService.setEmail(this.form.value.email);
      this.router.navigate(['/provider-login/dashboard']);
    }
    // Law Firm Login
    else if (this.form.value.email === "law@firm.com" && this.form.value.password === "pcmx@12345") {
      this.userService.setEmail(this.form.value.email);
      this.router.navigate(['/law-firm-login/dashboard']);
    }
    // Funding Partner Login
    else if (this.form.value.email === "funding@partner.com" && this.form.value.password === "pcmx@12345") {
      this.userService.setEmail(this.form.value.email);
      this.router.navigate(['/partner-login/dashboard']);
    }







    else if (this.form.value.email === "custodian@provider.com" && this.form.value.password === "chartx@123") {
      this.userService.setEmail(this.form.value.email);
      this.router.navigate(['/radar-provider']);
    }


    // User LogIn (Sales LogIn)
    else if (this.form.value.email === "user@adhsys.com" && this.form.value.password === "user@123") {
      this.userService.setEmail(this.form.value.email);
      this.router.navigate(['/radar-provider']);
    }



    else if (this.form.value.email === "consultant@chartx.org" && this.form.value.password === "chartx@123") {
      this.userService.setEmail(this.form.value.email);
      this.router.navigate(['/radar']);
    }
    else if (this.form.value.email === "admin@adhsys.com" && this.form.value.password === "admin@123") {
      this.userService.setEmail(this.form.value.email);
      this.router.navigate(['/radar-provider']);
    }
    else {
      alert("Wrong E-mail Id or Password");
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.settings.loadingSpinner = false;
    });
  }

  public ChangetextType(isPassword: any) {
    if (isPassword) {
      this.TypeString = "password";
      this.showpass = !this.showpass;
    } else {
      this.TypeString = "text";
      this.showpass = !this.showpass;
    }
  }

  public togglePassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
  }
}
