import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import * as Highcharts from 'highcharts';
import { GridColumnComponent } from 'src/app/shared/grid-column/grid-column.component';

@Component({
  selector: 'app-law-payments-reports',
  templateUrl: './law-payments-reports.component.html',
  styleUrl: './law-payments-reports.component.scss'
})
export class LawPaymentsReportsComponent {

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
      { Name: 'Payment Date', IsSelected: true },
      { Name: 'Patient ID', IsSelected: true },
      { Name: 'Case ID', IsSelected: true },
      { Name: 'Case Name', IsSelected: true },
      { Name: 'Payment Amount', IsSelected: true },
      { Name: 'Claimed', IsSelected: true },
      { Name: 'Paid', IsSelected: true },
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

            { name: 'This Month', sliced: true, selected: true, y: 35.5 },
            { name: 'Last Month', sliced: true, selected: true, y: 45.5 },
            { name: 'This Quarter', sliced: true, selected: true, y: 35.5 },
            { name: 'Last Quarter', sliced: true, selected: true, y: 19.0 },
            { name: 'This Year', y: 35.5 },
            { name: 'Last Year', sliced: true, selected: true, y: 45.5 },
            { name: 'Previous', sliced: true, selected: true, y: 19.0 },
          ],
        },
      ],
    };

    Highcharts.chart('container9', chartOptions);
  }

  providerfunnel1(): void {
    const chartOptions21: Highcharts.Options = {
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Monthly Payments in last 6 Months',
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

    Highcharts.chart('container10', chartOptions21);
  }

  users = [
    {
      paymentDate: '2024-12-01',
      paymentId: '10000001',
      caseId: '20000001',
      caseName: 'Case Alpha',
      paymentAmount: '1500.00',
      claimedAmount: '2000.00',
      paidAmount: '1500.00'
    },
    {
      paymentDate: '2024-12-02',
      paymentId: '10000002',
      caseId: '20000002',
      caseName: 'Case Beta',
      paymentAmount: '2500.00',
      claimedAmount: '3000.00',
      paidAmount: '2500.00'
    },
    {
      paymentDate: '2024-12-03',
      paymentId: '10000003',
      caseId: '20000003',
      caseName: 'Case Gamma',
      paymentAmount: '3500.00',
      claimedAmount: '4000.00',
      paidAmount: '3500.00'
    },
    {
      paymentDate: '2024-12-04',
      paymentId: '10000004',
      caseId: '20000004',
      caseName: 'Case Delta',
      paymentAmount: '4500.00',
      claimedAmount: '5000.00',
      paidAmount: '4500.00'
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
