import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-cases',
  templateUrl: './add-cases.component.html',
  styleUrl: './add-cases.component.scss'
})
export class AddCasesComponent {

  public currentPage = 0;
  public totalSize = 0;
  // close() { }

  eventTypes: string[] = ['Carol Davis', 'Bob Johnson	', 'Alice Smith', 'Jane Roe'];
  filteredPatientTypes: string[] = [...this.eventTypes]; 

  selectLawFirmType: string | null = null;
  //vineeth
  eventLawFirmTypes: string[] = ['Carol Davis', 'Bob Johnson	', 'Alice Smith','Alice Smith','Carol Davis'];
  filteredLawFirmType: string[] = [...this.eventLawFirmTypes];

  applyFilter1(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase(); // Safe casting to HTMLInputElement
    this.filteredLawFirmType = this.eventTypes.filter(eventType => eventType.toLowerCase().includes(filterValue));
  }


  users = [{ type: "Document check", subject: "" }, { type: "Document check 2", subject: "" }]

  constructor(
    public dialogRef: MatDialogRef<AddCasesComponent>,
    @Inject(MAT_DIALOG_DATA) public account: any) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}
