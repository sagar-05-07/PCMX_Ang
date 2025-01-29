import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrl: './permission.component.scss'
})
export class PermissionComponent {

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
      name: 'Dashboard (11)',
      screens: [
        {
          screenName: 'Dashboard >> Metrics',
          create: false, read: true, update: false, delete: false, download: false, merge: false
        },
        {
          screenName: 'Dashboard >> Radar',
          create: false, read: true, update: false, delete: false, download: false, merge: false
        },
        {
          screenName: 'Dashboard >> Patients',
          create: false, read: true, update: false, delete: false, download: false, merge: false
        },
        {
          screenName: 'Dashboard >> Providers',
          create: false, read: true, update: false, delete: false, download: false, merge: false
        },
        {
          screenName: 'Dashboard >> Law Firms',
          create: false, read: true, update: false, delete: false, download: false, merge: false
        },
        {
          screenName: 'Dashboard >> Referrals',
          create: false, read: true, update: false, delete: false, download: false, merge: false
        },
        {
          screenName: 'Dashboard >> Visits',
          create: false, read: true, update: false, delete: false, download: false, merge: false
        },
        {
          screenName: 'Dashboard >> Claims',
          create: false, read: true, update: false, delete: false, download: false, merge: false
        },
        {
          screenName: 'Dashboard >> Cases',
          create: false, read: true, update: false, delete: false, download: false, merge: false
        },
        {
          screenName: 'Dashboard >> Payments',
          create: false, read: true, update: false, delete: false, download: false, merge: false
        },
        {
          screenName: 'Dashboard >> Funds',
          create: false, read: true, update: false, delete: false, download: false, merge: false
        },

      ]
    },

    {
      name: 'Activity (46)',
      screens: [
        {
          screenName: 'Patients',
          create: true, read: true, update: true, delete: true, download: true, upload: true, merge: true
        },
        {
          screenName: 'Referrals',
          create: true, read: true, update: true, delete: true, download: true, upload: true, merge: true
        },
        {
          screenName: 'Visits',
          create: true, read: true, update: true, delete: true, download: true, upload: true, merge: true
        },
        {
          screenName: 'Claims',
          create: true, read: true, update: true, delete: true, download: true, upload: true, merge: true
        },
        {
          screenName: 'Cases',
          create: true, read: true, update: true, delete: true, download: true, upload: true, merge: true
        },
        {
          screenName: 'Payments',
          create: true, read: true, update: true, delete: true, download: true, upload: true, merge: false
        },
        {
          screenName: 'Documnets',
          create: true, read: true, update: true, delete: true, download: true, upload: false, merge: false
        },
      ]
    },
    {
      name: 'Funds (17)',
      screens: [
        {
          screenName: 'Funds >> Invoice',
          create: true, read: true, update: true, delete: true, download: true, upload: false, merge: false
        },
        {
          screenName: 'Funds >> Batches',
          create: false, read: true, update: true, delete: false, download: true, upload: false, merge: false
        },
        {
          screenName: 'Funds >> Funding',
          create: false, read: true, update: false, delete: false, download: true, upload: true, merge: false
        },
        {
          screenName: 'Funds >> Calculator',
          create: false, read: true, update: true, delete: false, download: true, upload: false, merge: false
        },
        {
          screenName: 'Funds >> Payback',
          create: false, read: true, update: false, delete: false, download: true, upload: true, merge: false
        },
      ]
    },

    {
      name: 'Reports (24)',
      screens: [
        {
          screenName: 'Reports >> EOD Reports',
          create: true, read: true, update: true, delete: false, download: false, upload: false, merge: false
        },
        {
          screenName: 'Reports >> Cases',
          create: false, read: true, update: false, delete: false, download: true, upload: true, merge: false
        },
        {
          screenName: 'Reports >> Referrals',
          create: false, read: true, update: false, delete: false, download: true, upload: true, merge: false
        },
        {
          screenName: 'Reports >> Visits',
          create: false, read: true, update: false, delete: false, download: true, upload: true, merge: false
        },
        {
          screenName: 'Reports >> Claims',
          create: false, read: true, update: false, delete: false, download: true, upload: true, merge: false
        },
        {
          screenName: 'Reports >> Funding',
          create: false, read: true, update: false, delete: false, download: true, upload: true, merge: false
        },
        {
          screenName: 'Reports >> Payments',
          create: false, read: true, update: false, delete: false, download: true, upload: true, merge: false
        },
        {
          screenName: 'Reports >> Payback',
          create: false, read: true, update: false, delete: false, download: true, upload: true, merge: false
        },
      ]
    },

    {
      name: 'Setup (38)',
      screens: [
        {
          screenName: 'Setup >> Staff Users >> Users',
          create: true, read: true, update: true, delete: true, download: false, merge: false
        },

        {
          screenName: 'Setup >> Staff Users >> Roles',
          create: true, read: true, update: true, delete: true, download: false, merge: false
        },

        {
          screenName: 'Setup >> Case Managers',
          create: false, read: true, update: false, delete: false, download: false, merge: false
        },

        {
          screenName: 'Setup >> Doc Types',
          create: true, read: true, update: true, delete: true, download: false, merge: false
        },

        {
          screenName: 'Setup >> Law Firms',
          create: true, read: true, update: true, delete: true, download: false, merge: false
        },

        {
          screenName: 'Setup >> Locations',
          create: true, read: true, update: true, delete: true, download: false, merge: false
        },

        {
          screenName: 'Setup >> Providers',
          create: true, read: true, update: true, delete: true, download: false, merge: false
        },

        {
          screenName: 'Setup >> Lenders',
          create: true, read: true, update: true, delete: true, download: false, merge: false
        },

        {
          screenName: 'Setup >> Contracts',
          create: true, read: true, update: true, delete: true, download: false, merge: false
        },
        {
          screenName: 'Setup >> Preferences',
          create: true, read: true, update: true, delete: false, download: false, merge: false
        },
        {
          screenName: 'Setup >> Integrations',
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
