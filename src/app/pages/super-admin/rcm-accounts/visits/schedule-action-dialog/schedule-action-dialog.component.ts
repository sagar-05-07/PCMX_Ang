import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-schedule-action-dialog',
  templateUrl: './schedule-action-dialog.component.html',
  styleUrl: './schedule-action-dialog.component.scss'
})
export class ScheduleActionDialogComponent {

  type = btoa('quote');
  projecttype = btoa('project');
  currentDate = new Date();
  assignedTo: number;
  // scheduledActionDetails: any;
  scheduledActionDetails = {
    "OldScheduleDate": null,
    "OldAssignedTo": null,
    "IsPMScheduler": null,
    "RemedialTeamMemberRemarks": null,
    "SiteLatitude": null,
    "SiteLongitude": null,
    "QuoteGotoLink": null,
    "Notes": "sdcf",
    "ManageActionId": 320,
    "ActionDetailId": 191,
    "QuoteNo": "R-025030",
    "ProjectManagerName": "Sai kumar OM",
    "SiteName": "001. CONTRACTS",
    "SowName": "A. college@IBP",
    "TaskName": "Quote",
    "ActionName": "Prepare Quotation",
    "JobCode": "QA",
    "JobCodeTitle": "Quotes Administrator",
    "PlannedHours": 10.00,
    "AssignedHours": 10.00,
    "DueDate": "2024-01-31T00:00:00",
    "ScheduleDate": "2024-01-25T00:00:00",
    "AssignedToUserId": 71,
    "AssignedToUserName": "Monika A",
    "AssignedOnDate": "2024-01-25T08:52:55.087",
    "AssignedByUserId": null,
    "AssignedByUserName": "Super Admin",
    "Status": "Scheduled",
    "AssignUserList": [
      {
        "UserId": 71,
        "UserName": "Monika A",
        "userAssignedHours": null,
        "Status": true
      },
      {
        "UserId": 67,
        "UserName": "Neeraja Amasa",
        "userAssignedHours": null,
        "Status": true
      },
      {
        "UserId": 54,
        "UserName": "Praveen kumar",
        "userAssignedHours": null,
        "Status": true
      },
      {
        "UserId": 77,
        "UserName": "Sai kumar OM",
        "userAssignedHours": null,
        "Status": true
      },
      {
        "UserId": 59,
        "UserName": "sai shwejan",
        "userAssignedHours": null,
        "Status": true
      },
      {
        "UserId": 57,
        "UserName": "Sai Shwejan",
        "userAssignedHours": null,
        "Status": true
      },
      {
        "UserId": 48,
        "UserName": "satya sagar",
        "userAssignedHours": null,
        "Status": true
      },
      {
        "UserId": 3,
        "UserName": "Sharanya k",
        "userAssignedHours": null,
        "Status": true
      },
      {
        "UserId": 68,
        "UserName": "Sree Bharath",
        "userAssignedHours": null,
        "Status": true
      },
      {
        "UserId": 53,
        "UserName": "surya teja",
        "userAssignedHours": null,
        "Status": true
      },
      {
        "UserId": 62,
        "UserName": "Tapan D",
        "userAssignedHours": null,
        "Status": true
      },
      {
        "UserId": 64,
        "UserName": "vamshi G",
        "userAssignedHours": null,
        "Status": true
      },
      {
        "UserId": 55,
        "UserName": "Varsha G",
        "userAssignedHours": null,
        "Status": true
      }
    ],
    "AllJobCodes": [
      {
        "JobCodeCategoryId": 48,
        "JobCodeCategory": "Business Services Team",
        "JobCodes": [
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 52,
            "jobCode": "AA",
            "jobCodeTitle": "Admin Assistant ",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 54,
            "jobCode": "BSM",
            "jobCodeTitle": "Business Services Manager",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 77,
            "jobCode": "CCAD1",
            "jobCodeTitle": "Construction CAD 1",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 112,
            "jobCode": "CLCNT",
            "jobCodeTitle": "Client Contact",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 113,
            "jobCode": "CLINT",
            "jobCodeTitle": "Client Interaction",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 95,
            "jobCode": "EA",
            "jobCodeTitle": "Executive Assistant",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 57,
            "jobCode": "FM",
            "jobCodeTitle": "Finance Manager",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 58,
            "jobCode": "FS",
            "jobCodeTitle": "Field Supervisor",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 53,
            "jobCode": "ITT",
            "jobCodeTitle": "IT Technician",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 99,
            "jobCode": "PM",
            "jobCodeTitle": "Project Manager",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 96,
            "jobCode": "QA",
            "jobCodeTitle": "Quotes Administrator",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 110,
            "jobCode": "QTPRP",
            "jobCodeTitle": "Quote Preparation",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 111,
            "jobCode": "SB&SR",
            "jobCodeTitle": "Setting Budget & Scope Review",
            "jobRate": null,
            "status": true
          }
        ]
      },
      {
        "JobCodeCategoryId": 49,
        "JobCodeCategory": "Construction Team",
        "JobCodes": [
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 103,
            "jobCode": "CC",
            "jobCodeTitle": "Construction Coordinator",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 78,
            "jobCode": "CCAD2",
            "jobCodeTitle": "Construction CAD 2",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 79,
            "jobCode": "CCAD3",
            "jobCodeTitle": "Construction CAD 3",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 56,
            "jobCode": "CFA",
            "jobCodeTitle": "Construction Field Assistant",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 86,
            "jobCode": "CPC1",
            "jobCodeTitle": "Construction Party Chief 1",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 87,
            "jobCode": "CPC2",
            "jobCodeTitle": "Construction Party Chief 2",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 88,
            "jobCode": "CPC3",
            "jobCodeTitle": "Construction Party Chief 3",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 93,
            "jobCode": "CTL",
            "jobCodeTitle": "Construction Team Lead",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 75,
            "jobCode": "SPC",
            "jobCodeTitle": "Senior Party Chief",
            "jobRate": null,
            "status": true
          }
        ]
      },
      {
        "JobCodeCategoryId": 50,
        "JobCodeCategory": "Engineering Team",
        "JobCodes": [
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 71,
            "jobCode": "ECAD1",
            "jobCodeTitle": "Engineering CAD 1",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 72,
            "jobCode": "ECAD2",
            "jobCodeTitle": "Engineering CAD 2",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 73,
            "jobCode": "ECAD3",
            "jobCodeTitle": "Engineering CAD 3",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 80,
            "jobCode": "EPC1",
            "jobCodeTitle": "Engineering Party Chief 1",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 81,
            "jobCode": "EPC2",
            "jobCodeTitle": "Engineering Party Chief 2",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 82,
            "jobCode": "EPC3",
            "jobCodeTitle": "Engineering Party Chief 3",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 92,
            "jobCode": "ETL",
            "jobCodeTitle": "Engineering Team Lead",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 104,
            "jobCode": "RT",
            "jobCodeTitle": "Records Tecnhician",
            "jobRate": null,
            "status": true
          }
        ]
      },
      {
        "JobCodeCategoryId": 63,
        "JobCodeCategory": "Legal Team",
        "JobCodes": [
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 107,
            "jobCode": "1DC",
            "jobCodeTitle": "1st Draft Corrections",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 119,
            "jobCode": "CRCTN",
            "jobCodeTitle": "Corrections",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 118,
            "jobCode": "DFT",
            "jobCodeTitle": "Drafting",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 116,
            "jobCode": "INTFLDWRK",
            "jobCodeTitle": "Initial Field Work",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 55,
            "jobCode": "LCAD1",
            "jobCodeTitle": "Legal CAD 1",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 70,
            "jobCode": "LCAD2",
            "jobCodeTitle": "Legal CAD 2",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 61,
            "jobCode": "LCAD3",
            "jobCodeTitle": "Legal CAD 3",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 83,
            "jobCode": "LPC1",
            "jobCodeTitle": "Legal Party Chief 1",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 84,
            "jobCode": "LPC2",
            "jobCodeTitle": "Legal Party Chief 2",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 85,
            "jobCode": "LPC3",
            "jobCodeTitle": "Legal Party Chief 3",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 94,
            "jobCode": "LTL",
            "jobCodeTitle": "Legal Team Lead",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 117,
            "jobCode": "MNMT",
            "jobCodeTitle": "Monumentation",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 100,
            "jobCode": "OLS",
            "jobCodeTitle": "Ontario Land Surveyor",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 120,
            "jobCode": "PLCHK",
            "jobCodeTitle": "Plan Check",
            "jobRate": null,
            "status": true
          }
        ]
      },
      {
        "JobCodeCategoryId": 69,
        "JobCodeCategory": "Production Team",
        "JobCodes": [
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 106,
            "jobCode": "1DR",
            "jobCodeTitle": "1st Draft Reviewer",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 123,
            "jobCode": "ACCCHK",
            "jobCodeTitle": "Accounts checking",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 122,
            "jobCode": "CLCT",
            "jobCodeTitle": "Calculations",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 121,
            "jobCode": "PROVSCH",
            "jobCodeTitle": "Project oversight & Schedule",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 74,
            "jobCode": "Test",
            "jobCodeTitle": "Field QC Technician",
            "jobRate": null,
            "status": false
          }
        ]
      },
      {
        "JobCodeCategoryId": 64,
        "JobCodeCategory": "Research Team",
        "JobCodes": [
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 115,
            "jobCode": "FLRVW",
            "jobCodeTitle": "File Review",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 59,
            "jobCode": "GISM",
            "jobCodeTitle": "GIS Manager",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 97,
            "jobCode": "GT1",
            "jobCodeTitle": "GIS Technician 1",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 98,
            "jobCode": "GT2",
            "jobCodeTitle": "GIS Technician 2",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 114,
            "jobCode": "INTPRSTP",
            "jobCodeTitle": "Initial; project Setup",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 89,
            "jobCode": "PA1",
            "jobCodeTitle": "Jr. Project Administrator",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 90,
            "jobCode": "PA2",
            "jobCodeTitle": "Project Administrator 2",
            "jobRate": null,
            "status": true
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 91,
            "jobCode": "RM",
            "jobCodeTitle": "Research Manager",
            "jobRate": null,
            "status": true
          }
        ]
      }
    ],
    "ActionComments": [],
    "SplitWithUsers": [
      {
        "UserId": null,
        "UserName": "Monika A",
        "userAssignedHours": 6.00,
        "Status": null
      }
    ],
    "IsPreferred": false,
    "IsProject": false,
    "QuoteId": 259,
    "WorkedHours": 4.00,
    "RecDate": "2024-01-25, 07:32 AM",
    "CreatedBy": "Super Admin",
    "UpdateNotes": null,
    "RemainingHours": 6.00,
    "ActionGoogleDriveId": null,
    "QuoteGoogleDriveId": null,
    "DueDateOption": "Flex Date - Action must be completed on OR before this specific date",
    "SowId": 331,
    "SiteId": 261,
    "JobCodeId": 96,
    "AllUsers": [
      {
        "leavesCount": 0,
        "schActionsCount": 132,
        "timesheetsCount": 132,
        "asRMCount": 0,
        "asPMAMCount": 8,
        "userId": 3,
        "userName": "Sharanya",
        "aliasName": "k",
        "email": "sharanya@yopmail.com",
        "phoneNumber": "963-759-1526",
        "employmentTypeId": 1,
        "reportingManagerId": 78,
        "reportingManagerName": "Navin  Mailk",
        "isVerified": true,
        "eligibleVacationDays": 80.00,
        "openingLeaveBalance": 80.00,
        "status": true,
        "createdBy": null,
        "createdDate": "0001-01-01T00:00:00",
        "modifiedBy": null,
        "modifiedDate": "0001-01-01T00:00:00",
        "permissionRoleId": null,
        "permissionLevelName": null,
        "jobCodeSet": [
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 52,
            "jobCode": "AA",
            "jobCodeTitle": "Admin Assistant ",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 54,
            "jobCode": "BSM",
            "jobCodeTitle": "Business Services Manager",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 77,
            "jobCode": "CCAD1",
            "jobCodeTitle": "Construction CAD 1",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 112,
            "jobCode": "CLCNT",
            "jobCodeTitle": "Client Contact",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 113,
            "jobCode": "CLINT",
            "jobCodeTitle": "Client Interaction",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 95,
            "jobCode": "EA",
            "jobCodeTitle": "Executive Assistant",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 57,
            "jobCode": "FM",
            "jobCodeTitle": "Finance Manager",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 58,
            "jobCode": "FS",
            "jobCodeTitle": "Field Supervisor",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 53,
            "jobCode": "ITT",
            "jobCodeTitle": "IT Technician",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 99,
            "jobCode": "PM",
            "jobCodeTitle": "Project Manager",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 96,
            "jobCode": "QA",
            "jobCodeTitle": "Quotes Administrator",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 110,
            "jobCode": "QTPRP",
            "jobCodeTitle": "Quote Preparation",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 111,
            "jobCode": "SB&SR",
            "jobCodeTitle": "Setting Budget & Scope Review",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 103,
            "jobCode": "CC",
            "jobCodeTitle": "Construction Coordinator",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 78,
            "jobCode": "CCAD2",
            "jobCodeTitle": "Construction CAD 2",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 79,
            "jobCode": "CCAD3",
            "jobCodeTitle": "Construction CAD 3",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 56,
            "jobCode": "CFA",
            "jobCodeTitle": "Construction Field Assistant",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 86,
            "jobCode": "CPC1",
            "jobCodeTitle": "Construction Party Chief 1",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 87,
            "jobCode": "CPC2",
            "jobCodeTitle": "Construction Party Chief 2",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 88,
            "jobCode": "CPC3",
            "jobCodeTitle": "Construction Party Chief 3",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 93,
            "jobCode": "CTL",
            "jobCodeTitle": "Construction Team Lead",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 75,
            "jobCode": "SPC",
            "jobCodeTitle": "Senior Party Chief",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 71,
            "jobCode": "ECAD1",
            "jobCodeTitle": "Engineering CAD 1",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 72,
            "jobCode": "ECAD2",
            "jobCodeTitle": "Engineering CAD 2",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 73,
            "jobCode": "ECAD3",
            "jobCodeTitle": "Engineering CAD 3",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 80,
            "jobCode": "EPC1",
            "jobCodeTitle": "Engineering Party Chief 1",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 81,
            "jobCode": "EPC2",
            "jobCodeTitle": "Engineering Party Chief 2",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 82,
            "jobCode": "EPC3",
            "jobCodeTitle": "Engineering Party Chief 3",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 92,
            "jobCode": "ETL",
            "jobCodeTitle": "Engineering Team Lead",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 104,
            "jobCode": "RT",
            "jobCodeTitle": "Records Tecnhician",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 107,
            "jobCode": "1DC",
            "jobCodeTitle": "1st Draft Corrections",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 119,
            "jobCode": "CRCTN",
            "jobCodeTitle": "Corrections",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 118,
            "jobCode": "DFT",
            "jobCodeTitle": "Drafting",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 116,
            "jobCode": "INTFLDWRK",
            "jobCodeTitle": "Initial Field Work",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 55,
            "jobCode": "LCAD1",
            "jobCodeTitle": "Legal CAD 1",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 70,
            "jobCode": "LCAD2",
            "jobCodeTitle": "Legal CAD 2",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 61,
            "jobCode": "LCAD3",
            "jobCodeTitle": "Legal CAD 3",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 83,
            "jobCode": "LPC1",
            "jobCodeTitle": "Legal Party Chief 1",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 84,
            "jobCode": "LPC2",
            "jobCodeTitle": "Legal Party Chief 2",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 85,
            "jobCode": "LPC3",
            "jobCodeTitle": "Legal Party Chief 3",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 94,
            "jobCode": "LTL",
            "jobCodeTitle": "Legal Team Lead",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 117,
            "jobCode": "MNMT",
            "jobCodeTitle": "Monumentation",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 100,
            "jobCode": "OLS",
            "jobCodeTitle": "Ontario Land Surveyor",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 120,
            "jobCode": "PLCHK",
            "jobCodeTitle": "Plan Check",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 106,
            "jobCode": "1DR",
            "jobCodeTitle": "1st Draft Reviewer",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 123,
            "jobCode": "ACCCHK",
            "jobCodeTitle": "Accounts checking",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 122,
            "jobCode": "CLCT",
            "jobCodeTitle": "Calculations",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 121,
            "jobCode": "PROVSCH",
            "jobCodeTitle": "Project oversight & Schedule",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 74,
            "jobCode": "Test",
            "jobCodeTitle": "Field QC Technician",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 115,
            "jobCode": "FLRVW",
            "jobCodeTitle": "File Review",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 59,
            "jobCode": "GISM",
            "jobCodeTitle": "GIS Manager",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 97,
            "jobCode": "GT1",
            "jobCodeTitle": "GIS Technician 1",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 98,
            "jobCode": "GT2",
            "jobCodeTitle": "GIS Technician 2",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 114,
            "jobCode": "INTPRSTP",
            "jobCodeTitle": "Initial; project Setup",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 89,
            "jobCode": "PA1",
            "jobCodeTitle": "Jr. Project Administrator",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 90,
            "jobCode": "PA2",
            "jobCodeTitle": "Project Administrator 2",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 91,
            "jobCode": "RM",
            "jobCodeTitle": "Research Manager",
            "jobRate": null,
            "status": null
          }
        ],
        "jobCodes": null,
        "jobShortCode": [
          " AA",
          " BSM",
          " CCAD1",
          " CLCNT",
          " CLINT",
          " EA",
          " FM",
          " FS",
          " ITT",
          " PM",
          " QA",
          " QTPRP",
          " SB&SR",
          " CC",
          " CCAD2",
          " CCAD3",
          " CFA",
          " CPC1",
          " CPC2",
          " CPC3",
          " CTL",
          " SPC",
          " ECAD1",
          " ECAD2",
          " ECAD3",
          " EPC1",
          " EPC2",
          " EPC3",
          " ETL",
          " RT",
          " 1DC",
          " CRCTN",
          " DFT",
          " INTFLDWRK",
          " LCAD1",
          " LCAD2",
          " LCAD3",
          " LPC1",
          " LPC2",
          " LPC3",
          " LTL",
          " MNMT",
          " OLS",
          " PLCHK",
          " 1DR",
          " ACCCHK",
          " CLCT",
          " PROVSCH",
          " Test",
          " FLRVW",
          " GISM",
          " GT1",
          " GT2",
          " INTPRSTP",
          " PA1",
          " PA2",
          " RM"
        ],
        "jobCodesStringSeperated": null,
        "permissionLevelStringSeperated": null,
        "permissionRoleIds": null,
        "PermissionRoles": [
          {
            "roleMasterId": 4,
            "roleName": "Project Manager",
            "status": null
          }
        ],
        "hoursPerDay": 8.00,
        "isDelete": null,
        "isSuperAdmin": false,
        "totalLeaveBalance": 80.00,
        "startDate": "2023-01-09",
        "resendEmail": null,
        "ptoLeaveBalance": 24.00,
        "ext": "9855",
        "branchId": 67,
        "branchName": "Bangalore",
        "jobCodeId": 95,
        "sjobCode": "EA",
        "jobCodetitle": "Executive Assistant",
        "jobCodeCategory": "Business Services Team"
      },
      {
        "leavesCount": 0,
        "schActionsCount": 25,
        "timesheetsCount": 25,
        "asRMCount": 0,
        "asPMAMCount": 0,
        "userId": 46,
        "userName": "Angel",
        "aliasName": "voilet",
        "email": "voilet@optionmatrix.com",
        "phoneNumber": "689-574-5265",
        "employmentTypeId": 1,
        "reportingManagerId": 78,
        "reportingManagerName": "Navin  Mailk",
        "isVerified": true,
        "eligibleVacationDays": 80.00,
        "openingLeaveBalance": 160.00,
        "status": true,
        "createdBy": null,
        "createdDate": "0001-01-01T00:00:00",
        "modifiedBy": null,
        "modifiedDate": "0001-01-01T00:00:00",
        "permissionRoleId": null,
        "permissionLevelName": null,
        "jobCodeSet": [
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 52,
            "jobCode": "AA",
            "jobCodeTitle": "Admin Assistant ",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 77,
            "jobCode": "CCAD1",
            "jobCodeTitle": "Construction CAD 1",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 103,
            "jobCode": "CC",
            "jobCodeTitle": "Construction Coordinator",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 88,
            "jobCode": "CPC3",
            "jobCodeTitle": "Construction Party Chief 3",
            "jobRate": null,
            "status": null
          }
        ],
        "jobCodes": null,
        "jobShortCode": [
          " AA",
          " CCAD1",
          " CC",
          " CPC3"
        ],
        "jobCodesStringSeperated": null,
        "permissionLevelStringSeperated": null,
        "permissionRoleIds": null,
        "PermissionRoles": [
          {
            "roleMasterId": 6,
            "roleName": "Administrator",
            "status": null
          }
        ],
        "hoursPerDay": 8.00,
        "isDelete": null,
        "isSuperAdmin": false,
        "totalLeaveBalance": 160.00,
        "startDate": "2020-11-30",
        "resendEmail": null,
        "ptoLeaveBalance": 50.00,
        "ext": "5555",
        "branchId": 68,
        "branchName": "Chennai",
        "jobCodeId": 79,
        "sjobCode": "CCAD3",
        "jobCodetitle": "Construction CAD 3",
        "jobCodeCategory": "Construction Team"
      },
      {
        "leavesCount": 0,
        "schActionsCount": 33,
        "timesheetsCount": 33,
        "asRMCount": 0,
        "asPMAMCount": 0,
        "userId": 48,
        "userName": "satya",
        "aliasName": "sagar",
        "email": "satyasagar@optionmatrix.com",
        "phoneNumber": "635-241-9874",
        "employmentTypeId": 1,
        "reportingManagerId": 78,
        "reportingManagerName": "Navin  Mailk",
        "isVerified": true,
        "eligibleVacationDays": 80.00,
        "openingLeaveBalance": 155.00,
        "status": true,
        "createdBy": null,
        "createdDate": "0001-01-01T00:00:00",
        "modifiedBy": null,
        "modifiedDate": "0001-01-01T00:00:00",
        "permissionRoleId": null,
        "permissionLevelName": null,
        "jobCodeSet": [
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 52,
            "jobCode": "AA",
            "jobCodeTitle": "Admin Assistant ",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 54,
            "jobCode": "BSM",
            "jobCodeTitle": "Business Services Manager",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 77,
            "jobCode": "CCAD1",
            "jobCodeTitle": "Construction CAD 1",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 112,
            "jobCode": "CLCNT",
            "jobCodeTitle": "Client Contact",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 113,
            "jobCode": "CLINT",
            "jobCodeTitle": "Client Interaction",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 95,
            "jobCode": "EA",
            "jobCodeTitle": "Executive Assistant",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 57,
            "jobCode": "FM",
            "jobCodeTitle": "Finance Manager",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 58,
            "jobCode": "FS",
            "jobCodeTitle": "Field Supervisor",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 53,
            "jobCode": "ITT",
            "jobCodeTitle": "IT Technician",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 99,
            "jobCode": "PM",
            "jobCodeTitle": "Project Manager",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 96,
            "jobCode": "QA",
            "jobCodeTitle": "Quotes Administrator",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 110,
            "jobCode": "QTPRP",
            "jobCodeTitle": "Quote Preparation",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 111,
            "jobCode": "SB&SR",
            "jobCodeTitle": "Setting Budget & Scope Review",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 103,
            "jobCode": "CC",
            "jobCodeTitle": "Construction Coordinator",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 78,
            "jobCode": "CCAD2",
            "jobCodeTitle": "Construction CAD 2",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 79,
            "jobCode": "CCAD3",
            "jobCodeTitle": "Construction CAD 3",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 56,
            "jobCode": "CFA",
            "jobCodeTitle": "Construction Field Assistant",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 86,
            "jobCode": "CPC1",
            "jobCodeTitle": "Construction Party Chief 1",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 87,
            "jobCode": "CPC2",
            "jobCodeTitle": "Construction Party Chief 2",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 88,
            "jobCode": "CPC3",
            "jobCodeTitle": "Construction Party Chief 3",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 93,
            "jobCode": "CTL",
            "jobCodeTitle": "Construction Team Lead",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 75,
            "jobCode": "SPC",
            "jobCodeTitle": "Senior Party Chief",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 71,
            "jobCode": "ECAD1",
            "jobCodeTitle": "Engineering CAD 1",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 72,
            "jobCode": "ECAD2",
            "jobCodeTitle": "Engineering CAD 2",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 73,
            "jobCode": "ECAD3",
            "jobCodeTitle": "Engineering CAD 3",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 80,
            "jobCode": "EPC1",
            "jobCodeTitle": "Engineering Party Chief 1",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 81,
            "jobCode": "EPC2",
            "jobCodeTitle": "Engineering Party Chief 2",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 82,
            "jobCode": "EPC3",
            "jobCodeTitle": "Engineering Party Chief 3",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 92,
            "jobCode": "ETL",
            "jobCodeTitle": "Engineering Team Lead",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 104,
            "jobCode": "RT",
            "jobCodeTitle": "Records Tecnhician",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 107,
            "jobCode": "1DC",
            "jobCodeTitle": "1st Draft Corrections",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 119,
            "jobCode": "CRCTN",
            "jobCodeTitle": "Corrections",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 118,
            "jobCode": "DFT",
            "jobCodeTitle": "Drafting",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 116,
            "jobCode": "INTFLDWRK",
            "jobCodeTitle": "Initial Field Work",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 55,
            "jobCode": "LCAD1",
            "jobCodeTitle": "Legal CAD 1",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 70,
            "jobCode": "LCAD2",
            "jobCodeTitle": "Legal CAD 2",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 61,
            "jobCode": "LCAD3",
            "jobCodeTitle": "Legal CAD 3",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 83,
            "jobCode": "LPC1",
            "jobCodeTitle": "Legal Party Chief 1",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 84,
            "jobCode": "LPC2",
            "jobCodeTitle": "Legal Party Chief 2",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 85,
            "jobCode": "LPC3",
            "jobCodeTitle": "Legal Party Chief 3",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 94,
            "jobCode": "LTL",
            "jobCodeTitle": "Legal Team Lead",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 117,
            "jobCode": "MNMT",
            "jobCodeTitle": "Monumentation",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 100,
            "jobCode": "OLS",
            "jobCodeTitle": "Ontario Land Surveyor",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 120,
            "jobCode": "PLCHK",
            "jobCodeTitle": "Plan Check",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 106,
            "jobCode": "1DR",
            "jobCodeTitle": "1st Draft Reviewer",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 123,
            "jobCode": "ACCCHK",
            "jobCodeTitle": "Accounts checking",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 122,
            "jobCode": "CLCT",
            "jobCodeTitle": "Calculations",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 121,
            "jobCode": "PROVSCH",
            "jobCodeTitle": "Project oversight & Schedule",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 115,
            "jobCode": "FLRVW",
            "jobCodeTitle": "File Review",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 59,
            "jobCode": "GISM",
            "jobCodeTitle": "GIS Manager",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 97,
            "jobCode": "GT1",
            "jobCodeTitle": "GIS Technician 1",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 98,
            "jobCode": "GT2",
            "jobCodeTitle": "GIS Technician 2",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 114,
            "jobCode": "INTPRSTP",
            "jobCodeTitle": "Initial; project Setup",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 89,
            "jobCode": "PA1",
            "jobCodeTitle": "Jr. Project Administrator",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 90,
            "jobCode": "PA2",
            "jobCodeTitle": "Project Administrator 2",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 91,
            "jobCode": "RM",
            "jobCodeTitle": "Research Manager",
            "jobRate": null,
            "status": null
          }
        ],
        "jobCodes": null,
        "jobShortCode": [
          " AA",
          " BSM",
          " CCAD1",
          " CLCNT",
          " CLINT",
          " EA",
          " FM",
          " FS",
          " ITT",
          " PM",
          " QA",
          " QTPRP",
          " SB&SR",
          " CC",
          " CCAD2",
          " CCAD3",
          " CFA",
          " CPC1",
          " CPC2",
          " CPC3",
          " CTL",
          " SPC",
          " ECAD1",
          " ECAD2",
          " ECAD3",
          " EPC1",
          " EPC2",
          " EPC3",
          " ETL",
          " RT",
          " 1DC",
          " CRCTN",
          " DFT",
          " INTFLDWRK",
          " LCAD1",
          " LCAD2",
          " LCAD3",
          " LPC1",
          " LPC2",
          " LPC3",
          " LTL",
          " MNMT",
          " OLS",
          " PLCHK",
          " 1DR",
          " ACCCHK",
          " CLCT",
          " PROVSCH",
          " FLRVW",
          " GISM",
          " GT1",
          " GT2",
          " INTPRSTP",
          " PA1",
          " PA2",
          " RM"
        ],
        "jobCodesStringSeperated": null,
        "permissionLevelStringSeperated": null,
        "permissionRoleIds": null,
        "PermissionRoles": [
          {
            "roleMasterId": 29,
            "roleName": "Reporting Manager",
            "status": null
          },
          {
            "roleMasterId": 31,
            "roleName": "Assets",
            "status": null
          }
        ],
        "hoursPerDay": 8.00,
        "isDelete": null,
        "isSuperAdmin": true,
        "totalLeaveBalance": 155.00,
        "startDate": "2021-02-04",
        "resendEmail": null,
        "ptoLeaveBalance": 50.00,
        "ext": "9855",
        "branchId": 62,
        "branchName": "Hyderabad",
        "jobCodeId": 52,
        "sjobCode": "AA",
        "jobCodetitle": "Admin Assistant ",
        "jobCodeCategory": "Business Services Team"
      },
      {
        "leavesCount": 0,
        "schActionsCount": 31,
        "timesheetsCount": 31,
        "asRMCount": 0,
        "asPMAMCount": 10,
        "userId": 53,
        "userName": "surya",
        "aliasName": "teja",
        "email": "suryateja@optionmatrix.com",
        "phoneNumber": "852-963-7412",
        "employmentTypeId": 1,
        "reportingManagerId": 78,
        "reportingManagerName": "Navin  Mailk",
        "isVerified": true,
        "eligibleVacationDays": 80.00,
        "openingLeaveBalance": 84.00,
        "status": true,
        "createdBy": null,
        "createdDate": "0001-01-01T00:00:00",
        "modifiedBy": null,
        "modifiedDate": "0001-01-01T00:00:00",
        "permissionRoleId": null,
        "permissionLevelName": null,
        "jobCodeSet": [
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 52,
            "jobCode": "AA",
            "jobCodeTitle": "Admin Assistant ",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 54,
            "jobCode": "BSM",
            "jobCodeTitle": "Business Services Manager",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 77,
            "jobCode": "CCAD1",
            "jobCodeTitle": "Construction CAD 1",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 112,
            "jobCode": "CLCNT",
            "jobCodeTitle": "Client Contact",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 113,
            "jobCode": "CLINT",
            "jobCodeTitle": "Client Interaction",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 95,
            "jobCode": "EA",
            "jobCodeTitle": "Executive Assistant",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 57,
            "jobCode": "FM",
            "jobCodeTitle": "Finance Manager",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 58,
            "jobCode": "FS",
            "jobCodeTitle": "Field Supervisor",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 53,
            "jobCode": "ITT",
            "jobCodeTitle": "IT Technician",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 99,
            "jobCode": "PM",
            "jobCodeTitle": "Project Manager",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 96,
            "jobCode": "QA",
            "jobCodeTitle": "Quotes Administrator",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 110,
            "jobCode": "QTPRP",
            "jobCodeTitle": "Quote Preparation",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 111,
            "jobCode": "SB&SR",
            "jobCodeTitle": "Setting Budget & Scope Review",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 103,
            "jobCode": "CC",
            "jobCodeTitle": "Construction Coordinator",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 78,
            "jobCode": "CCAD2",
            "jobCodeTitle": "Construction CAD 2",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 79,
            "jobCode": "CCAD3",
            "jobCodeTitle": "Construction CAD 3",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 56,
            "jobCode": "CFA",
            "jobCodeTitle": "Construction Field Assistant",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 86,
            "jobCode": "CPC1",
            "jobCodeTitle": "Construction Party Chief 1",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 87,
            "jobCode": "CPC2",
            "jobCodeTitle": "Construction Party Chief 2",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 88,
            "jobCode": "CPC3",
            "jobCodeTitle": "Construction Party Chief 3",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 93,
            "jobCode": "CTL",
            "jobCodeTitle": "Construction Team Lead",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 75,
            "jobCode": "SPC",
            "jobCodeTitle": "Senior Party Chief",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 71,
            "jobCode": "ECAD1",
            "jobCodeTitle": "Engineering CAD 1",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 72,
            "jobCode": "ECAD2",
            "jobCodeTitle": "Engineering CAD 2",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 73,
            "jobCode": "ECAD3",
            "jobCodeTitle": "Engineering CAD 3",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 80,
            "jobCode": "EPC1",
            "jobCodeTitle": "Engineering Party Chief 1",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 81,
            "jobCode": "EPC2",
            "jobCodeTitle": "Engineering Party Chief 2",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 82,
            "jobCode": "EPC3",
            "jobCodeTitle": "Engineering Party Chief 3",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 92,
            "jobCode": "ETL",
            "jobCodeTitle": "Engineering Team Lead",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 104,
            "jobCode": "RT",
            "jobCodeTitle": "Records Tecnhician",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 107,
            "jobCode": "1DC",
            "jobCodeTitle": "1st Draft Corrections",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 119,
            "jobCode": "CRCTN",
            "jobCodeTitle": "Corrections",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 118,
            "jobCode": "DFT",
            "jobCodeTitle": "Drafting",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 116,
            "jobCode": "INTFLDWRK",
            "jobCodeTitle": "Initial Field Work",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 55,
            "jobCode": "LCAD1",
            "jobCodeTitle": "Legal CAD 1",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 70,
            "jobCode": "LCAD2",
            "jobCodeTitle": "Legal CAD 2",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 61,
            "jobCode": "LCAD3",
            "jobCodeTitle": "Legal CAD 3",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 83,
            "jobCode": "LPC1",
            "jobCodeTitle": "Legal Party Chief 1",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 84,
            "jobCode": "LPC2",
            "jobCodeTitle": "Legal Party Chief 2",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 85,
            "jobCode": "LPC3",
            "jobCodeTitle": "Legal Party Chief 3",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 94,
            "jobCode": "LTL",
            "jobCodeTitle": "Legal Team Lead",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 117,
            "jobCode": "MNMT",
            "jobCodeTitle": "Monumentation",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 100,
            "jobCode": "OLS",
            "jobCodeTitle": "Ontario Land Surveyor",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 120,
            "jobCode": "PLCHK",
            "jobCodeTitle": "Plan Check",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 106,
            "jobCode": "1DR",
            "jobCodeTitle": "1st Draft Reviewer",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 123,
            "jobCode": "ACCCHK",
            "jobCodeTitle": "Accounts checking",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 122,
            "jobCode": "CLCT",
            "jobCodeTitle": "Calculations",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 121,
            "jobCode": "PROVSCH",
            "jobCodeTitle": "Project oversight & Schedule",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 115,
            "jobCode": "FLRVW",
            "jobCodeTitle": "File Review",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 59,
            "jobCode": "GISM",
            "jobCodeTitle": "GIS Manager",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 97,
            "jobCode": "GT1",
            "jobCodeTitle": "GIS Technician 1",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 98,
            "jobCode": "GT2",
            "jobCodeTitle": "GIS Technician 2",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 114,
            "jobCode": "INTPRSTP",
            "jobCodeTitle": "Initial; project Setup",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 89,
            "jobCode": "PA1",
            "jobCodeTitle": "Jr. Project Administrator",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 90,
            "jobCode": "PA2",
            "jobCodeTitle": "Project Administrator 2",
            "jobRate": null,
            "status": null
          },
          {
            "JobCodeCategoryId": null,
            "JobCodeCategory": null,
            "jobCodeId": 91,
            "jobCode": "RM",
            "jobCodeTitle": "Research Manager",
            "jobRate": null,
            "status": null
          }
        ],
        "jobCodes": null,
        "jobShortCode": [
          " AA",
          " BSM",
          " CCAD1",
          " CLCNT",
          " CLINT",
          " EA",
          " FM",
          " FS",
          " ITT",
          " PM",
          " QA",
          " QTPRP",
          " SB&SR",
          " CC",
          " CCAD2",
          " CCAD3",
          " CFA",
          " CPC1",
          " CPC2",
          " CPC3",
          " CTL",
          " SPC",
          " ECAD1",
          " ECAD2",
          " ECAD3",
          " EPC1",
          " EPC2",
          " EPC3",
          " ETL",
          " RT",
          " 1DC",
          " CRCTN",
          " DFT",
          " INTFLDWRK",
          " LCAD1",
          " LCAD2",
          " LCAD3",
          " LPC1",
          " LPC2",
          " LPC3",
          " LTL",
          " MNMT",
          " OLS",
          " PLCHK",
          " 1DR",
          " ACCCHK",
          " CLCT",
          " PROVSCH",
          " FLRVW",
          " GISM",
          " GT1",
          " GT2",
          " INTPRSTP",
          " PA1",
          " PA2",
          " RM"
        ],
        "jobCodesStringSeperated": null,
        "permissionLevelStringSeperated": null,
        "permissionRoleIds": null,
        "PermissionRoles": [
          {
            "roleMasterId": 4,
            "roleName": "Project Manager",
            "status": null
          }
        ],
        "hoursPerDay": 8.00,
        "isDelete": null,
        "isSuperAdmin": false,
        "totalLeaveBalance": 84.00,
        "startDate": "2020-02-25",
        "resendEmail": null,
        "ptoLeaveBalance": 16.00,
        "ext": "7413",
        "branchId": 62,
        "branchName": "Hyderabad",
        "jobCodeId": 96,
        "sjobCode": "QA",
        "jobCodetitle": "Quotes Administrator",
        "jobCodeCategory": "Business Services Team"
      }]
  }

  timehseetStatus: null;
  splitWithUsers = [{ 'UserName': 'Surya', 'userAssignedHours': '160' },
  { 'UserName': 'Sai', 'userAssignedHours': '150' }];
  assignedHours: any;
  isSubmitted: boolean;
  saveActionSchedulingList = [];
  actionsByUserSchData: any[];
  getActionScheduledToUser = { UserId: 0, ScheduledDate: '', TaskId: 0, UserName: '' };
  toolBar = {
    "toolbar": [
      ["bold", "italic", "underline", "strikeThrough"],
      ["justifyLeft", "justifyRight", "justifyFull", "outdent"]
    ]
  }
  isDisabled: any;
  Notes: string;
  permissions: Permissions;
  allUsers = [];

  users = [{ 'userId': '1', 'userName': 'Navin Malik' },
  { 'userId': '2', 'userName': 'Sai Shwejan' }];
  JobCodesWithCat = [];
  preferredMembers = [];
  preferredMembersCtrl = new FormControl();
  filteredUsers: Observable<any[]>;
  @ViewChild('memberInput') _memberInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  scheduledActionDetailsCloned: any;
  // log = [];
  log = [
    {
      "ManageActionId": 320,
      "ScheduledDate": "2024-01-25T00:00:00",
      "AssignedToUserId": null,
      "AssignedToUserName": "Monika A",
      "PlannedHours": 10.00,
      "AssignedHours": 10.00,
      "RemainingHours": 0.00,
      "Status": "Scheduled",
      "CreatedByUserId": null,
      "CreatedByUserName": "Super Admin",
      "CreatedDate": "2024-01-25T07:41:48.94",
      "WorkedHours": 0.00,
      "DetailId": 191,
      "Remarks": "Planned/Assigned hours have been revised from 0.6 to 10"
    },
    {
      "ManageActionId": 320,
      "ScheduledDate": "2024-01-25T00:00:00",
      "AssignedToUserId": null,
      "AssignedToUserName": "Monika A",
      "PlannedHours": 10.00,
      "AssignedHours": 10.00,
      "RemainingHours": 0.00,
      "Status": "Rescheduled",
      "CreatedByUserId": null,
      "CreatedByUserName": "Super Admin",
      "CreatedDate": "2024-01-25T08:52:55.093",
      "WorkedHours": 0.00,
      "DetailId": 191,
      "Remarks": null
    },
    {
      "ManageActionId": 320,
      "ScheduledDate": "2024-01-25T00:00:00",
      "AssignedToUserId": null,
      "AssignedToUserName": "Monika A",
      "PlannedHours": 10.00,
      "AssignedHours": 10.00,
      "RemainingHours": 6.00,
      "Status": "In Progress",
      "CreatedByUserId": null,
      "CreatedByUserName": "Monika A",
      "CreatedDate": "2024-02-13T17:17:53.38",
      "WorkedHours": 4.00,
      "DetailId": 191,
      "Remarks": "N/A"
    },
    {
      "ManageActionId": 320,
      "ScheduledDate": "2024-02-16T00:00:00",
      "AssignedToUserId": null,
      "AssignedToUserName": "Monika A",
      "PlannedHours": 10.00,
      "AssignedHours": 6.00,
      "RemainingHours": 0.00,
      "Status": "Scheduled",
      "CreatedByUserId": null,
      "CreatedByUserName": "Monika A",
      "CreatedDate": "2024-02-16T08:25:46.297",
      "WorkedHours": 0.00,
      "DetailId": 862,
      "Remarks": null
    },
    {
      "ManageActionId": 320,
      "ScheduledDate": "2024-02-16T00:00:00",
      "AssignedToUserId": null,
      "AssignedToUserName": "Monika A",
      "PlannedHours": 10.00,
      "AssignedHours": 6.00,
      "RemainingHours": 0.00,
      "Status": "Completed",
      "CreatedByUserId": null,
      "CreatedByUserName": "Monika A",
      "CreatedDate": "2024-02-16T08:57:52.13",
      "WorkedHours": 6.00,
      "DetailId": 862,
      "Remarks": "DONE"
    }
  ]
  public lat: number;
  public lng: number;
  //@ViewChild('op') mapOverlayPanel: OverlayPanel;
  isDueDateUpdated: boolean = false;
  isPM: boolean;
  isSuperAdmin: boolean;

  constructor(
    public dialogRef: MatDialogRef<ScheduleActionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
   // private _snackBar: MatSnackBar,
    //private _datePipe: DatePipe,
    // public _schService: SchedulingService,
    private sanitizer: DomSanitizer,
    // private _globalMethods: GlobalMethods

  ) {

    // this.filteredUsers = this.preferredMembersCtrl.valueChanges.pipe(
    //   startWith(null),
    //   // map(value => typeof value === 'string' ? value : value.name),
    //   // map(name => name ? this._filter(name) : [])
    //   map((fruit: string | null) => fruit ? this._filter(fruit) : this.users.slice())
    // );
    // this.permissions = this._globalMethods.checkPermissions('Action scheduling', 'Scheduling');
    // window.onresize = (e) => {
    //   //ngZone.run will help to run change detection
    //   // this.ngZone.run(() => {
    //   this.mapOverlayPanel.unbindDocumentResizeListener();
    //   // });
    // };

    // let sessionDetails = JSON.parse(localStorage.getItem('userloginsession'));
    // let roles = sessionDetails['Roles']
    // let btSuperAdmin = sessionDetails['UserDetails']['bt_user_last_loggedin_mode'];
    // if (btSuperAdmin == true || roles.filter(x => x == 'Super Admin').length > 0) {
    //   this.isSuperAdmin = true;
    // }
    // if (roles.filter(x => x == 'Project Manager').length > 0 && !this.isSuperAdmin && !this.permissions.approval) {
    //   this.isPM = true;
    // }
    // else {
    //   this.isPM = false;
    // }
  }

  ngOnInit() {
    //  this.scheduledActionDetailsCloned = clonedeep(this.data['ScheduledActionData']);
    // this.scheduledActionDetails = this.data['ScheduledActionData'];
    // console.log(this.scheduledActionDetails, "this.scheduledActionDetailsthis.scheduledActionDetailsthis.scheduledActionDetails")
    // this.log = this.data['log'];
    // this.isDisabled = this.data['isDisabled']
    // if (this.scheduledActionDetails.SiteLatitude && this.scheduledActionDetails.SiteLongitude) {
    //   this.lat = parseFloat(this.scheduledActionDetails.SiteLatitude);
    //   this.lng = parseFloat(this.scheduledActionDetails.SiteLongitude);
    // }

    this.getManageActionDetails();
  }
  checkCurrent(userId: number): any {
    // return this.preferredMembers.map(x => x.TeamMemberId).includes(userId);
  }

  private _filter(value: string) {
    // const filterValue = value.toLowerCase();
    // return this.users.filter(user => (user.userName.toLowerCase() + ' ' + user.aliasName.toLowerCase()).indexOf(filterValue) === 0);
  }

  remove(index: number): void {
    this.preferredMembers.splice(index, 1);
  }

  isUrl(s: string) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(s);
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }


  selected(event: MatAutocompleteSelectedEvent): void {
    // if (this.preferredMembers.length < 3) {
    //   this.preferredMembers.push({ TeamMemberId: event.option.value, TeamMemberName: event.option.viewValue });
    //   this._memberInput.nativeElement.value = '';
    //   this.preferredMembersCtrl.setValue(null);
    //   this.preferredMembersCtrl.disable();
    //   this.preferredMembersCtrl.enable();
    // }
    // else {
    //   this._snackBar.open('Only 3 members are allowed', '', {
    //     duration: 2000,
    //     panelClass: 'redSnackBar'
    //   });
    // }
  }


  openDueDateDialog(item: { [x: string]: any; DueDate: string | null; DueDateOptionId: any; IsRemedialAction: any; TeamMemberId: any; IsPreferred: any; FirstTeamMemberId: any; SecondTeamMemberId: any; ThirdTeamMemberId: any; Remarks: any; DueDateOption: any; PreviousDueDateOptionId: any; PreviousDueDate: string | null; }) {
    // let values = {
    //   dueDate: item.DueDate,
    //   dueDateOption: item.DueDateOptionId,
    //   isRemedial: item.IsRemedialAction,
    //   teamMemberId: item.TeamMemberId,
    //   isPreferred: item.IsPreferred,
    //   firstTeamMemberId: item.FirstTeamMemberId,
    //   secondTeamMemberId: item.SecondTeamMemberId,
    //   thirdTeamMemberId: item.ThirdTeamMemberId,
    //   remarks: item.Remarks
    // }
    // item['Remarks'] = item['RemedialTeamMemberRemarks'];
    // const data = { Data: item, isDashboard: false, permissions: this.permissions };
    //let initialItem = _.cloneDeep(item);
    // const dialogRef = this.dialog.open(ActionDueDateDialogComponent, {
    //   data: null,
    //   height: 'auto',
    //   width: '800px',
    //   autoFocus: false,
    //   disableClose: true
    // });
    // dialogRef.afterClosed().subscribe(successData => {
    //   if (successData) {
    //     item.DueDate = successData['formValues']['dueDate'] != null ? (this._datePipe.transform(new Date(successData['formValues']['dueDate']), 'y-MM-dd') + 'T00:00:00') : null;
    //     item.DueDateOptionId = successData['formValues']['dueDateOption'];
    //     item.IsRemedialAction = successData['formValues']['isRemedial'];
    //     item.TeamMemberId = successData['formValues']['teamMemberId'];
    //     item.IsPreferred = successData['formValues']['isPreferred'];
    //     item.FirstTeamMemberId = successData['formValues']['firstTeamMemberId'];
    //     item.SecondTeamMemberId = successData['formValues']['secondTeamMemberId'];
    //     item.ThirdTeamMemberId = successData['formValues']['thirdTeamMemberId'];
    //     item.Remarks = successData['formValues']['remarks'];
    //     item.DueDateOption = successData['option'];
    //     item.PreviousDueDateOptionId = initialItem['DueDateOptionId'];
    //     item.PreviousDueDate = this._datePipe.transform(initialItem['DueDate'], 'y-MM-dd');
    //     this._schService.upsertDueDate(item).subscribe(data => {
    //       // this.scheduledActionDetails.DueDateOption = item.DueDateOption;
    //       // this.scheduledActionDetails.DueDate = item.DueDate;
    //       this.isDueDateUpdated = true;
    //       this._schService.getScheduledActionDetails(null, this.data.manageActionId).subscribe(data => {
    //         this.scheduledActionDetails = data['Data'];
    //         this.preferredMembers = [];
    //         if (this.scheduledActionDetails.IsPreferred) {
    //           if (this.scheduledActionDetails.FirstTeamMemberId)
    //             this.preferredMembers.push({ TeamMemberId: this.scheduledActionDetails.FirstTeamMemberId, TeamMemberName: this.scheduledActionDetails.FirstTeamMemberName })
    //           if (this.scheduledActionDetails.SecondTeamMemberId)
    //             this.preferredMembers.push({ TeamMemberId: this.scheduledActionDetails.SecondTeamMemberId, TeamMemberName: this.scheduledActionDetails.SecondTeamMemberName })
    //           if (this.scheduledActionDetails.ThirdTeamMemberId)
    //             this.preferredMembers.push({ TeamMemberId: this.scheduledActionDetails.ThirdTeamMemberId, TeamMemberName: this.scheduledActionDetails.ThirdTeamMemberName })
    //         }
    //         this._schService.getScheduledActionActivityLog(this.data.manageActionId).subscribe(logData => {
    //           this.log = logData['Data'];
    //         })
    //       })
    //     },
    //       error => {
    //         console.log(error);
    //       }
    //     );
    //   }
    // });
  }



  // drop(event: CdkDragDrop<any[]>) {
  // //  moveItemInArray(this.preferredMembers, event.previousIndex, event.currentIndex);
  // }


  jobCodeChange(JobCodeId: any) {
    // this.users = this.scheduledActionDetails.AllUsers.filter(x => x.jobCodeSet.map(y => y.jobCodeId).includes(JobCodeId) || x.jobCodeId == JobCodeId);
    // this.users = this.users.filter(x => x.status == true);
    // this.users = _.sortBy(this.users, 'userName');
    // this.preferredMembers = [];
    // this.filteredUsers = of(this.users);
  }


  getManageActionDetails() {
    // this.scheduledActionDetails.encryptedQuoteId = btoa(this.scheduledActionDetails['QuoteId'].toString());
    // this.scheduledActionDetails.encryptedQuoteNum = btoa(this.scheduledActionDetails['QuoteNo'].toString());
    // this.scheduledActionDetails.encryptedSiteId = btoa(this.scheduledActionDetails['SiteId'].toString());
    // this.scheduledActionDetails.encryptedSowId = btoa(this.scheduledActionDetails['SowId'].toString());
    // this.jobCodeChange(this.scheduledActionDetails.JobCodeId);
    // if (this.scheduledActionDetails.IsPreferred) {
    //   if (this.scheduledActionDetails.FirstTeamMemberId)
    //     this.preferredMembers.push({ TeamMemberId: this.scheduledActionDetails.FirstTeamMemberId, TeamMemberName: this.scheduledActionDetails.FirstTeamMemberName })
    //   if (this.scheduledActionDetails.SecondTeamMemberId)
    //     this.preferredMembers.push({ TeamMemberId: this.scheduledActionDetails.SecondTeamMemberId, TeamMemberName: this.scheduledActionDetails.SecondTeamMemberName })
    //   if (this.scheduledActionDetails.ThirdTeamMemberId)
    //     this.preferredMembers.push({ TeamMemberId: this.scheduledActionDetails.ThirdTeamMemberId, TeamMemberName: this.scheduledActionDetails.ThirdTeamMemberName })
    // }
    // if (this.data.remainingHours != null) {
    //   this.assignedHours = this.scheduledActionDetails.AssignedHours = this.data.remainingHours
    // }
    // else {
    //   this.assignedHours = this.scheduledActionDetails.AssignedHours = this.scheduledActionDetails.PlannedHours;
    // }
    // this.Notes = this.scheduledActionDetails.Notes;
    // if (this.data['Data']['SplitWithUsers'] != null || this.data['Data']['SplitWithUsers'] != undefined) {
    //   this.splitWithUsers = this.data['Data']['SplitWithUsers'];
    // }
    // this.timehseetStatus = this.data['timesheetStatus'];
  }

  // getManageActionDetails(manageActionId) {
  // this._schService.getScheduledActionDetails(null,manageActionId).subscribe(data => {
  // this.scheduledActionDetails = data['Data'];
  // // this.jobCodeChange(this.scheduledActionDetails.JobCodeId);
  // this.scheduledActionDetails.encryptedQuoteId = btoa(this.scheduledActionDetails['QuoteId'].toString());
  // this.scheduledActionDetails.encryptedQuoteNum = btoa(this.scheduledActionDetails['QuoteNo'].toString());
  // this.scheduledActionDetails.encryptedSiteId = btoa(this.scheduledActionDetails['SiteId'].toString());
  // this.scheduledActionDetails.encryptedSowId = btoa(this.scheduledActionDetails['SowId'].toString());
  // if(this.data.remainingHours != null){
  // this.assignedHours = this.scheduledActionDetails.AssignedHours = this.data.remainingHours
  // }
  // else{
  // this.assignedHours = this.scheduledActionDetails.AssignedHours = this.scheduledActionDetails.PlannedHours;
  // }
  // this.Notes = this.scheduledActionDetails.Notes;
  // if(this.data['Data']['SplitWithUsers'] != null ||this.data['Data']['SplitWithUsers'] != undefined){
  // this.splitWithUsers = this.data['Data']['SplitWithUsers'];
  // }
  // this.timehseetStatus = this.data['timesheetStatus'];
  // });
  // }

  close() {
    this.dialogRef.close(this.isDueDateUpdated);
  }

  onlyNumbersWithDecimal(event: { target: { value: any; }; charCode: any; }) {
    const txt = event.target.value;
    const dotcontainer = txt.split('.');
    const decimals = txt.split('.')[1];
    const charCode = event.charCode;
    if ((charCode > 47 && charCode < 58) || charCode == 46) {
      if (decimals !== null && decimals !== undefined) {
        if (!(dotcontainer.length === 1 && charCode === 46) && (charCode < 48 || charCode > 57)
          || decimals.length >= 2) {
          return false;
        }
      } else {
        if (txt.length >= 3 && charCode !== 46) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }

  assignAction() {
    // // this.isSubmitted = true;
    // // if (this.permissions.write == false) {
    // //   if (this.scheduledActionDetails.IsPreferred == true && (!this.preferredMembers || this.preferredMembers.length < 1)) {
    // //     this._snackBar.open('Please select at least one preferred member', '', {
    // //       duration: 2000,
    // //       panelClass: 'redSnackBar'
    // //     });
    // //     return;
    // //   }
    // //   else if (this.scheduledActionDetails.PlannedHours == null || this.scheduledActionDetails.PlannedHours == '' || this.scheduledActionDetails.PlannedHours == undefined) {
    // //     this._snackBar.open('Please enter planned hours', '', {
    // //       duration: 2000,
    // //       panelClass: 'redSnackBar'
    // //     });
    // //     return;
    // //   }
    // //   let shouldUpdateManage =
    // //     ((JSON.stringify(this.scheduledActionDetails.PlannedHours) != JSON.stringify(this.scheduledActionDetailsCloned.PlannedHours)) ||
    // //       ((this.scheduledActionDetails.FirstTeamMemberId != ((this.preferredMembers.length > 0) ? this.preferredMembers[0]['TeamMemberId'] : null)) ||
    // //         (this.scheduledActionDetails.SecondTeamMemberId != ((this.preferredMembers.length > 1) ? this.preferredMembers[1]['TeamMemberId'] : null)) ||
    // //         (this.scheduledActionDetails.ThirdTeamMemberId != ((this.preferredMembers.length > 2) ? this.preferredMembers[2]['TeamMemberId'] : null))));
    // //   // let DetailsListData  = {ScheduleDate:this.currentDate , AssignedHours:this.assignedHours,AssignedUser:this.assignedTo };
    // //   let data = [{
    // //     PlannedHours: this.scheduledActionDetails.PlannedHours,
    // //     OldPlannedHours: this.scheduledActionDetailsCloned.PlannedHours,
    // //     ManageActionId: this.scheduledActionDetails.ManageActionId,
    // //     JobCodeId: this.scheduledActionDetails.JobCodeId,
    // //     Notes: this.Notes, ShouldUpdateManage: shouldUpdateManage,
    // //     FirstTeamMemberId: this.preferredMembers.length > 0 ? this.preferredMembers[0]['TeamMemberId'] : null,
    // //     SecondTeamMemberId: this.preferredMembers.length > 1 ? this.preferredMembers[1]['TeamMemberId'] : null,
    // //     ThirdTeamMemberId: this.preferredMembers.length > 2 ? this.preferredMembers[2]['TeamMemberId'] : null,
    // //     Permission: this.permissions.write,
    // //     OldFirstTeamMemberId: this.scheduledActionDetailsCloned.FirstTeamMemberId,
    // //     OldSecondTeamMemberId: this.scheduledActionDetailsCloned.SecondTeamMemberId,
    // //     OldThirdTeamMemberId: this.scheduledActionDetailsCloned.ThirdTeamMemberId,
    // //     OldNotes: this.scheduledActionDetailsCloned.Notes,
    // //     OldJobCodeId: this.scheduledActionDetailsCloned.JobCodeId,
    // //     RemainingHours: this.data.remainingHours
    // //   }];

    // //   this._schService.saveScheduledActionDetails(data).subscribe(returnData => {
    // //     if (returnData['Status'] == true) {
    // //       this.dialogRef.close(true);
    // //       return;
    // //     }
    // //   });
    // //   return;
    // // }
    // // if (this.assignedHours == null) {
    // //   this._snackBar.open('Please assign hours', '', {
    // //     duration: 2000,
    // //     panelClass: 'redSnackBar'
    // //   });
    // // }
    // // else if (this.currentDate == null || this.currentDate == undefined) {
    // //   this._snackBar.open('Please select schedule date', '', {
    // //     duration: 2000,
    // //     panelClass: 'redSnackBar'
    // //   });
    // // }
    // // else if (this.assignedHours != (this.scheduledActionDetails.AssignedHours > 0 ? this.scheduledActionDetails.AssignedHours : this.scheduledActionDetails.PlannedHours)) {
    // // this._snackBar.open('Please ensure that sum of assigned hours must be equal to planned hours (' + this.scheduledActionDetails.AssignedHours + ') but should be not zero', '', {
    // // duration: 2000,
    // // panelClass: 'redSnackBar'
    // // });
    // // }
    // // else if (this.scheduledActionDetails.DueDate == null || this.scheduledActionDetails.DueDate === '1970-01-01T00:00:00') {
    // //   this._snackBar.open('Please update due date', '', {
    // //     duration: 2000,
    // //     panelClass: 'redSnackBar'
    // //   });

    // }
    // // else if (this.assignedTo == null) {
    // //   this._snackBar.open('Please select user', '', {
    // //     duration: 2000,
    // //     panelClass: 'redSnackBar'
    // //   });
    // // }
    // // else if (this.scheduledActionDetails.PlannedHours == null || this.scheduledActionDetails.PlannedHours == '' || this.scheduledActionDetails.PlannedHours == undefined) {
    // //   this._snackBar.open('Please enter planned hours', '', {
    // //     duration: 2000,
    // //     panelClass: 'redSnackBar'
    // //   });
    // //   return;
    // // }
    // // else if (this.scheduledActionDetails.IsPreferred == true && (!this.preferredMembers || this.preferredMembers.length < 1)) {
    // //   this._snackBar.open('Please select at least one preferred member', '', {
    // //     duration: 2000,
    // //     panelClass: 'redSnackBar'
    // //   });
    // //   return;
    // // }
    // // else {
    // //   let shouldUpdateManage =
    // //     ((JSON.stringify(this.scheduledActionDetails.PlannedHours) != JSON.stringify(this.scheduledActionDetailsCloned.PlannedHours)) ||
    // //       ((this.scheduledActionDetails.FirstTeamMemberId != ((this.preferredMembers.length > 0) ? this.preferredMembers[0]['TeamMemberId'] : null)) ||
    // //         (this.scheduledActionDetails.SecondTeamMemberId != ((this.preferredMembers.length > 1) ? this.preferredMembers[1]['TeamMemberId'] : null)) ||
    // //         (this.scheduledActionDetails.ThirdTeamMemberId != ((this.preferredMembers.length > 2) ? this.preferredMembers[2]['TeamMemberId'] : null))));
    // //   // let DetailsListData  = {ScheduleDate:this.currentDate , AssignedHours:this.assignedHours,AssignedUser:this.assignedTo };
    // //   let data = [{
    // //     PlannedHours: this.scheduledActionDetails.PlannedHours,
    // //     OldPlannedHours: this.scheduledActionDetailsCloned.PlannedHours,
    // //     ManageActionId: this.scheduledActionDetails.ManageActionId,
    // //     JobCodeId: this.scheduledActionDetails.JobCodeId,
    // //     Notes: this.Notes, ShouldUpdateManage: shouldUpdateManage,
    // //     FirstTeamMemberId: this.preferredMembers.length > 0 ? this.preferredMembers[0]['TeamMemberId'] : null,
    // //     SecondTeamMemberId: this.preferredMembers.length > 1 ? this.preferredMembers[1]['TeamMemberId'] : null,
    // //     ThirdTeamMemberId: this.preferredMembers.length > 2 ? this.preferredMembers[2]['TeamMemberId'] : null,
    // //     Permission: this.permissions.write,
    // //     IsPMScheduler: this.isPM,
    // //     OldFirstTeamMemberId: this.scheduledActionDetailsCloned.FirstTeamMemberId,
    // //     OldSecondTeamMemberId: this.scheduledActionDetailsCloned.SecondTeamMemberId,
    // //     OldThirdTeamMemberId: this.scheduledActionDetailsCloned.ThirdTeamMemberId,
    // //     OldNotes: this.scheduledActionDetailsCloned.Notes,
    // //     OldJobCodeId: this.scheduledActionDetailsCloned.JobCodeId,
    // //     RemainingHours: this.data.remainingHours
    // //   }];
    // //   data[0]['DetailsList'] = [{
    // //     ActionCompletionStatus: null,
    // //     Approved: null,
    // //     AssignUserList: null,
    // //     AssignedBy: null,
    // //     AssignedHours: shouldUpdateManage ? this.scheduledActionDetails.PlannedHours : this.assignedHours,
    // //     AssignedOn: null,
    // //     AssignedTo: null,
    // //     AssignedUser: this.assignedTo,
    // //     DetailId: null,
    // //     IsDuplicate: false,
    // //     LogHoursId: null,
    // //     ScheduleDate: this._datePipe.transform(this.currentDate, 'yyyy-MM-dd'),
    // //     Status: null
    // //   }];

    // //   this._schService.saveScheduledActionDetails(data).subscribe(returnData => {
    // //     if (returnData['Status'] == true) {
    // //       this.dialogRef.close(true)
    // //     }
    // //   })
    // // }
  }

  navigateToGridView() {
    this.dialogRef.close(this.scheduledActionDetails.ManageActionId);
  }

  onlyDecimal(event: { charCode: any; target: { value: string | string[]; }; }) {
    var charCode;
    charCode = event.charCode;
    // return ((k > 47 && k < 58));
    if (charCode == 46) {
      //Check if the text already contains the . character
      if (event.target.value.indexOf(".") === -1) {
        return true;
      } else {
        return false;
      }
    } else {
      if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
    }
    return true;
  }



  getActionsByUserSchDate(userId: number, date: string | number | Date, list: any[]) {
    // this.actionsByUserSchData = [];
    // this.getActionScheduledToUser.TaskId = null;
    // this.getActionScheduledToUser.UserId = userId;
    // this.getActionScheduledToUser.ScheduledDate = this._datePipe.transform(date, 'yyyy-MM-dd');
    // this.getActionScheduledToUser.UserName = list.filter(x => x.userId == userId)[0].userName;
    // let currentObj = {
    //   ActionDetailId: this.scheduledActionDetails.ActionDetailId,
    //   ManageActionId: this.scheduledActionDetails.ManageActionId,
    //   ActionDueDateOption: this.scheduledActionDetails.DueDateOption,
    //   AssignedHours: this.scheduledActionDetails.AssignedHours,
    //   DueDate: this.scheduledActionDetails.DueDate ? this._datePipe.transform(this.scheduledActionDetails.DueDate, "yyyy-MM-dd") : 'Pending',
    //   // PendingTimesheetExists: this.scheduledActionDetails.DetailsList[0].TimesheetExists,
    //   ProjectManager: this.scheduledActionDetails.ProjectManagerName,
    //   QuoteNo: this.scheduledActionDetails.QuoteNo,
    //   RemainingHours: this.scheduledActionDetails.RemainingHours,
    //   ScheduledDate: this.scheduledActionDetails.ScheduleDate,
    //   Sequence: null,
    //   SiteName: this.scheduledActionDetails.SiteName,
    //   SowName: this.scheduledActionDetails.SowName,
    //   TaskId: this.scheduledActionDetails.TaskId,
    //   TaskName: this.scheduledActionDetails.TaskName,
    //   TeamMemberId: this.scheduledActionDetails.TeamMemberId,
    //   TimeSheetStatus: this.timehseetStatus,
    //   TimesheetId: this.timehseetStatus == null ? null : 1,
    //   // TimesheetParentExists: this.scheduledActionDetails.DetailsList[0].TimesheetExists,
    //   ToDate: null,
    //   UserId: userId,
    //   UserName: this.getActionScheduledToUser.UserName,
    //   WorkedHours: this.scheduledActionDetails.WorkedHours,
    //   PlannedHours: this.scheduledActionDetails.PlannedHours
    // }
    // this._schService.getActionsByUserSchDate(this.getActionScheduledToUser).subscribe(data => {
    //   this.actionsByUserSchData = data['Data']['ActionsList'];
    //   let details = data['Data'];
    //   // console.log(this.actionsByUserSchData);
    //   const dialogRef = this.dialog.open(ActionsByUserSchdateComponent, {
    //     data: {
    //       date: this.getActionScheduledToUser.ScheduledDate,
    //       userId: userId,
    //       userName: this.getActionScheduledToUser.UserName,
    //       list: this.actionsByUserSchData,
    //       details: details,
    //       IncludedAction: currentObj
    //     },
    //     autoFocus: false,
    //     disableClose: true,
    //     height: 'auto',
    //     width: '280px'
    //   }).afterClosed().subscribe(
    //     closedData => {
    //       if (closedData.status != true) {
    //         this.currentDate = closedData.date;
    //       }
    //       else if (closedData.status == true) {
    //         this.dialogRef.close(true);
    //       }
    //     }
    //   )
    // });
  }

}

