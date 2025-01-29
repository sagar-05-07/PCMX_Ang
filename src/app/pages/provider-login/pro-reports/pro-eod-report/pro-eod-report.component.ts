import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddAodComponent } from 'src/app/pages/rcm-login/reports/automatic-aod-report/add-aod/add-aod.component';

@Component({
  selector: 'app-pro-eod-report',
  templateUrl: './pro-eod-report.component.html',
  styleUrl: './pro-eod-report.component.scss'
})
export class ProEodReportComponent {

  filterToggle2: boolean = false;
  public currentPage = 0;
  public totalSize = 0;
  pageSize: 0;
  filterForm: FormGroup;
  filterToggle: boolean = false;

  constructor(public dialog: MatDialog,) { }

  ngOnInt() { }

  downloadAndOpen(filePath: string): void {
    const link = document.createElement('a');
    link.href = filePath;
    link.target = '_blank';
    link.click();
  }

  users = [
    {
      id: 1,
      status: 'Active',
      preferredTime: 'Morning',
      comparisonRef: 'Ref-001',
      trendSpan: 'Last 3 Months',
      alerts: true,
      leaderBoard: false,
      variance: '5%',
      receipts: 'Current Year Average',
    },
    {
      id: 2,
      status: 'Inactive',
      preferredTime: 'Afternoon',
      comparisonRef: 'Ref-002',
      trendSpan: 'Last 6 Months',
      alerts: false,
      leaderBoard: true,
      variance: '10%',
      receipts: 'Last 2 Years',
    },
    {
      id: 3,
      status: 'Pending',
      preferredTime: 'Evening',
      comparisonRef: 'Ref-003',
      trendSpan: 'Last One Year',
      alerts: true,
      leaderBoard: true,
      variance: '2%',
      receipts: 'Last 3 Years',
    },
  ];



  openEditDialog(item: any) {
    this.dialog.open(AddAodComponent, {
      data: item,
      height: 'auto',
      width: '650px'
    });
  }

  openpermissiondialog() { }

}
