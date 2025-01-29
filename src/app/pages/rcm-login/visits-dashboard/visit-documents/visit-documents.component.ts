import { Component } from '@angular/core';
import { AddReferralDocComponent } from '../../refferral-dashboard/referral-documents/add-referral-doc/add-referral-doc.component';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visit-documents',
  templateUrl: './visit-documents.component.html',
  styleUrl: './visit-documents.component.scss'
})
export class VisitDocumentsComponent {

  filterToggle: boolean;
  public currentPage = 0;
  public totalSize = 0;
  filterForm: FormGroup;
  eventTypes: string[] = ['Tim Cook', 'Kim Johnson', 'Maria', 'Sophia Kelly'];
  filteredEventTypes: string[] = [...this.eventTypes];
  selectedEventType: string | null = null;

  isCardView: boolean = true;

  allTasks = [
    {
      name: 'Billing Records',
      providername: 'Lorem IPsum',
      providernameColor: 'green',
      percent: 60,
      color: 'blue',
      innerColor: 'lightblue',
      dueDate: '20-12-2022',
      taskType: 'inProgress',
      icon: 'file_copy'
    },
    {
      name: 'Medical Records',
      providername: 'Lorem IPsum',
      providernameColor: 'orange',
      percent: 80,
      color: 'orange',
      innerColor: 'lightorange',
      dueDate: '21-12-2022',
      taskType: 'completed',
      icon: 'insert_drive_file'
    },
    {
      name: 'Letter of Protection',
      providername: 'Lorem IPsum',
      providernameColor: 'red',
      percent: 40,
      color: 'red',
      innerColor: 'lightred',
      dueDate: '22-12-2022',
      taskType: 'complaint',
      icon: 'folder_open'
    },
    {
      name: 'Medical Records',
      providername: 'Lorem IPsum',
      providernameColor: 'orange',
      percent: 80,
      color: 'orange',
      innerColor: 'lightorange',
      dueDate: '21-12-2022',
      taskType: 'completed',
      icon: 'rule_folder'
    },
    {
      name: 'Letter of Protection',
      providername: 'Lorem IPsum',
      providernameColor: 'red',
      percent: 40,
      color: 'red',
      innerColor: 'lightred',
      dueDate: '22-12-2022',
      taskType: 'complaint',
      icon: 'file_present'
    }
  ];



  // isCardView: boolean = true;
  toggleButtonText() {
    this.isCardView = !this.isCardView;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase(); // Safe casting to HTMLInputElement
    this.filteredEventTypes = this.eventTypes.filter(eventType => eventType.toLowerCase().includes(filterValue));
  }


  constructor(
    public dialog: MatDialog,
    public router: Router,) {

  }
  ngOnInit(): void {
  }

  opencasedialog() {
    this.dialog.open(AddReferralDocComponent, {
      width: "700px",
      height: "auto"
    });
  }

  visitType: string = 'preVisit';  // Default value can be 'preVisit' or 'postVisit'

  onVisitTypeChange(event: any) {
    console.log('Visit Type changed to:', this.visitType); // Optional: Add any logic you need when the toggle changes
  }

  values1 = [
    {
      documentType: 'Lorem IPsum',
      documentTitle: 'Audit Report - Q1',
      uploadFile: 'audit_report_q1.pdf',
      uploadedDate: '10-Dec-2024',
      uploadedBy: 'Corey Williams',
      remarks: 'Reviewed and approved.',
    },
    {
      documentType: 'Lorem IPsum',
      documentTitle: 'Inspection Checklist',
      uploadFile: 'inspection_checklist.xlsx',
      uploadedDate: '08-Dec-2024',
      uploadedBy: 'Alex Johnson',
      remarks: 'Pending final review.',
    },
    {
      documentType: 'Lorem IPsum',
      documentTitle: 'Compliance Summary',
      uploadFile: 'compliance_summary.docx',
      uploadedDate: '05-Dec-2024',
      uploadedBy: 'Sophia Brown',
      remarks: 'Submitted for approval.',
    },
    {
      documentType: 'Lorem IPsum',
      documentTitle: 'Inspection Checklist',
      uploadFile: 'inspection_checklist.xlsx',
      uploadedDate: '08-Dec-2024',
      uploadedBy: 'Alex Johnson',
      remarks: 'Pending final review.',
    },
    {
      documentType: 'Lorem IPsum',
      documentTitle: 'Compliance Summary',
      uploadFile: 'compliance_summary.docx',
      uploadedDate: '05-Dec-2024',
      uploadedBy: 'Sophia Brown',
      remarks: 'Submitted for approval.',
    }
  ];


}


