import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotesComponent } from '../../../claims/notes/notes.component';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrl: './pending.component.scss'
})
export class PendingComponent {

   
  isAscending: boolean = true;

  toggleSort(event: Event) {
    event.stopPropagation(); // Prevent menu from opening
    this.isAscending = !this.isAscending; // Toggle sort order
  }
  
  onSortOptionSelected(option: string) {
    console.log('Selected sort option:', option);
  }
  

  buttons: string[] = ['PFD (3)', 'STRATFORD (7)', 'ADHS+ (11)', 'NTBC (4)'];
  selectedButton: number = 0; // Default to the first button

  constructor(public dialog: MatDialog) { }

  selectButton(index: number): void {
    this.selectedButton = index;
  }

  notesDialog(item: any) {
    this.dialog.open(NotesComponent, {
      data: item,
      height: 'auto',
      width: '520px'
    });
  }

  records = [
    {
      batchCode: 'BC001',
      submissionDate: '29-Nov-2024',
      requestedFunds: 15000,
      invoiceCount: 50,
    },
    {
      batchCode: 'BC002',
      submissionDate: '28-Nov-2024',
      requestedFunds: 20000,
      invoiceCount: 36,
    },
    {
      batchCode: 'BC003',
      submissionDate: '27-Nov-2024',
      requestedFunds: 10000,
      invoiceCount: 47,
    },
    {
      batchCode: 'BC004',
      submissionDate: '26-Nov-2024',
      requestedFunds: 12000,
      invoiceCount: 68,
    },
  ];
}
