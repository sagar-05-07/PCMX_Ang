import { Component } from '@angular/core';
import { AddReferralDocComponent } from '../refferral-dashboard/referral-documents/add-referral-doc/add-referral-doc.component';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PatientPopComponent } from '../patient-pop/patient-pop.component';

@Component({
  selector: 'app-rcm-document',
  templateUrl: './rcm-document.component.html',
  styleUrl: './rcm-document.component.scss'
})
export class RcmDocumentComponent {

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

  isNavOpen = true;
  showPost = true;

  items: string[] = [
    'Clinic Notes', 'Denials', 'Verification', 'LOP Request', 'Medical Clearance',
    'Consent', 'Order', 'Referral', 'Pre-Auth', 'LOP', 'WC', 'FMLA',
    'ID & Insur', 'Labs', 'Imaging', 'Other', 'Estimate'
  ];

  selectedItem: string | null = null;

  ngOnInit() {
    this.selectedItem = this.items[0];
    this.selectedItems = this.itemss[0];
  }

  selectItem(item: string): void {
    this.selectedItem = item;
  }

  itemss: string[] = [
    'Finalized Medical Record', 'OUTSIDE BILL', 'Corporate Invoice', 'AOB', 'EOB',
    'Registration', 'Digital Registration', 'HIPAA Release', 'Consents', 'Med Record',
    'OP Report', 'ER-Visit', 'Labs', 'Imaging', 'Clinic Note'
  ];

  selectedItems: string | null = null;


  selectItems(item: string): void {
    this.selectedItems = item;
  }
  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
  // ngOnInit(): void {
  // }


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
      patientId: '12345678',
      referralId: '87654321',
      visitId: '23456789',
      claimId: '98765432',
      caseId: '34567890',
      locationId: '45678901',
      providerId: '56789012',
      patientName: 'John Doe',
      locationName: 'Location A',
      providerName: 'Dr. Smith'
    },
    {
      documentType: 'Lorem IPsum',
      documentTitle: 'Inspection Checklist',
      uploadFile: 'inspection_checklist.xlsx',
      uploadedDate: '08-Dec-2024',
      uploadedBy: 'Alex Johnson',
      remarks: 'Pending final review.',
      patientId: '23456789',
      referralId: '98765432',
      visitId: '34567890',
      claimId: '87654321',
      caseId: '45678901',
      locationId: '56789012',
      providerId: '67890123',
      patientName: 'Jane Smith',
      locationName: 'Location B',
      providerName: 'Dr. Johnson'
    },
    {
      documentType: 'Lorem IPsum',
      documentTitle: 'Compliance Summary',
      uploadFile: 'compliance_summary.docx',
      uploadedDate: '05-Dec-2024',
      uploadedBy: 'Sophia Brown',
      remarks: 'Submitted for approval.',
      patientId: '34567890',
      referralId: '65432109',
      visitId: '45678901',
      claimId: '76543210',
      caseId: '56789012',
      locationId: '67890123',
      providerId: '78901234',
      patientName: 'Tom Hanks',
      locationName: 'Location C',
      providerName: 'Dr. White'
    },
    {
      documentType: 'Lorem IPsum',
      documentTitle: 'Inspection Checklist',
      uploadFile: 'inspection_checklist.xlsx',
      uploadedDate: '08-Dec-2024',
      uploadedBy: 'Alex Johnson',
      remarks: 'Pending final review.',
      patientId: '45678901',
      referralId: '76543210',
      visitId: '56789012',
      claimId: '65432109',
      caseId: '67890123',
      locationId: '78901234',
      providerId: '89012345',
      patientName: 'Lucy Liu',
      locationName: 'Location D',
      providerName: 'Dr. Green'
    },
    {
      documentType: 'Lorem IPsum',
      documentTitle: 'Compliance Summary',
      uploadFile: 'compliance_summary.docx',
      uploadedDate: '05-Dec-2024',
      uploadedBy: 'Sophia Brown',
      remarks: 'Submitted for approval.',
      patientId: '56789012',
      referralId: '87654321',
      visitId: '67890123',
      claimId: '54321098',
      caseId: '78901234',
      locationId: '89012345',
      providerId: '90123456',
      patientName: 'Emma Watson',
      locationName: 'Location E',
      providerName: 'Dr. Black'
    }
  ];

  open(item: any) {
    this.dialog.open(PatientPopComponent, {
      data: item,
      height: 'auto',
      width: '1200px'
    });
  }

  scrollGrid(side: 'left' | 'right') {
    const ele = document.getElementById('grid-table-container');
    const scrollAmount = 210; // Adjust this value as needed

    if (ele) {
      // Check if ele is not null
      if (side === 'right') {
        ele.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      } else {
        ele.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    }
  }



}



