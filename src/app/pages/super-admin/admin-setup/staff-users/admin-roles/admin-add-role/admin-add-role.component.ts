import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-add-role',
  templateUrl: './admin-add-role.component.html',
  styleUrl: './admin-add-role.component.scss'
})
export class AdminAddRoleComponent {

 constructor(
    public dialogRef: MatDialogRef<AdminAddRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}
