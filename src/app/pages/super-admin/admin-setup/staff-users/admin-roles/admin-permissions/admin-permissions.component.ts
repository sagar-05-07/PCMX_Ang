import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-permissions',
  templateUrl: './admin-permissions.component.html',
  styleUrl: './admin-permissions.component.scss'
})
export class AdminPermissionsComponent {


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
      name: 'Analytics & Alerts (4)',
      screens: [
        {
          screenName: 'Providers',
          create: false, read: true, update: false, delete: false, download: false, merge: false
        },
        {
          screenName: 'Networks',
          create: false, read: true, update: false, delete: false, download: false, merge: false
        },
        {
          screenName: 'Law Firms',
          create: false, read: true, update: false, delete: false, download: false, merge: false
        },
        {
          screenName: 'Alerts',
          create: false, read: true, update: false, delete: false, download: false, merge: false
        },

      ]
    },

    {
      name: 'Entities (18)',
      screens: [
        {
          screenName: 'Network Accounts',
          create: true, read: true, update: true, delete: true, download: true, merge: true
        },
        {
          screenName: 'Law Firms',
          create: true, read: true, update: true, delete: true, download: true, merge: true
        },
        {
          screenName: 'Providers',
          create: true, read: true, update: true, delete: true, download: true, merge: true
        },

      ]
    },

    {
      name: 'Finance (8)',
      screens: [
        {
          screenName: 'Finance >> Packages',
          create: true, read: true, update: true, delete: true, download: false, merge: false
        },
        {
          screenName: 'Finance >> Transactions',
          create: true, read: true, update: true, delete: true, download: false, merge: false
        },
      ]
    },


    {
      name: 'Setup (28)',
      screens: [
        {
          screenName: 'Roles',
          create: true, read: true, update: true, delete: true, download: false, merge: false
        },
        {
          screenName: 'Users',
          create: true, read: true, update: true, delete: true, download: false, merge: false
        },
        {
          screenName: 'Settings',
          create: false, read: true, update: true, delete: false, download: false, merge: false
        },
        {
          screenName: 'Lookup Options',
          create: true, read: true, update: true, delete: true, download: false, merge: false
        },
        {
          screenName: 'Event Master',
          create: false, read: true, update: false, delete: false, download: false, merge: false
        },
        {
          screenName: 'Activity Log',
          create: false, read: true, update: false, delete: false, download: false, merge: false
        },
        {
          screenName: 'Audit Trail',
          create: false, read: true, update: false, delete: false, download: false, merge: false
        },
        {
          screenName: 'Error Log',
          create: false, read: true, update: false, delete: false, download: false, merge: false
        },
        {
          screenName: 'Service Levels',
          create: false, read: true, update: true, delete: false, download: false, merge: false
        },
        {
          screenName: 'Escalation',
          create: false, read: true, update: true, delete: false, download: false, merge: false
        },
        {
          screenName: 'Insurance Groups',
          create: true, read: true, update: true, delete: true, download: true, merge: true
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

