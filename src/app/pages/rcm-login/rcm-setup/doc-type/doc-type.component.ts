import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddDocTypeComponent } from './add-doc-type/add-doc-type.component';

@Component({
  selector: 'app-doc-type',
  templateUrl: './doc-type.component.html',
  styleUrl: './doc-type.component.scss'
})
export class DocTypeComponent {
   
  isAscending: boolean = true;

  toggleSort(event: Event) {
    event.stopPropagation(); // Prevent menu from opening
    this.isAscending = !this.isAscending; // Toggle sort order
  }
  
  onSortOptionSelected(option: string) {
    console.log('Selected sort option:', option);
  }


  filterToggle: boolean;
  public currentPage = 0;
  public totalSize = 0;
  filterForm: FormGroup;

  values1 = [
    {
      id: 1,
      documentType: 'Billing Records',
      context: 'Pre Visit',
      category: 'Billing',
      status: 'Active'
    },
    {
      id: 2,
      documentType: 'Medical Records',
      context: 'Post Visit',
      category: 'Medical',
      IsActive: 'Inactive'
    },
    {
      id: 3,
      documentType: 'Letter of Protection',
      context: 'Post Visit',
      category: 'Medical',
      IsActive: 'Active'
    },
    {
      id: 4,
      documentType: ' Assignment of Benefits',
      context: 'Pre Visit',
      category: 'Imaging',
      IsActive: 'Inactive'
    }
  ];

  constructor(
    private dialog: MatDialog
  ) { }

  openAddEditDialog() {
    this.dialog.open(AddDocTypeComponent,
      {
        width: '700px',
        height: 'auto'
      })
  }

}
