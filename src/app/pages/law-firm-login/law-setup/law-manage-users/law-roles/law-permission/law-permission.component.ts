import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-law-permission',
  templateUrl: './law-permission.component.html',
  styleUrl: './law-permission.component.scss'
})
export class LawPermissionComponent {

  roleId = null;
  moduleId = 5;
  roleName: any;
  items = [];
  access = {
    btCreate: false,
    btRead: false,
    btUpdate: false,
    btDelete: false
  };
  service: any;
  alertService: any;

  constructor(
    private _location: Location,
    public router: Router,) {
    this.selectedModule = this.modules[0];
  }

  selectedModule: any;

  public modules = [


    {
      name: 'Activity (19)',
      screens: [
        {
          screenName: 'Dashboard',
          create: false, read: true, update: false, delete: false, download: false, merge: false
        },
        {
          screenName: 'Cases',
          create: true, read: true, update: true, delete: true, download: true, merge: true
        },
        {
          screenName: 'Referrals',
          create: true, read: true, update: true, delete: true, download: true, merge: true
        },
        {
          screenName: 'Payments',
          create: true, read: true, update: true, delete: true, download: true, merge: true
        },
      ]
    },

    {
      name: 'Reports (14)',
      screens: [
        {
          screenName: 'Reports >> EOD Reports',
          create: false, read: true, update: true, delete: false, download: false, merge: false
        },
        {
          screenName: 'Reports >> Cases',
          create: false, read: true, update: true, delete: false, download: true, merge: true
        },
        {
          screenName: 'Reports >> Claims',
          create: false, read: true, update: true, delete: false, download: true, merge: true
        },
        {
          screenName: 'Reports >> Payments',
          create: false, read: true, update: true, delete: false, download: true, merge: true
        },
      ]
    },

    {
      name: 'Setup (18)',
      screens: [
        {
          screenName: 'Setup >> Manage Users >> Users',
          create: true, read: true, update: true, delete: true, download: false, merge: false
        },
        {
          screenName: 'Setup >> Manage Users >> Roles',
          create: true, read: true, update: true, delete: true, download: false, merge: false
        },
        {
          screenName: 'Setup >> Providers',
          create: true, read: true, update: true, delete: true, download: true, merge: true
        },
        {
          screenName: 'Setup >> Preferences',
          create: false, read: true, update: true, delete: false, download: false, merge: false
        },
        {
          screenName: 'Setup >> Integration',
          create: false, read: true, update: true, delete: false, download: false, merge: false
        },
      ]
    },


  ]


  ngOnInit() {

  }
  goback() {
    this._location.back();
  }
  getPermissions() {

  }
  recordChange() {

  }
  saveUserPermissions() {

  }
  next() {
    let index = 0;
    this.modules.forEach((x, i) => {
      if (this.selectedModule.name === x.name) {
        index = i
      }
    })
    if (index != (this.modules.length - 1))
      this.selectedModule = this.modules[index + 1]
  }
  previous() {
    let index = 0;
    this.modules.forEach((x, i) => {
      if (this.selectedModule.name === x.name) {
        index = i
      }
    })

    if (index != 0)
      this.selectedModule = this.modules[index - 1]
  }
}

