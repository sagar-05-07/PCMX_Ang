import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import * as Highcharts from 'highcharts';
import { GridColumnComponent } from 'src/app/shared/grid-column/grid-column.component';

@Component({
  selector: 'app-funding-reports',
  templateUrl: './funding-reports.component.html',
  styleUrl: './funding-reports.component.scss'
})
export class FundingReportsComponent {

  filterToggle2: boolean = false;
  public currentPage = 0;
  public totalSize = 0;
  pageSize: 0;
  filterForm: FormGroup;
  filterToggle: boolean = false;
  Highcharts = Highcharts;

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.billingByType1();
    this.providerfunnel1();
  }

  // GRID COLUMNS ARRANGEMENT
  savedHeaders = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  openManageGridDialog() {
    let headers = [
      { Name: 'Batched ID', IsSelected: true },
      { Name: 'Submitted Date', IsSelected: true },
      { Name: 'Paid Date', IsSelected: true },
      { Name: 'Status', IsSelected: true },
      { Name: 'Claimed', IsSelected: true },
      { Name: 'Paid', IsSelected: true },
      { Name: 'Balance', IsSelected: true },
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

  billingByType1(): void {
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
            { name: 'ADH Houston', sliced: true, selected: true, y: 28.0 },
            { name: 'Dallas', sliced: false, selected: false, y: 22.0 },
            { name: 'River Oaks', sliced: true, selected: true, y: 18.0 },
            { name: 'East Houston', sliced: false, selected: false, y: 12.0 },
            { name: 'Capital Care', sliced: true, selected: true, y: 10.0 },
          ],
        },
      ],
    };

    Highcharts.chart('container11', chartOptions);
  }

  providerfunnel1(): void {
    const chartOptions21: Highcharts.Options = {
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Monthly Funding in last 6 Months',
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

    Highcharts.chart('container12', chartOptions21);
  }

  users = [
    {
      batchedId: '12345678',  // 8-digit ID
      submittedDate: '2024-12-01',
      paidDate: '2024-12-05',
      status: 'Completed',
      claimedAmount: 71500.00,
      paidAmount: 61500.00,
      balance: 10000.00
    },
    {
      batchedId: '87654321',  // 8-digit ID
      submittedDate: '2024-11-15',
      paidDate: '2024-11-20',
      status: 'Pending',
      claimedAmount: 90000.00,
      paidAmount: 81200.00,
      balance: 9000.00
    },
    {
      batchedId: '23456789',  // 8-digit ID
      submittedDate: '2024-12-10',
      paidDate: '2024-12-12',
      status: 'Completed',
      claimedAmount: 79200.00,
      paidAmount: 67200.00,
      balance: 12000.00
    },
    {
      batchedId: '34567890',  // 8-digit ID
      submittedDate: '2024-11-28',
      paidDate: '2024-12-02',
      status: 'Completed',
      claimedAmount: 25500.00,
      paidAmount: 25500.00,
      balance: 0.00
    },
    {
      batchedId: '98765432',  // 8-digit ID
      submittedDate: '2024-10-25',
      paidDate: '2024-11-01',
      status: 'Pending',
      claimedAmount: 90800.00,
      paidAmount: 80100.00,
      balance: 10700.00
    }
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


  openEditDialog(item: any) {
    // this.dialog.open(AddAodComponent, {
    //   data: item,
    //   height: 'auto',
    //   width: '650px'
    // });
  }

  openpermissiondialog() { }

}
