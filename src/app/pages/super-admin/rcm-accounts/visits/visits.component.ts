import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Orientation } from '@swimlane/ngx-charts';
import { ActionDialogComponent } from './action-dialog/action-dialog.component';
import { ScheduleActionDialogComponent } from './schedule-action-dialog/schedule-action-dialog.component';
import { Location } from '@angular/common';


export interface User {
  userName: string;
  managers: number;
  email: string;
  phone: string;
  agency: string;
  role: string;
  auditor: boolean;
  webAccess: boolean;
  mobileAccess: boolean;
  managerialRole: boolean;
  auditTypes: number;
  twoFactor: boolean;
  status: string;
  rolePermissions: string;
  specialPermissions: string;
  created: string;
  refNo: string;
  providerName: string;
  address: string;
  jobCode: string;
  plannedHours: string;
  dueDate: string;
  scheduleDate: string;
  assignedHours: string;
}

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrl: './visits.component.scss'
})
export class VisitsComponent implements OnInit {


  constructor(private dialog: MatDialog, public fb: FormBuilder, private location: Location) {
    this.FilterForm = this.fb.group({
      'KeyWord': null,
      'QuoteIds': [null],
      'ProjectManagerIds': [null],
      'StaffIds': [null],
      'BranchIds': [null],
      'JobCodeIds': [null],
      'autoQuoteNum': [null],
      'QuoteId': [null],
      'ActionIds': [null]
    })

  }
  filterState: any;
  filteredQuotes: any
  ProjectManagers = [{ 'int_user_id': '1', 'vc_user_name': 'Navin malik' },
  { 'int_user_id': '2', 'vc_user_name': 'Sai Shwejan' },
  { 'int_user_id': '3', 'vc_user_name': 'Surya' }
  ];
  FilterForm: FormGroup;
  SummaryData = [
    {
      "UserName": "Angelina Violet",
      "MondayCount": 0.0,
      "TuesdayCount": 0.0,
      "WednesdayCount": 6.00,
      "ThrusdayCount": 0.0,
      "FridayCount": 0.0,
      "SaturdayCount": 0.0,
      "SundayCount": 0.0,
      "TotalCount": 6.00,
      "ThursdayCount": 0.0
    },
    {
      "UserName": "Monika A",
      "MondayCount": 0.0,
      "TuesdayCount": 0.0,
      "WednesdayCount": 443.00,
      "ThrusdayCount": 26.00,
      "FridayCount": 0.0,
      "SaturdayCount": 0.0,
      "SundayCount": 0.0,
      "TotalCount": 469.00,
      "ThursdayCount": 26.00
    },
    {
      "UserName": "Neeraja Amasa",
      "MondayCount": 0.0,
      "TuesdayCount": 0.0,
      "WednesdayCount": 237.00,
      "ThrusdayCount": 9.00,
      "FridayCount": 5.00,
      "SaturdayCount": 0.0,
      "SundayCount": 0.0,
      "TotalCount": 251.00,
      "ThursdayCount": 9.00
    },
    {
      "UserName": "Sai kumar OM",
      "MondayCount": 0.0,
      "TuesdayCount": 0.0,
      "WednesdayCount": 0.0,
      "ThrusdayCount": 22.00,
      "FridayCount": 0.0,
      "SaturdayCount": 0.0,
      "SundayCount": 0.0,
      "TotalCount": 22.00,
      "ThursdayCount": 22.00
    },
    {
      "UserName": "Sai Shwejan",
      "MondayCount": 0.0,
      "TuesdayCount": 0.0,
      "WednesdayCount": 84.00,
      "ThrusdayCount": 0.0,
      "FridayCount": 0.0,
      "SaturdayCount": 0.0,
      "SundayCount": 0.0,
      "TotalCount": 84.00,
      "ThursdayCount": 0.0
    },
    {
      "UserName": "Satya sagar",
      "MondayCount": 0.0,
      "TuesdayCount": 0.0,
      "WednesdayCount": 10.00,
      "ThrusdayCount": 0.0,
      "FridayCount": 0.0,
      "SaturdayCount": 0.0,
      "SundayCount": 0.0,
      "TotalCount": 10.00,
      "ThursdayCount": 0.0
    },
    {
      "UserName": "Sharanya k",
      "MondayCount": 0.0,
      "TuesdayCount": 0.0,
      "WednesdayCount": 411.00,
      "ThrusdayCount": 6.00,
      "FridayCount": 0.0,
      "SaturdayCount": 6.00,
      "SundayCount": 0.0,
      "TotalCount": 423.00,
      "ThursdayCount": 6.00
    },
    {
      "UserName": "Tapan D",
      "MondayCount": 0.0,
      "TuesdayCount": 0.0,
      "WednesdayCount": 12.00,
      "ThrusdayCount": 9.00,
      "FridayCount": 0.0,
      "SaturdayCount": 0.0,
      "SundayCount": 0.0,
      "TotalCount": 21.00,
      "ThursdayCount": 9.00
    },
    {
      "UserName": "Varsha G",
      "MondayCount": 0.0,
      "TuesdayCount": 0.0,
      "WednesdayCount": 9.00,
      "ThrusdayCount": 0.0,
      "FridayCount": 0.0,
      "SaturdayCount": 0.0,
      "SundayCount": 0.0,
      "TotalCount": 9.00,
      "ThursdayCount": 0.0
    }
  ]
  "Headers": [
    {
      "Day": "ThursdayCount",
      "Date": "Thu | 01-25"
    },
    {
      "Day": "FridayCount",
      "Date": "Fri | 01-26"
    },
    {
      "Day": "SaturdayCount",
      "Date": "Sat | 01-27"
    },
    {
      "Day": "SundayCount",
      "Date": "Sun | 01-28"
    },
    {
      "Day": "MondayCount",
      "Date": "Mon | 01-29"
    },
    {
      "Day": "TuesdayCount",
      "Date": "Tue | 01-30"
    },
    {
      "Day": "WednesdayCount",
      "Date": "Wed | 01-31"
    }
  ]
  filterToggle: boolean = false;
  totalSize: any;
  users = [{ 'userId': '1', 'userName': 'Navin Malik' },
  { 'userId': '2', 'userName': 'Sai Shwejan' }];
  currentPage: any;
  pageSize: any;
  clearFilter() { }
  filter() { }
  filterForm: FormGroup;
  showWeek: boolean = true;
  showDay: boolean = false;
  IsShow: boolean = false;
  actionListPM = [
    {
      "OldFirstTeamMemberId": null,
      "OldSecondTeamMemberId": null,
      "OldThirdTeamMemberId": null,
      "OldNotes": null,
      "OldJobCodeId": null,
      "WasManageActionDeleted": null,
      "ActionGoogleDriveId": null,
      "ManageActionId": 316,
      "TaskId": 10,
      "TaskName": "Field",
      "QuoteId": 230,
      "QuoteNo": "A-025006",
      "SiteId": 230,

      "SiteName": "438 Miller Ave",
      "SiteStreetAddress": "438 Miller Ave",
      "providerName": "Chris Waller",
      "siteLatitude": null,
      "siteLongitude": null,
      "SiteCity": "Oshawa",
      "SiteState": null,
      "SiteCountry": null,
      "SowId": 303,
      "SowName": "SRPR",
      "ActionId": 15,
      "ActionName": "Field QC",
      "JobCodeId": 74,
      "JobCode": "Test",
      "googleDriveFileId": null,
      "JobCodeTitle": "Field QC Technician",
      "JobCodeStatus": false,
      "PlannedHours": 3.00,
      "CreatedDate": "2021-02-05T20:20:15.063",
      "CreatedOn": "2021-02-05T00:00:00",
      "DueDate": "2021-02-10T05:00:00",
      "DueDateOptionId": 38,
      "DueDateOption": "Flex Date - Action must be completed on OR before this specific date",
      "percentageAction": null,
      "DetailsList": [
        {
          "ModifiedBy": null,
          "IsDuplicate": false,
          "AssignedHours": 3.00,
          "AssignedUser": 3,
          "ScheduleDate": null,
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
              "UserId": 3,
              "UserName": "Sharanya k",
              "userAssignedHours": null,
              "Status": true
            }
          ],
          "AssignedOn": "2024-02-12",
          "AssignedTo": "Sharanya k",
          "AssignedBy": "surya teja",
          "DetailId": 856,
          "LogHoursId": 734,
          "ActionCompletionStatus": "In Progress",
          "Approved": false,
          "Status": "Rejected",
          "AssignedUserStatus": true,
          "TimesheetSubmittedDate": null,
          "CompletedDate": null,
          "ActualHours": null,
          "ActualCost": null,
          "WorkedHours": null,
          "RemainingHours": null,
          "TimesheetExists": false
        }
      ],
      "IsRemedialAction": false,
      "TeamMemberId": null,
      "ProjectManagerId": 53,
      "ProjectManagerName": "surya teja",
      "TotalAssignedHours": 0,
      "TotalScheduledHours": 3.00,
      "UnScheduled": true,
      "Rescheduled": true,
      "ProjectType": "project",
      "IsProject": true,
      "Notes": ".",
      "IsDueToday": true,
      "Address": null,
      "City": null,
      "LogHourId": 734,
      "IsApproved": null,
      "IsDelete": false,
      "ShouldUpdateManage": false,
      "IsPreferred": false,
      "FirstTeamMemberId": null,
      "SecondTeamMemberId": null,
      "ThirdTeamMemberId": null,
      "ScheduledActionsCount": 0,
      "JobCodeRate": null,
      "ActualHours": null,
      "ActualCost": null,
      "WorkedHours": null,
      "RemainingHours": null,
      "OldPlannedHours": null,
      "PreviousDueDateOptionId": null,
      "PreviousDueDate": null,
      "Remarks": null,
      "Permission": false,
      "IsPMScheduler": true,
      "EncryptedQuoteId": "MjMw",
      "EncryptedQuoteNum": "QS0wMjUwMDY=",
      "EncryptedProjectType": "cHJvamVjdA==",
      "EncryptedSiteId": "MjMw",
      "EncryptedSowId": "MzAz"
    },
    {
      "OldFirstTeamMemberId": null,
      "OldSecondTeamMemberId": null,
      "OldThirdTeamMemberId": null,
      "OldNotes": null,
      "OldJobCodeId": null,
      "WasManageActionDeleted": null,
      "ActionGoogleDriveId": null,
      "ManageActionId": 572,
      "TaskId": 10,
      "TaskName": "Field",
      "QuoteId": 268,
      "QuoteNo": "A-025039",
      "SiteId": 297,
      "SiteName": "Jalandhar",
      "SiteStreetAddress": "Cross street",
      "providerName": "Chunck James",
      "siteLatitude": null,
      "siteLongitude": null,
      "SiteCity": "Jalandhar",
      "SiteState": null,
      "SiteCountry": null,
      "SowId": 396,
      "SowName": "Surveying department",
      "ActionId": 7,
      "ActionName": "Field Drafting",
      "JobCodeId": 89,
      "JobCode": "PA1",
      "googleDriveFileId": null,
      "JobCodeTitle": "Jr. Project Administrator",
      "JobCodeStatus": true,
      "PlannedHours": 10.00,
      "CreatedDate": "2024-02-05T05:59:32.673",
      "CreatedOn": "2024-02-05T00:00:00",
      "DueDate": "2024-02-26T18:30:00",
      "DueDateOptionId": 37,
      "DueDateOption": "Fixed Date - Action must be completed ON this specific date",
      "percentageAction": null,
      "DetailsList": [
        {
          "ModifiedBy": null,
          "IsDuplicate": false,
          "AssignedHours": 10.00,
          "AssignedUser": 71,
          "ScheduleDate": null,
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
          "AssignedOn": "2024-02-05",
          "AssignedTo": "Monika A",
          "AssignedBy": "Super Admin",
          "DetailId": 425,
          "LogHoursId": 284,
          "ActionCompletionStatus": "Completed",
          "Approved": null,
          "Status": "Pending PM Review",
          "AssignedUserStatus": true,
          "TimesheetSubmittedDate": null,
          "CompletedDate": null,
          "ActualHours": null,
          "ActualCost": null,
          "WorkedHours": null,
          "RemainingHours": null,
          "TimesheetExists": false
        }
      ],
      "IsRemedialAction": false,
      "TeamMemberId": null,
      "ProjectManagerId": 77,
      "ProjectManagerName": "Sai kumar OM",
      "TotalAssignedHours": 0,
      "TotalScheduledHours": 0.00,
      "UnScheduled": false,
      "Rescheduled": null,
      "ProjectType": "project",
      "IsProject": true,
      "Notes": "SOW to be completed",
      "IsDueToday": true,
      "Address": null,
      "City": null,
      "LogHourId": 284,
      "IsApproved": null,
      "IsDelete": false,
      "ShouldUpdateManage": false,
      "IsPreferred": false,
      "FirstTeamMemberId": null,
      "SecondTeamMemberId": null,
      "ThirdTeamMemberId": null,
      "ScheduledActionsCount": 0,
      "JobCodeRate": null,
      "ActualHours": null,
      "ActualCost": null,
      "WorkedHours": null,
      "RemainingHours": null,
      "OldPlannedHours": null,
      "PreviousDueDateOptionId": null,
      "PreviousDueDate": null,
      "Remarks": null,
      "Permission": false,
      "IsPMScheduler": true,
      "EncryptedQuoteId": "MjY4",
      "EncryptedQuoteNum": "QS0wMjUwMzk=",
      "EncryptedProjectType": "cHJvamVjdA==",
      "EncryptedSiteId": "Mjk3",
      "EncryptedSowId": "Mzk2"
    },
    {
      "OldFirstTeamMemberId": null,
      "OldSecondTeamMemberId": null,
      "OldThirdTeamMemberId": null,
      "OldNotes": null,
      "OldJobCodeId": null,
      "WasManageActionDeleted": null,
      "ActionGoogleDriveId": null,
      "ManageActionId": 876,
      "TaskId": 10,
      "TaskName": "Field",
      "QuoteId": 272,
      "QuoteNo": "A-025042",
      "SiteId": 309,
      "SiteName": "Reheja OM",
      "SiteStreetAddress": "Mindspace",
      "providerName": "Bennett Pugh",
      "siteLatitude": null,
      "siteLongitude": null,
      "SiteCity": "Hitech city",
      "SiteState": null,
      "SiteCountry": null,
      "SowId": 444,
      "SowName": "3rd floor",
      "ActionId": 4,
      "ActionName": "Field Design",
      "JobCodeId": 118,
      "JobCode": "DFT",
      "googleDriveFileId": null,
      "JobCodeTitle": "Drafting",
      "JobCodeStatus": true,
      "PlannedHours": 19.00,
      "CreatedDate": "2024-02-09T11:42:03.68",
      "CreatedOn": "2024-02-09T00:00:00",
      "DueDate": "2024-03-08T18:30:00",
      "DueDateOptionId": 37,
      "DueDateOption": "Fixed Date - Action must be completed ON this specific date",
      "percentageAction": null,
      "DetailsList": [
        {
          "ModifiedBy": null,
          "IsDuplicate": false,
          "AssignedHours": 2.00,
          "AssignedUser": 71,
          "ScheduleDate": null,
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
          "AssignedOn": "2024-02-16",
          "AssignedTo": "Monika A",
          "AssignedBy": "Monika A",
          "DetailId": 878,
          "LogHoursId": 768,
          "ActionCompletionStatus": "Completed",
          "Approved": false,
          "Status": "Rejected",
          "AssignedUserStatus": true,
          "TimesheetSubmittedDate": null,
          "CompletedDate": null,
          "ActualHours": null,
          "ActualCost": null,
          "WorkedHours": null,
          "RemainingHours": null,
          "TimesheetExists": false
        }
      ],
      "IsRemedialAction": false,
      "TeamMemberId": null,
      "ProjectManagerId": 77,
      "ProjectManagerName": "Sai kumar OM",
      "TotalAssignedHours": 0,
      "TotalScheduledHours": 0.00,
      "UnScheduled": false,
      "Rescheduled": true,
      "ProjectType": "project",
      "IsProject": true,
      "Notes": "SOW to be completed",
      "IsDueToday": true,
      "Address": null,
      "City": null,
      "LogHourId": 768,
      "IsApproved": null,
      "IsDelete": false,
      "ShouldUpdateManage": false,
      "IsPreferred": false,
      "FirstTeamMemberId": null,
      "SecondTeamMemberId": null,
      "ThirdTeamMemberId": null,
      "ScheduledActionsCount": 0,
      "JobCodeRate": null,
      "ActualHours": null,
      "ActualCost": null,
      "WorkedHours": null,
      "RemainingHours": null,
      "OldPlannedHours": null,
      "PreviousDueDateOptionId": null,
      "PreviousDueDate": null,
      "Remarks": null,
      "Permission": false,
      "IsPMScheduler": true,
      "EncryptedQuoteId": "Mjcy",
      "EncryptedQuoteNum": "QS0wMjUwNDI=",
      "EncryptedProjectType": "cHJvamVjdA==",
      "EncryptedSiteId": "MzA5",
      "EncryptedSowId": "NDQ0"
    },
    {
      "OldFirstTeamMemberId": null,
      "OldSecondTeamMemberId": null,
      "OldThirdTeamMemberId": null,
      "OldNotes": null,
      "OldJobCodeId": null,
      "WasManageActionDeleted": null,
      "ActionGoogleDriveId": null,
      "ManageActionId": 837,
      "TaskId": 10,
      "TaskName": "Field",
      "QuoteId": 272,
      "QuoteNo": "A-025042",
      "SiteId": 306,
      "SiteName": "Wewrok kondapur",
      "SiteStreetAddress": "Kondapur",
      "providerName": "Bennett Pugh",
      "siteLatitude": null,
      "siteLongitude": null,
      "SiteCity": "Hitch city",
      "SiteState": null,
      "SiteCountry": null,
      "SowId": 434,
      "SowName": "4TH FLOOR",
      "ActionId": 15,
      "ActionName": "Field QC",
      "JobCodeId": 59,
      "JobCode": "GISM",
      "googleDriveFileId": null,
      "JobCodeTitle": "GIS Manager",
      "JobCodeStatus": true,
      "PlannedHours": 15.00,
      "CreatedDate": "2024-02-09T05:19:02.663",
      "CreatedOn": "2024-02-09T00:00:00",
      "DueDate": "2024-03-12T18:30:00",
      "DueDateOptionId": 37,
      "DueDateOption": "Fixed Date - Action must be completed ON this specific date",
      "percentageAction": null,
      "DetailsList": [
        {
          "ModifiedBy": null,
          "IsDuplicate": false,
          "AssignedHours": 5.00,
          "AssignedUser": 71,
          "ScheduleDate": null,
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
          "AssignedOn": "2024-02-16",
          "AssignedTo": "Monika A",
          "AssignedBy": "Monika A",
          "DetailId": 881,
          "LogHoursId": 777,
          "ActionCompletionStatus": "Completed",
          "Approved": false,
          "Status": "Rejected",
          "AssignedUserStatus": true,
          "TimesheetSubmittedDate": null,
          "CompletedDate": null,
          "ActualHours": null,
          "ActualCost": null,
          "WorkedHours": null,
          "RemainingHours": null,
          "TimesheetExists": false
        }
      ],
      "IsRemedialAction": false,
      "TeamMemberId": null,
      "ProjectManagerId": 77,
      "ProjectManagerName": "Sai kumar OM",
      "TotalAssignedHours": 0,
      "TotalScheduledHours": 0.00,
      "UnScheduled": false,
      "Rescheduled": true,
      "ProjectType": "project",
      "IsProject": true,
      "Notes": "SOW TO BE COMPLETED&nbsp;",
      "IsDueToday": true,
      "Address": null,
      "City": null,
      "LogHourId": 777,
      "IsApproved": null,
      "IsDelete": false,
      "ShouldUpdateManage": false,
      "IsPreferred": false,
      "FirstTeamMemberId": null,
      "SecondTeamMemberId": null,
      "ThirdTeamMemberId": null,
      "ScheduledActionsCount": 0,
      "JobCodeRate": null,
      "ActualHours": null,
      "ActualCost": null,
      "WorkedHours": null,
      "RemainingHours": null,
      "OldPlannedHours": null,
      "PreviousDueDateOptionId": null,
      "PreviousDueDate": null,
      "Remarks": null,
      "Permission": false,
      "IsPMScheduler": true,
      "EncryptedQuoteId": "Mjcy",
      "EncryptedQuoteNum": "QS0wMjUwNDI=",
      "EncryptedProjectType": "cHJvamVjdA==",
      "EncryptedSiteId": "MzA2",
      "EncryptedSowId": "NDM0"
    },
    {
      "OldFirstTeamMemberId": null,
      "OldSecondTeamMemberId": null,
      "OldThirdTeamMemberId": null,
      "OldNotes": null,
      "OldJobCodeId": null,
      "WasManageActionDeleted": null,
      "ActionGoogleDriveId": null,
      "ManageActionId": 991,
      "TaskId": 10,
      "TaskName": "Field",
      "QuoteId": 272,
      "QuoteNo": "A-025042",
      "SiteId": 308,
      "SiteName": "Bangalore ",
      "SiteStreetAddress": "White field Banglore.",
      "providerName": "Bennett Pugh",
      "siteLatitude": null,
      "siteLongitude": null,
      "SiteCity": "Bengaluru",
      "SiteState": null,
      "SiteCountry": null,
      "SowId": 439,
      "SowName": "3rd floor",
      "ActionId": 29,
      "ActionName": "Monumentation",
      "JobCodeId": 61,
      "JobCode": "LCAD3",
      "googleDriveFileId": null,
      "JobCodeTitle": "Legal CAD 3",
      "JobCodeStatus": true,
      "PlannedHours": 13.00,
      "CreatedDate": "2024-02-11T06:06:55.7",
      "CreatedOn": "2024-02-11T00:00:00",
      "DueDate": "2024-03-13T18:30:00",
      "DueDateOptionId": 38,
      "DueDateOption": "Flex Date - Action must be completed on OR before this specific date",
      "percentageAction": null,
      "DetailsList": [
        {
          "ModifiedBy": null,
          "IsDuplicate": false,
          "AssignedHours": 4.00,
          "AssignedUser": 71,
          "ScheduleDate": null,
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
          "AssignedOn": "2024-02-16",
          "AssignedTo": "Monika A",
          "AssignedBy": "Monika A",
          "DetailId": 907,
          "LogHoursId": 795,
          "ActionCompletionStatus": "Completed",
          "Approved": null,
          "Status": "Pending PM Review",
          "AssignedUserStatus": true,
          "TimesheetSubmittedDate": null,
          "CompletedDate": null,
          "ActualHours": null,
          "ActualCost": null,
          "WorkedHours": null,
          "RemainingHours": null,
          "TimesheetExists": false
        }
      ],
      "IsRemedialAction": false,
      "TeamMemberId": null,
      "ProjectManagerId": 77,
      "ProjectManagerName": "Sai kumar OM",
      "TotalAssignedHours": 0,
      "TotalScheduledHours": 0.00,
      "UnScheduled": false,
      "Rescheduled": true,
      "ProjectType": "project",
      "IsProject": true,
      "Notes": "SOW to be completed",
      "IsDueToday": true,
      "Address": null,
      "City": null,
      "LogHourId": 795,
      "IsApproved": null,
      "IsDelete": false,
      "ShouldUpdateManage": false,
      "IsPreferred": false,
      "FirstTeamMemberId": null,
      "SecondTeamMemberId": null,
      "ThirdTeamMemberId": null,
      "ScheduledActionsCount": 0,
      "JobCodeRate": null,
      "ActualHours": null,
      "ActualCost": null,
      "WorkedHours": null,
      "RemainingHours": null,
      "OldPlannedHours": null,
      "PreviousDueDateOptionId": null,
      "PreviousDueDate": null,
      "Remarks": null,
      "Permission": false,
      "IsPMScheduler": true,
      "EncryptedQuoteId": "Mjcy",
      "EncryptedQuoteNum": "QS0wMjUwNDI=",
      "EncryptedProjectType": "cHJvamVjdA==",
      "EncryptedSiteId": "MzA4",
      "EncryptedSowId": "NDM5"
    },]
  public orientation: Orientation;

  StaffUsers = [{ 'userId': '1', 'userName': 'Navin malik' },
  { 'userId': '2', 'userName': 'Sai Shwejan' },
  { 'userId': '3', 'userName': 'Surya' }
  ];
  view: number
  week: number
  items: any = [];
  noData: boolean = false;
  buttonSelected: boolean = true;
  Branchs = [{ 'branchId': '1', 'branchName': 'Hyderabad' },
  { 'branchId': '2', 'branchName': 'Banglore' },
  { 'branchId': '3', 'branchName': 'Chennai' }
  ];
  Actions = [
    {
      "actionMasterId": 14,
      "actionMasterName": "1st Draft Corrections",
      "jobCodeId": 55,
      "jobCode": "LCAD1",
      "jobCodeTitle": "Legal CAD 1",
      "jobCodeRate": 75.00,
      "isDeleted": false,
      "createdBy": null,
      "modifiedBy": null,
      "status": true,
      "projectsCount": 6,
      "quotesCount": 2
    },
    {
      "actionMasterId": 13,
      "actionMasterName": "1st Draft Review",
      "jobCodeId": 106,
      "jobCode": "1DR",
      "jobCodeTitle": "1st Draft Reviewer",
      "jobCodeRate": 60.00,
      "isDeleted": false,
      "createdBy": null,
      "modifiedBy": null,
      "status": true,
      "projectsCount": 8,
      "quotesCount": 0
    },
    {
      "actionMasterId": 34,
      "actionMasterName": "Accounts checking",
      "jobCodeId": 123,
      "jobCode": "ACCCHK",
      "jobCodeTitle": "Accounts checking",
      "jobCodeRate": 50.00,
      "isDeleted": false,
      "createdBy": null,
      "modifiedBy": null,
      "status": true,
      "projectsCount": 3,
      "quotesCount": 0
    },
    {
      "actionMasterId": 30,
      "actionMasterName": "Audit",
      "jobCodeId": 111,
      "jobCode": "SB&SR",
      "jobCodeTitle": "Setting Budget & Scope Review",
      "jobCodeRate": 20.00,
      "isDeleted": false,
      "createdBy": null,
      "modifiedBy": null,
      "status": true,
      "projectsCount": 1,
      "quotesCount": 0
    },
    {
      "actionMasterId": 33,
      "actionMasterName": "Calculations",
      "jobCodeId": 122,
      "jobCode": "CLCT",
      "jobCodeTitle": "Calculations",
      "jobCodeRate": 50.00,
      "isDeleted": false,
      "createdBy": null,
      "modifiedBy": null,
      "status": true,
      "projectsCount": 3,
      "quotesCount": 0
    },
    {
      "actionMasterId": 24,
      "actionMasterName": "Client Contact",
      "jobCodeId": 112,
      "jobCode": "CLCNT",
      "jobCodeTitle": "Client Contact",
      "jobCodeRate": 30.00,
      "isDeleted": false,
      "createdBy": null,
      "modifiedBy": null,
      "status": true,
      "projectsCount": 3,
      "quotesCount": 0
    },
    {
      "actionMasterId": 25,
      "actionMasterName": "Client Interaction",
      "jobCodeId": 113,
      "jobCode": "CLINT",
      "jobCodeTitle": "Client Interaction",
      "jobCodeRate": 30.00,
      "isDeleted": false,
      "createdBy": null,
      "modifiedBy": null,
      "status": true,
      "projectsCount": 3,
      "quotesCount": 0
    },
    {
      "actionMasterId": 4,
      "actionMasterName": "Field Design",
      "jobCodeId": 80,
      "jobCode": "EPC1",
      "jobCodeTitle": "Engineering Party Chief 1",
      "jobCodeRate": 100.00,
      "isDeleted": false,
      "createdBy": null,
      "modifiedBy": null,
      "status": true,
      "projectsCount": 10,
      "quotesCount": 2
    },
    {
      "actionMasterId": 7,
      "actionMasterName": "Field Drafting",
      "jobCodeId": 79,
      "jobCode": "CCAD3",
      "jobCodeTitle": "Construction CAD 3",
      "jobCodeRate": 95.00,
      "isDeleted": false,
      "createdBy": null,
      "modifiedBy": null,
      "status": true,
      "projectsCount": 12,
      "quotesCount": 2
    },
    {
      "actionMasterId": 15,
      "actionMasterName": "Field QC",
      "jobCodeId": 74,
      "jobCode": "Test",
      "jobCodeTitle": "Field QC Technician",
      "jobCodeRate": 110.00,
      "isDeleted": false,
      "createdBy": null,
      "modifiedBy": null,
      "status": true,
      "projectsCount": 11,
      "quotesCount": 1
    },
    {
      "actionMasterId": 2,
      "actionMasterName": "Fieldwork",
      "jobCodeId": 87,
      "jobCode": "CPC2",
      "jobCodeTitle": "Construction Party Chief 2",
      "jobCodeRate": 110.00,
      "isDeleted": false,
      "createdBy": null,
      "modifiedBy": null,
      "status": true,
      "projectsCount": 6,
      "quotesCount": 0
    },
    {
      "actionMasterId": 27,
      "actionMasterName": "File Review",
      "jobCodeId": 115,
      "jobCode": "FLRVW",
      "jobCodeTitle": "File Review",
      "jobCodeRate": 50.00,
      "isDeleted": false,
      "createdBy": null,
      "modifiedBy": null,
      "status": true,
      "projectsCount": 2,
      "quotesCount": 0
    },
    {
      "actionMasterId": 28,
      "actionMasterName": "Initial Fieldwork",
      "jobCodeId": 116,
      "jobCode": "INTFLDWRK",
      "jobCodeTitle": "Initial Field Work",
      "jobCodeRate": 45.00,
      "isDeleted": false,
      "createdBy": null,
      "modifiedBy": null,
      "status": true,
      "projectsCount": 3,
      "quotesCount": 0
    },
    {
      "actionMasterId": 26,
      "actionMasterName": "Initial Project Setup",
      "jobCodeId": 114,
      "jobCode": "INTPRSTP",
      "jobCodeTitle": "Initial; project Setup",
      "jobCodeRate": 40.00,
      "isDeleted": false,
      "createdBy": null,
      "modifiedBy": null,
      "status": true,
      "projectsCount": 3,
      "quotesCount": 0
    },
    {
      "actionMasterId": 29,
      "actionMasterName": "Monumentation",
      "jobCodeId": 117,
      "jobCode": "MNMT",
      "jobCodeTitle": "Monumentation",
      "jobCodeRate": 40.00,
      "isDeleted": false,
      "createdBy": null,
      "modifiedBy": null,
      "status": true,
      "projectsCount": 3,
      "quotesCount": 0
    },
    {
      "actionMasterId": 31,
      "actionMasterName": "Plan Check",
      "jobCodeId": 117,
      "jobCode": "MNMT",
      "jobCodeTitle": "Monumentation",
      "jobCodeRate": 40.00,
      "isDeleted": false,
      "createdBy": null,
      "modifiedBy": null,
      "status": true,
      "projectsCount": 3,
      "quotesCount": 0
    },
    {
      "actionMasterId": 3,
      "actionMasterName": "Prepare Quotation",
      "jobCodeId": 96,
      "jobCode": "QA",
      "jobCodeTitle": "Quotes Administrator",
      "jobCodeRate": 60.00,
      "isDeleted": false,
      "createdBy": null,
      "modifiedBy": null,
      "status": true,
      "projectsCount": 5,
      "quotesCount": 6
    },
    {
      "actionMasterId": 20,
      "actionMasterName": "Project Checking",
      "jobCodeId": 90,
      "jobCode": "PA2",
      "jobCodeTitle": "Project Administrator 2",
      "jobCodeRate": 80.00,
      "isDeleted": false,
      "createdBy": null,
      "modifiedBy": null,
      "status": true,
      "projectsCount": 8,
      "quotesCount": 0
    },
    {
      "actionMasterId": 32,
      "actionMasterName": "Project Oversight & Scheduling",
      "jobCodeId": 121,
      "jobCode": "PROVSCH",
      "jobCodeTitle": "Project oversight & Schedule",
      "jobCodeRate": 52.00,
      "isDeleted": false,
      "createdBy": null,
      "modifiedBy": null,
      "status": true,
      "projectsCount": 3,
      "quotesCount": 0
    },]
  isMenuOn: boolean = true;
  show: (true | false);

  values = [
    {
      "clientID": 78,
      "clientName": "Nagarjuna Cement Limited",
      "clientCode": "Nagted",
      "clientEmail": "mailto:nclncl@ind.com",
      "clientPhone": "784-952-4526",
      "clientType": "Manufacturer ",
      "clientTypeID": 84,
      "clientAddressID": null,
      "clientCountryID": null,
      "clientCountry": "India",
      "clientStateID": null,
      "clientState": "Andhra Pradesh",
      "clientCity": "Vijayawada",
      "clientZip": "501505",
      "clientStreetAddress": "Kondapalli",
      "clientbtFlag": false,
      "clientbtStatus": true,
      "clientbtDelete": null,
      "createdBy": null,
      "createdDate": "2024-02-01T04:32:04.763",
      "activityDate": null,
      "modifiedBy": null,
      "modifiedDate": null,
      "clientContacts": 0,
      "quotesCount": 0,
      "projectsCount": 1,
      "ext": "-",
      "lat": null,
      "lng": null,
      "totalClients": 11
    },
    {
      "clientID": 76,
      "clientName": "Option matrix",
      "clientCode": "Optrix",
      "clientEmail": "mailto:optionmatrix@gmail.com",
      "clientPhone": "859-674-1236",
      "clientType": "Government",
      "clientTypeID": 146,
      "clientAddressID": null,
      "clientCountryID": null,
      "clientCountry": "India",
      "clientStateID": null,
      "clientState": "Telangana ",
      "clientCity": "hitechcity",
      "clientZip": "501505",
      "clientStreetAddress": "kondapur",
      "clientbtFlag": true,
      "clientbtStatus": true,
      "clientbtDelete": null,
      "createdBy": null,
      "createdDate": "2024-01-08T10:49:14.593",
      "activityDate": null,
      "modifiedBy": null,
      "modifiedDate": null,
      "clientContacts": 5,
      "quotesCount": 3,
      "projectsCount": 4,
      "ext": "6363",
      "lat": null,
      "lng": null,
      "totalClients": 11
    },
    {
      "clientID": 68,
      "clientName": "Sonalika",
      "clientCode": "Theive-2",
      "clientEmail": "mailto:sonalika@contact.com",
      "clientPhone": "772-346-2354",
      "clientType": "Surveyor",
      "clientTypeID": 89,
      "clientAddressID": null,
      "clientCountryID": 1,
      "clientCountry": "INDIA",
      "clientStateID": 7,
      "clientState": "PUNJAB",
      "clientCity": "hosur",
      "clientZip": "548456",
      "clientStreetAddress": "hosur",
      "clientbtFlag": false,
      "clientbtStatus": true,
      "clientbtDelete": null,
      "createdBy": null,
      "createdDate": "2020-01-20T04:52:25.553",
      "activityDate": null,
      "modifiedBy": null,
      "modifiedDate": null,
      "clientContacts": 5,
      "quotesCount": 1,
      "projectsCount": 2,
      "ext": "1111",
      "lat": null,
      "lng": null,
      "totalClients": 11
    },
    {
      "clientID": 67,
      "clientName": "MRC Group",
      "clientCode": "Newent",
      "clientEmail": "mailto:mrc@contact.com",
      "clientPhone": "748-596-7845",
      "clientType": "Manufacturer ",
      "clientTypeID": 84,
      "clientAddressID": null,
      "clientCountryID": 1,
      "clientCountry": "India",
      "clientStateID": 7,
      "clientState": "Gujarath",
      "clientCity": "Gandhi nagar",
      "clientZip": "969696",
      "clientStreetAddress": "Gandhinagar",
      "clientbtFlag": true,
      "clientbtStatus": true,
      "clientbtDelete": null,
      "createdBy": null,
      "createdDate": "2020-01-03T03:41:10.9",
      "activityDate": null,
      "modifiedBy": null,
      "modifiedDate": null,
      "clientContacts": 5,
      "quotesCount": 1,
      "projectsCount": 2,
      "ext": "8585",
      "lat": null,
      "lng": null,
      "totalClients": 11
    },
    {
      "clientID": 62,
      "clientName": "C3 Group Inc",
      "clientCode": "Theive-1",
      "clientEmail": "mailto:c3@contact.com",
      "clientPhone": "772-346-2354",
      "clientType": "Planner\t",
      "clientTypeID": 86,
      "clientAddressID": null,
      "clientCountryID": 1,
      "clientCountry": "India",
      "clientStateID": 7,
      "clientState": "Maharashtra ",
      "clientCity": "Indore",
      "clientZip": "548455",
      "clientStreetAddress": "Indore",
      "clientbtFlag": false,
      "clientbtStatus": true,
      "clientbtDelete": null,
      "createdBy": null,
      "createdDate": "2020-01-02T02:58:16.807",
      "activityDate": null,
      "modifiedBy": null,
      "modifiedDate": null,
      "clientContacts": 5,
      "quotesCount": 1,
      "projectsCount": 1,
      "ext": "-",
      "lat": null,
      "lng": null,
      "totalClients": 11
    },
    {
      "clientID": 60,
      "clientName": "Harry INC stores",
      "clientCode": "HarINC",
      "clientEmail": "mailto:harry@contact.com",
      "clientPhone": "999-562-3220",
      "clientType": "Planner\t",
      "clientTypeID": 86,
      "clientAddressID": null,
      "clientCountryID": 1,
      "clientCountry": "India",
      "clientStateID": 7,
      "clientState": "Delhi ",
      "clientCity": "New delhi",
      "clientZip": "558899",
      "clientStreetAddress": "subash Court",
      "clientbtFlag": true,
      "clientbtStatus": true,
      "clientbtDelete": null,
      "createdBy": null,
      "createdDate": "2019-12-28T10:29:52.183",
      "activityDate": null,
      "modifiedBy": null,
      "modifiedDate": null,
      "clientContacts": 5,
      "quotesCount": 1,
      "projectsCount": 2,
      "ext": "-",
      "lat": null,
      "lng": null,
      "totalClients": 11
    },
    {
      "clientID": 59,
      "clientName": "Contracts LTD",
      "clientCode": "Johith",
      "clientEmail": "mailto:contracts@contact.com",
      "clientPhone": "990-512-3456",
      "clientType": "Private Land Owner",
      "clientTypeID": 85,
      "clientAddressID": null,
      "clientCountryID": 1,
      "clientCountry": "India",
      "clientStateID": 9,
      "clientState": "Andhra pradesh",
      "clientCity": "Bhimavaram",
      "clientZip": "500081",
      "clientStreetAddress": "123 steet",
      "clientbtFlag": false,
      "clientbtStatus": true,
      "clientbtDelete": null,
      "createdBy": null,
      "createdDate": "2019-12-28T10:14:35.943",
      "activityDate": null,
      "modifiedBy": null,
      "modifiedDate": null,
      "clientContacts": 5,
      "quotesCount": 3,
      "projectsCount": 1,
      "ext": "-",
      "lat": null,
      "lng": null,
      "totalClients": 11
    },
    {
      "clientID": 50,
      "clientName": "Take Care of Business",
      "clientCode": "Takess",
      "clientEmail": "mailto:contact@tcb.com",
      "clientPhone": "923-143-2423",
      "clientType": "Architect",
      "clientTypeID": 87,
      "clientAddressID": null,
      "clientCountryID": 1,
      "clientCountry": "India",
      "clientStateID": 7,
      "clientState": "Telanagana",
      "clientCity": "Hyderabad",
      "clientZip": "500082",
      "clientStreetAddress": "Uptown Cyberabad Building",
      "clientbtFlag": true,
      "clientbtStatus": false,
      "clientbtDelete": null,
      "createdBy": null,
      "createdDate": "2019-10-22T07:25:16.803",
      "activityDate": null,
      "modifiedBy": null,
      "modifiedDate": null,
      "clientContacts": 5,
      "quotesCount": 1,
      "projectsCount": 2,
      "ext": "-",
      "lat": null,
      "lng": null,
      "totalClients": 11
    },
    {
      "clientID": 44,
      "clientName": "Muncipality of CORP",
      "clientCode": "Munton",
      "clientEmail": "mailto:contact@corp.com",
      "clientPhone": "990-541-1111",
      "clientType": "Government",
      "clientTypeID": 146,
      "clientAddressID": null,
      "clientCountryID": 1,
      "clientCountry": "India",
      "clientStateID": 7,
      "clientState": "Telangana",
      "clientCity": "hyderabad",
      "clientZip": "689526",
      "clientStreetAddress": "71 high Court",
      "clientbtFlag": false,
      "clientbtStatus": true,
      "clientbtDelete": null,
      "createdBy": null,
      "createdDate": "2019-09-19T05:12:49.02",
      "activityDate": null,
      "modifiedBy": null,
      "modifiedDate": null,
      "clientContacts": 5,
      "quotesCount": 1,
      "projectsCount": 1,
      "ext": "-",
      "lat": null,
      "lng": null,
      "totalClients": 11
    },
    {
      "clientID": 42,
      "clientName": "Stantec LTD",
      "clientCode": "SDF423",
      "clientEmail": "mailto:contact@stantec.com",
      "clientPhone": "897-801-0220",
      "clientType": "Private Land Owner",
      "clientTypeID": 85,
      "clientAddressID": null,
      "clientCountryID": 1,
      "clientCountry": "India",
      "clientStateID": 8,
      "clientState": "Telanagana",
      "clientCity": "secundrabad",
      "clientZip": "587465",
      "clientStreetAddress": "Uppal sky walk",
      "clientbtFlag": true,
      "clientbtStatus": true,
      "clientbtDelete": null,
      "createdBy": null,
      "createdDate": "2019-09-11T02:18:35.533",
      "activityDate": null,
      "modifiedBy": null,
      "modifiedDate": null,
      "clientContacts": 5,
      "quotesCount": 1,
      "projectsCount": 1,
      "ext": "-",
      "lat": null,
      "lng": null,
      "totalClients": 11
    },
    {
      "clientID": 38,
      "clientName": "Ayurved soft ltd",
      "clientCode": "Theive",
      "clientEmail": "mailto:ayr@gmail.com",
      "clientPhone": "868-464-6519",
      "clientType": "Planner\t",
      "clientTypeID": 86,
      "clientAddressID": null,
      "clientCountryID": 1,
      "clientCountry": "India",
      "clientStateID": 7,
      "clientState": "telanagana",
      "clientCity": "Hyderabad",
      "clientZip": "636525",
      "clientStreetAddress": " 438 rd no",
      "clientbtFlag": false,
      "clientbtStatus": true,
      "clientbtDelete": null,
      "createdBy": null,
      "createdDate": "2019-09-03T10:23:56.36",
      "activityDate": null,
      "modifiedBy": null,
      "modifiedDate": null,
      "clientContacts": 5,
      "quotesCount": 4,
      "projectsCount": 3,
      "ext": "-",
      "lat": null,
      "lng": null,
      "totalClients": 11
    }
  ];


  tableData() {
    if (this.week === 2) {
      this.items = [
        { UserName: 'Option Matrix', SundayCount: '0.00', MondayCount: '9.00', TuesdayCount: '0.00', WednesdayCount: '0.00', ThrusdayCount: '0.00', FridayCount: '0.00', SaturdayCount: '0.00', TotalCount: '9.00' },
      ]
    } else if (this.week === 1) {
      this.items = [
        { UserName: 'Sachin Patil', SundayCount: '0.00', MondayCount: '14.00', TuesdayCount: '16.00', WednesdayCount: '16.00', ThrusdayCount: '16.00', FridayCount: '8.00', SaturdayCount: '0.00', TotalCount: '70.00' },
        { UserName: 'Option Matrix', SundayCount: '0.00', MondayCount: '16.00', TuesdayCount: '16.00', WednesdayCount: '16.00', ThrusdayCount: '14.00', FridayCount: '16.00', SaturdayCount: '0.00', TotalCount: '78.00' },
      ]
    }
  }
  openActionDialog(item: { ManageActionId: any; }) {

    this.dialog.open(ActionDialogComponent, {
      data: null,
      height: 'auto',
      width: '1050px',
      disableClose: true
    });

  }
  openDueDateDialog(item: any) {



  }

  openTimesheetAndExpenses(detailId: any) {



  }
  showData() {
    this.noData = false;
  }

  hideData() {
    this.noData = true;
  }

  buttonPressed() {
    this.buttonSelected = !this.buttonSelected;
  }

  toggle() {
    this.IsShow = !this.IsShow;
    console.log(this.IsShow, 'check is show')
    // if (this.show)
    //   this.orientation = "next";
    // else
    //   this.orientation = "prev";
  }
  scheduleUnassignedAction() {
    this.dialog.open(ScheduleActionDialogComponent, {
      data: null,
      height: 'auto',
      autoFocus: false,
      width: '1050px',
      disableClose: true
    }).afterClosed().subscribe((data: boolean) => {

    })
  }
  changeMenu() {
    this.isMenuOn = !this.isMenuOn;
  }
  filterFunction() {
    this.filterToggle = !this.filterToggle;
    this.filterState = this.filterToggle === true ? 'initial' : 'final';
  }


  // for grid view table

  userss: User[] = [
    {
      created: '02-05-2021, 08:20PM',
      refNo: 'A-025006',
      providerName: 'Chris Waller',
      address: '438 Miller Ave,Oshawa',
      jobCode: 'Test',
      plannedHours: '3.00',
      dueDate: '10-02-2021',
      scheduleDate: '12-02-2024',
      assignedHours: '3.00',
      specialPermissions: '7/15',
      rolePermissions: '214/220',
      userName: 'Radhakrishna SV',
      managers: 2,
      email: 'rk@optionmatrix.com',
      phone: '9866098373',
      agency: 'IT Department',
      role: 'General Manager',
      auditor: true,
      webAccess: true,
      mobileAccess: true,
      managerialRole: false,
      auditTypes: 18,
      twoFactor: false,
      status: 'Active',
    },
    {
      created: '02-05-2024, 05:20AM',
      refNo: 'A-025039',
      providerName: 'Chunck James',
      address: 'Cross street,Jalandhar',
      jobCode: 'PA1',
      plannedHours: '10.00',
      dueDate: '02-26-2024',
      scheduleDate: '01-02-2024',
      assignedHours: '10.00',
      specialPermissions: '2/15',
      rolePermissions: '220/220',
      userName: 'Sharanya K',
      managers: 1,
      email: 'sharanya@gmail.com',
      phone: '9986674553',
      agency: 'Quality Assurance',
      role: 'Team Lead',
      auditor: true,
      webAccess: true,
      mobileAccess: true,
      managerialRole: true,
      auditTypes: 14,
      twoFactor: false,
      status: 'Active',
    },
    {
      created: '02-05-2024, 05:20AM',
      refNo: 'A-025042',
      providerName: 'William C.Bomer',
      address: 'Cross street,Jalandhar',
      jobCode: 'DFT',
      plannedHours: '10.00',
      dueDate: '02-26-2024',
      scheduleDate: '01-02-2024',
      assignedHours: '10.00',
      specialPermissions: '7/15',
      rolePermissions: '0/220',
      userName: 'Sai kumar',
      managers: 1,
      email: 'polagonisaikumar@gmail.com',
      phone: '8790161356',
      agency: 'Component-Shop',
      role: 'Department Manager',
      auditor: true,
      webAccess: true,
      mobileAccess: false,
      managerialRole: false,
      auditTypes: 2,
      twoFactor: false,
      status: 'Active',
    },
    {
      created: '02-05-2024, 05:20AM',
      refNo: 'A-025042',
      providerName: 'John Russel',
      address: 'Cross street,Jalandhar',
      jobCode: 'DFT',
      plannedHours: '10.00',
      dueDate: '02-26-2024',
      scheduleDate: '01-02-2024',
      assignedHours: '10.00',
      specialPermissions: '0/15',
      rolePermissions: '220/220',
      userName: 'Navin M',
      managers: 1,
      email: 'navin@optionmatrix.com',
      phone: '9849935911',
      agency: 'Component-Shop',
      role: 'Audit Master',
      auditor: true,
      webAccess: true,
      mobileAccess: false,
      managerialRole: true,
      auditTypes: 2,
      twoFactor: false,
      status: 'Active',
    },
    {
      created: '02-05-2024, 05:20AM',
      refNo: 'A-025042',
      providerName: 'Catherina Jefferson',
      address: 'Cross street,Jalandhar',
      jobCode: 'DFT',
      plannedHours: '10.00',
      dueDate: '02-26-2024',
      scheduleDate: '01-02-2024',
      assignedHours: '10.00',
      rolePermissions: '210/220',
      specialPermissions: '7/15',
      userName: 'Vamshi',
      managers: 1,
      email: 'vamshig@optionmatrix.com',
      phone: '9987654423',
      agency: 'Purchase Department',
      role: 'Shop Head',
      auditor: false,
      webAccess: true,
      mobileAccess: true,
      managerialRole: false,
      auditTypes: 0,
      twoFactor: false,
      status: 'Active',
    },
    {
      created: '02-05-2024, 05:20AM',
      refNo: 'A-025042',
      providerName: 'Chris Waller',
      address: 'Cross street,Jalandhar',
      jobCode: 'DFT',
      plannedHours: '10.00',
      dueDate: '02-26-2024',
      scheduleDate: '01-02-2024',
      assignedHours: '10.00',
      specialPermissions: '0/15',
      rolePermissions: '220/220',
      userName: 'Krishna',
      managers: 3,
      email: 'krishna@optionmatrix.com',
      phone: '9987653242',
      agency: 'Purchase Department',
      role: 'Shift manager',
      auditor: true,
      webAccess: true,
      mobileAccess: true,
      managerialRole: true,
      auditTypes: 2,
      twoFactor: false,
      status: 'Active',
    },
    {
      created: '02-05-2024, 05:20AM',
      refNo: 'A-025042',
      providerName: 'Catherina Jefferson',
      address: 'Cross street,Jalandhar',
      jobCode: 'DFT',
      plannedHours: '10.00',
      dueDate: '02-26-2024',
      scheduleDate: '01-02-2024',
      assignedHours: '10.00',
      specialPermissions: '7/15',
      rolePermissions: '210/220',
      userName: 'Sai Kumar',
      managers: 1,
      email: 'gowthamb@optionmatrix.com',
      phone: '7896542145',
      agency: 'Maintenance',
      role: 'Manager',
      auditor: false,
      webAccess: true,
      mobileAccess: false,
      managerialRole: false,
      auditTypes: 0,
      twoFactor: false,
      status: 'Active',
    },
  ];

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

  goBack(): void {
    this.location.back();
  }

  hours: string[] = [
    '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM',
    '5:00 AM', '6:00 AM', '7:00 AM', '8:00 AM',
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'
  ];

  currentView: string = 'Mega';

  isExpanded: boolean = false;
  currentTime: string = '';

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 60000); // Update time every minute
  }

  updateTime(): void {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert 24-hour to 12-hour format
    this.currentTime = `${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;

  }
  // currentView: 'Mega' | 'Mini' | 'Micro' | null = null;

  setView(view: 'Mega' | 'Mini' | 'Micro') {
    this.currentView = view;
    this.isExpandeded = view !== 'Micro';
  }

  isExpandeded: boolean = true;



  toggleCard() {
    this.isExpanded = !this.isExpanded;
  }

  toggleExpand() {
    if (this.currentView === 'Mega') {
      this.currentView = 'Mini'; // Switch to Mini view
      this.isExpandeded = true;  // Show upward arrow
    } else if (this.currentView === 'Mini') {
      this.currentView = 'Micro'; // Switch to Micro view
      this.isExpandeded = false; // Show downward arrow
    } else {
      this.currentView = 'Mega'; // Switch to Mega view
      this.isExpandeded = true;  // Show upward arrow
    }
  }
}

