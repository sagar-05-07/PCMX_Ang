import { Component } from '@angular/core';
import { AddDocTypeComponent } from '../doc-type/add-doc-type/add-doc-type.component';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TagmasterdialogComponent } from './tagmasterdialog/tagmasterdialog.component';

@Component({
  selector: 'app-tag-master',
  templateUrl: './tag-master.component.html',
  styleUrl: './tag-master.component.scss'
})
export class TagMasterComponent {

   
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
        tagname: 'Emergency',
        Appearence: 'Emergency',
        status: 'Active'
      },
      {
        id: 2,
        tagname: 'Delayed',
        Appearence: 'Delayed',
        IsActive: 'Inactive'
      },
      {
        id: 3,
        tagname: 'Expedite',
        Appearence: 'Expedite',
        IsActive: 'Active'
      },
     
    ];
  
    constructor(
      private dialog: MatDialog
    ) { }
  
    openAddEditDialog() {
      this.dialog.open(TagmasterdialogComponent,
        {
          width: '700px',
          height: 'auto'
        })
    }
  

}
