import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from '../../profile/user-info/user-info.component';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.scss'
})
export class ForgotComponent {
  public form: FormGroup;
  constructor(public fb: FormBuilder,

    public router: Router) {
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // if (this.form.valid) {

    // }
  }
  openlogin() {
    this.router.navigate(['/login']);
  }
}
