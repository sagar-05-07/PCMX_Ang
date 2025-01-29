import { Component } from '@angular/core';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrl: './preferences.component.scss'
})
export class PreferencesComponent {

  constructor(
    // private alertService: AlertService,
    //private titleService: Title
  ) { }
  public setTitle(newTitle: string) {
    //this.titleService.setTitle(newTitle);
  }
  tableList = []
  ngOnInit() {

  }

  values = [


    {
      intSettingsId: 1,
      name: "Grid Length",
      description: "Default Grid Length",
      old_value: "10",
    },
    {
      intSettingsId: 2,
      name: "Notification Email",
      description: "Default Admin Notification Email	",
      old_value: "network@adhsys.com",
    },
    {
      intSettingsId: 3,
      name: "Email of the Director",
      description: "Email Address of the Director",
      old_value: "admin@adhsys.com",
    },
    {
      intSettingsId: 4,
      name: "Audit Approval",
      description: "Manager will approve the Audit",
      old_value: "Auditor",
    },
  ];




  saveSettings() {
    // this.alertService.createAlert("Successfully Saved", 1);
  }

}

