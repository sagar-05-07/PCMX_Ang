import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import * as Highcharts from 'highcharts';
import { GridColumnComponent } from 'src/app/shared/grid-column/grid-column.component';

@Component({
  selector: 'app-case-report',
  templateUrl: './case-report.component.html',
  styleUrl: './case-report.component.scss'
})
export class CaseReportComponent {

  filterToggle2: boolean = false;
  public currentPage = 0;
  public totalSize = 0;
  pageSize: 0;
  filterForm: FormGroup;
  filterToggle: boolean = false;
  Highcharts = Highcharts;

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.billingByType();
    this.providerfunnel();
  }

  // GRID COLUMNS ARRANGEMENT
  savedHeaders = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  openManageGridDialog() {
    let headers = [
      { Name: 'Patient ID', IsSelected: true },
      { Name: 'Patient Name', IsSelected: true },
      { Name: 'Case ID', IsSelected: true },
      { Name: 'Amount Claimed', IsSelected: true },
      { Name: 'Amount Settled', IsSelected: true },
      { Name: 'Expected Settlement', IsSelected: true },
      { Name: 'Law Firm', IsSelected: true },
      { Name: 'Status', IsSelected: true },
      { Name: 'Date Claimed', IsSelected: true },
      { Name: 'Date Settled', IsSelected: true },
      { Name: 'ETA Settlement', IsSelected: true },
    ];
    const dialogRef = this.dialog.open(GridColumnComponent, {
      data: { headers: headers, screenName: 'Active Audits' },
      height: 'auto',
      width: '800px',
    });
    dialogRef.afterClosed().subscribe(() => {
      let data = localStorage.getItem('Active Audits');
      if (data != null && data != '') {
        this.savedHeaders = JSON.parse(data);
      }
    });
  }

  billingByType(): void {
    const chartOptions: Highcharts.Options = {
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Status Distribution',
        style: {
          fontSize: '12px', // Adjust title font size
          fontWeight: 'bold', // Adjust title font weight if needed
        },
      },
      tooltip: {
        valueSuffix: '%',
        style: {
          fontSize: '11px', // Adjust tooltip font size
        },
      },
      subtitle: {
        text: '',
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            distance: 20,
            style: {
              fontSize: '1.2em',
              textOutline: 'none',
              opacity: 0.7,
            },
            format: '{point.percentage:.1f}%',
            filter: {
              operator: '>',
              property: 'percentage',
              value: 10,
            },
          },
          showInLegend: true,
        },
      },
      legend: {
        itemStyle: {
          fontSize: '11px', // Adjust legend font size for monthly chart
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Percentage',
          data: [
            { name: 'Verification', y: 35.5 },
            { name: 'Authorization', sliced: true, selected: true, y: 45.5 },
            { name: 'Process', sliced: true, selected: true, y: 19.0 },
            { name: 'Settled', sliced: true, selected: true, y: 35.5 },
          ],
        },
      ],
    };

    Highcharts.chart('container1', chartOptions);
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


  providerfunnel(): void {
    const chartOptions21: Highcharts.Options = {
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Case Volume in last 6 Months',
        style: {
          fontSize: '12px', // Adjust title font size here
        },
      },
      subtitle: {
        text: '',
      },
      xAxis: {
        categories: [
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        title: {
          text: null,
        },
        labels: {
          style: {
            fontSize: '11px', // Adjust xAxis labels font size here
          },
        },
        gridLineWidth: 1,
        lineWidth: 0,
      },
      yAxis: {
        min: 0,
        title: {
          text: '',
          align: 'high',
        },
        labels: {
          overflow: 'justify',
          style: {
            fontSize: '11px', // Adjust yAxis labels font size here
          },
        },
        gridLineWidth: 0,
      },
      tooltip: {
        valueSuffix: '',
      },
      plotOptions: {
        bar: {
          borderRadius: '50%',
          dataLabels: {
            enabled: true,
          },
          groupPadding: 0.1,
        },
      },
      legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        shadow: true,
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          type: 'bar',
          data: [160, 220, 960, 840, 1620, 105],
        },
      ],
    };

    Highcharts.chart('container2', chartOptions21);
  }

  users = [
    {
      patientId: '100001',
      patientName: 'John Doe',
      caseId: '100123',
      amountClaimed: 5000,
      amountSettled: 4500,
      expectedSettlement: 4700,
      lawFirm: 'Healthcare Legal Associates',
      status: 'Progress',
      dateClaimed: '2024-10-15',
      dateSettled: 'NA', // Case not yet settled
      etaSettlement: '2024-12-01',
    },
    {
      patientId: '200002',
      patientName: 'Jane Smith',
      caseId: '100124',
      amountClaimed: 7500,
      amountSettled: 7500,
      expectedSettlement: 7500,
      lawFirm: 'MediCare Legal Advisors',
      status: 'Settled',
      dateClaimed: '2024-08-10',
      dateSettled: '2024-09-10',
      etaSettlement: 'NA', // Already settled
    },
    {
      patientId: '201003',
      patientName: 'Sam Wilson',
      caseId: '102125',
      amountClaimed: 3000,
      amountSettled: 2500,
      expectedSettlement: 2700,
      lawFirm: 'Health First Legal Group',
      status: 'Progress',
      dateClaimed: '2024-09-01',
      dateSettled: 'NA', // Case not yet settled
      etaSettlement: '2024-11-20',
    },
    {
      patientId: '300004',
      patientName: 'Alice Johnson',
      caseId: '210126',
      amountClaimed: 10000,
      amountSettled: 9000,
      expectedSettlement: 9500,
      lawFirm: 'CarePlus Law Associates',
      status: 'Authorization',
      dateClaimed: '2024-07-15',
      dateSettled: 'NA', // Case not yet settled
      etaSettlement: '2024-12-30',
    },
    {
      patientId: '103005',
      patientName: 'Bob Brown',
      caseId: '192127',
      amountClaimed: 1200,
      amountSettled: 1200,
      expectedSettlement: 1200,
      lawFirm: 'WellCare Legal Partners',
      status: 'Verification',
      dateClaimed: '2024-09-20',
      dateSettled: '2024-10-05',
      etaSettlement: 'NA', // Already settled
    },
  ];




  openEditDialog(item: any) {
    // this.dialog.open(AddAodComponent, {
    //   data: item,
    //   height: 'auto',
    //   width: '650px'
    // });
  }

  openpermissiondialog() { }

}
