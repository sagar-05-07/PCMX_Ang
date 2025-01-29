import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import * as Highcharts from 'highcharts';
import { GridColumnComponent } from 'src/app/shared/grid-column/grid-column.component';

@Component({
  selector: 'app-visit-report',
  templateUrl: './visit-report.component.html',
  styleUrl: './visit-report.component.scss'
})
export class VisitReportComponent {

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
      { Name: 'Visit ID', IsSelected: true },
      { Name: 'Patient ID', IsSelected: true },
      { Name: 'Referral ID', IsSelected: true },
      { Name: 'Patient Name', IsSelected: true },
      { Name: 'Date', IsSelected: true },
      { Name: 'Time', IsSelected: true },
      { Name: 'Visit Status', IsSelected: true },
      { Name: 'Provider Name', IsSelected: true },
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

            { name: 'Scheduling', sliced: true, selected: true, y: 35.5 },
            { name: 'Scheduled', sliced: true, selected: true, y: 45.5 },
            { name: 'Completed', sliced: true, selected: true, y: 35.5 },
            { name: 'Processing', sliced: true, selected: true, y: 19.0 },
            { name: 'Closed', y: 35.5 },
            { name: 'No Show', sliced: true, selected: true, y: 45.5 },
            { name: 'Cancelled', sliced: true, selected: true, y: 19.0 },
          ],
        },
      ],
    };

    Highcharts.chart('container5', chartOptions);
  }

  providerfunnel1(): void {
    const chartOptions21: Highcharts.Options = {
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Monthly Visits in last 6 Months',
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

    Highcharts.chart('container6', chartOptions21);
  }

  users = [
    {
      visitId: '00000001',
      patientId: '10000001',
      referralId: '50000001',
      patientName: 'John Doe',
      date: '2024-12-01',
      time: '10:30 AM',
      referralStatus: 'Intake'
    },
    {
      visitId: '00000002',
      patientId: '10000002',
      referralId: '50000002',
      patientName: 'Jane Smith',
      date: '2024-12-02',
      time: '11:00 AM',
      referralStatus: 'Verification'
    },
    {
      visitId: '00000003',
      patientId: '10000003',
      referralId: '50000003',
      patientName: 'Alice Johnson',
      date: '2024-12-03',
      time: '09:45 AM',
      referralStatus: 'Authorization'
    },
    {
      visitId: '00000004',
      patientId: '10000004',
      referralId: '50000004',
      patientName: 'Robert Brown',
      date: '2024-12-04',
      time: '02:15 PM',
      referralStatus: 'Scheduling'
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
