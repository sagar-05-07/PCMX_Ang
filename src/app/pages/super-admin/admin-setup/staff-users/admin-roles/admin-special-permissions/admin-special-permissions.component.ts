import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-special-permissions',
  templateUrl: './admin-special-permissions.component.html',
  styleUrl: './admin-special-permissions.component.scss'
})
export class AdminSpecialPermissionsComponent {

  constructor(public dialog: Dialog) { }
  roles = [
    // { role: 'Undo/Redo Transcations in Audit Trail' },
    // { role: 'Bulk Download and Upload in Setup Module' },
    // { role: 'Bulk Download and Upload in Network Accounts Module' },
    // { role: 'Bulk Download and Upload in Law Firms Module' },
    // { role: 'Bulk Download and Upload in Providers Module' },
    { role: 'Sync Network Settings' },
    { role: 'Sync Provider Settings' },
    { role: 'Sync Law Firm Settings' },
    { role: 'Sync Lender Settings' },
    { role: 'Undo / Redo in Audit Trail' },

  ];

  close() {
    this.dialog.closeAll();
  }
}

