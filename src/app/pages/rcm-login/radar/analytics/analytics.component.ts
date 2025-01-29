import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent {

  years: number[] = [2021, 2022, 2023, 2024];
  public currentPage = 2;
  public totalSize = 8;
  custodians: string[] = ['John Wick', 'Johnson', 'Carlsen'];
  groups: string[] = ['Hamilton Group', 'Memorial Group', 'Concho County'];
  providers: string[] = [
    'Hamilton Hospital',
    'Memorial Hospital',
    'Concho County',
  ];
  entities: string[] = [
    'Hamilton Hospital-A',
    'Memorial Hospital-A',
    'Concho County-A',
  ];
  reqTypes: string[] = ['Medical', 'Billing', 'Imaging'];

  Highcharts = Highcharts;

  activeChart: string = 'monthly';
  months = [
    { value: '01', viewValue: 'January' },
    { value: '02', viewValue: 'February' },
    { value: '03', viewValue: 'March' },
    { value: '04', viewValue: 'April' },
    { value: '05', viewValue: 'May' },
    { value: '06', viewValue: 'June' },
    { value: '07', viewValue: 'July' },
    { value: '08', viewValue: 'August' },
    { value: '09', viewValue: 'September' },
    { value: '10', viewValue: 'October' },
    { value: '11', viewValue: 'November' },
    { value: '12', viewValue: 'December' },
  ];
  activeChart1: string = 'monthly1';
  Messages = [
    {
      DateTime: '26/01/2024',
      requestor: 'Jane Doe',
      custodian: 'Sam Payne',
      RequestStatus: 'Pending',
      requestDate: '22/01/2024',
    },
    {
      DateTime: '26/01/2024',
      requestor: 'Jane Doe',
      custodian: 'Sam Payne',
      RequestStatus: 'Pending',
      requestDate: '22/01/2024',
    },
    {
      DateTime: '26/01/2024',
      requestor: 'Jane Doe',
      custodian: 'Sam Payne',
      RequestStatus: 'Pending',
      requestDate: '22/01/2024',
    },
    {
      DateTime: '26/01/2024',
      requestor: 'Jane Doe',
      custodian: 'Sam Payne',
      RequestStatus: 'Pending',
      requestDate: '22/01/2024',
    },
    {
      DateTime: '26/01/2024',
      requestor: 'Jane Doe',
      custodian: 'Sam Payne',
      RequestStatus: 'Pending',
      requestDate: '22/01/2024',
    },
    {
      DateTime: '26/01/2024',
      requestor: 'Jane Doe',
      custodian: 'Sam Payne',
      RequestStatus: 'Pending',
      requestDate: '22/01/2024',
    },
    {
      DateTime: '26/01/2024',
      requestor: 'Jane Doe',
      custodian: 'Sam Payne',
      RequestStatus: 'Pending',
      requestDate: '22/01/2024',
    },
    {
      DateTime: '26/01/2024',
      requestor: 'Jane Doe',
      custodian: 'Sam Payne',
      RequestStatus: 'Pending',
      requestDate: '22/01/2024',
    },
    {
      DateTime: '26/01/2024',
      requestor: 'Jane Doe',
      custodian: 'Sam Payne',
      RequestStatus: 'Pending',
      requestDate: '22/01/2024',
    },
  ];

  Payments = [
    {
      DateTime: '26/01/2024',
      requestor: 'Jane Doe',
      custodian: 'Sam Payne',
      RequestStatus: 'Pending',
      requestDate: '22/01/2024',
      amount: '$20',
    },
    {
      DateTime: '26/01/2024',
      requestor: 'Jane Doe',
      custodian: 'Sam Payne',
      RequestStatus: 'Pending',
      requestDate: '22/01/2024',
      amount: '$20',
    },
    {
      DateTime: '26/01/2024',
      requestor: 'Jane Doe',
      custodian: 'Sam Payne',
      RequestStatus: 'Pending',
      requestDate: '22/01/2024',
      amount: '$20',
    },
    {
      DateTime: '26/01/2024',
      requestor: 'Jane Doe',
      custodian: 'Sam Payne',
      RequestStatus: 'Pending',
      requestDate: '22/01/2024',
      amount: '$20',
    },
    {
      DateTime: '26/01/2024',
      requestor: 'Jane Doe',
      custodian: 'Sam Payne',
      RequestStatus: 'Pending',
      requestDate: '22/01/2024',
      amount: '$20',
    },
    {
      DateTime: '26/01/2024',
      requestor: 'Jane Doe',
      custodian: 'Sam Payne',
      RequestStatus: 'Pending',
      requestDate: '22/01/2024',
      amount: '$20',
    },
    {
      DateTime: '26/01/2024',
      requestor: 'Jane Doe',
      custodian: 'Sam Payne',
      RequestStatus: 'Pending',
      requestDate: '22/01/2024',
      amount: '$20',
    },
    {
      DateTime: '26/01/2024',
      requestor: 'Jane Doe',
      custodian: 'Sam Payne',
      RequestStatus: 'Pending',
      requestDate: '22/01/2024',
      amount: '$20',
    },
    {
      DateTime: '26/01/2024',
      requestor: 'Jane Doe',
      custodian: 'Sam Payne',
      RequestStatus: 'Pending',
      requestDate: '22/01/2024',
      amount: '$20',
    },
  ];
  ngOnInit(): void {
    this.renderMonthlyChart();
    this.renderMonthlyChart1();
    this.billingByType();
    this.billingByType1();
    this.billingByCategory();
  }

  renderMonthlyChart(): void {
    const chartOptions: Highcharts.Options = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Monthly Trend for Active Claims',
        style: {
          fontSize: '18px', // Adjust title font size
          fontWeight: 'bold', // Adjust title font weight if needed
        },
      },
      subtitle: {
        text: '',
        align: 'left',
      },
      xAxis: {
        categories: [
          'Jan', 'Feb', 'March', 'April', 'May', 'June',
          'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec',
        ],
        crosshair: true,
        accessibility: {
          description: 'Months',
        },
        labels: {
          style: {
            fontSize: '11px', // Adjust xAxis labels font size
          },
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: '',
        },
        labels: {
          style: {
            fontSize: '11px', // Adjust yAxis labels font size
          },
        },
      },
      tooltip: {
        valueSuffix: '',
        style: {
          fontSize: '14px', // Increase tooltip font size
        },
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      legend: {
        itemStyle: {
          fontSize: '11px', // Adjust legend font size for monthly chart
        },
      },
      series: [
        {
          type: 'column',
          name: 'Requests',
          data: [30000, 40000, 30000, 50000, 40000, 100000, 120000, 130000, 150000, 160000, 170000, 190000],
        },
      ],
    };

    Highcharts.chart('container', chartOptions);
  }

  renderDailyChart(): void {
    const chartOptions: Highcharts.Options = {
      chart: {
        type: 'spline',
      },
      title: {
        text: 'Daily Activity Chart (Request Volume)',
        style: {
          fontSize: '18px', // Adjust title font size
          fontWeight: 'bold', // Adjust title font weight if needed
        },
      },
      xAxis: {
        categories: [
          '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15',
          '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
        ],
        crosshair: true,
        labels: {
          style: {
            fontSize: '15px', // Adjust xAxis labels font size
          },
        },
      },
      yAxis: {
        title: {
          text: '',
        },
        labels: {
          format: '{value}',
          style: {
            fontSize: '15px', // Adjust yAxis labels font size
          },
        },
        crosshair: true,
      },
      tooltip: {
        shared: true,
        style: {
          fontSize: '15px', // Adjust tooltip font size
        },
      },
      plotOptions: {
        spline: {
          marker: {
            radius: 4,
            lineColor: '#666666',
            lineWidth: 1,
          },
        },
      },
      legend: {
        itemStyle: {
          fontSize: '11px', // Adjust legend font size for monthly chart
        },
      },
      series: [
        {
          type: 'spline',
          name: 'Billing',
          data: [
            3, 4, 3, 5, 4, 10, 12, 7, 8, 6, 5, 10, 15, 14, 9, 8, 7, 6, 10, 12,
            11, 13, 9, 10, 11, 12, 13, 14, 15, 16,
          ],
        },
        {
          type: 'spline',
          name: 'Earnings',
          data: [
            1, 3, 4, 3, 3, 5, 4, 6, 5, 4, 8, 7, 6, 5, 7, 8, 9, 6, 5, 7, 8, 6, 5,
            7, 8, 9, 7, 8, 9, 10,
          ],
        },
      ],
    };

    Highcharts.chart('container', chartOptions);
  }

  billingByType(): void {
    const chartOptions: Highcharts.Options = {
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Referral Type Distribution',
        style: {
          fontSize: '18px', // Adjust title font size
          fontWeight: 'bold', // Adjust title font weight if needed
        },
      },
      tooltip: {
        valueSuffix: '%',
        style: {
          fontSize: '14px', // Adjust tooltip font size
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
            { name: 'Subacute Trauma', y: 35.5 },
            { name: 'Self Pay', y: 45.5 },
            { name: 'Insurance', y: 19.0 },
            { name: 'Worker Comp', y: 45.5 },
          ],
        },
      ],
    };

    Highcharts.chart('container9', chartOptions);
  }
  billingByType1(): void {
    const chartOptions: Highcharts.Options = {
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Case Ageing Analysis',
        style: {
          fontSize: '18px', // Adjust title font size
          fontWeight: 'bold', // Adjust title font weight if needed
        },
      },
      tooltip: {
        valueSuffix: '%',
        style: {
          fontSize: '14px', // Adjust tooltip font size
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
            { name: '0-30 Days', y: 35.5 },
            { name: '30-60 Days', y: 45.5 },
            { name: '60-80 Days', y: 19.0 },
            { name: '80-100 Days', y: 15.5 },
            { name: '100+ Days', y: 45.5 },
          ],
        },
      ],
    };

    Highcharts.chart('container11', chartOptions);
  }

  billingByCategory(): void {
    const chartOptions: Highcharts.Options = {
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Case Status Distribution',
        style: {
          fontSize: '18px', // Adjust title font size
          fontWeight: 'bold', // Adjust title font weight if needed
        },
      },
      tooltip: {
        valueSuffix: '%',
        style: {
          fontSize: '14px', // Adjust tooltip font size
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
            { name: 'Progress', y: 24.5 },
            { name: 'Settled', y: 44.25 },
            { name: 'Authorization', y: 29.25 },
            { name: 'Verification', y: 44.25 },
          ],
        },
      ],
    };

    Highcharts.chart('container10', chartOptions);
  }

  showChart(type: string): void {
    this.activeChart = type;
    if (type === 'monthly') {
      this.renderMonthlyChart();
    } else {
      this.renderDailyChart();
    }
  }
  renderMonthlyChart1(): void {
    const chartOptions8: Highcharts.Options = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Monthly Trends of Claims Versus Settlement',
        style: {
          fontSize: '18px',
          fontWeight: 'bold',
        },
      },
      subtitle: {
        text: '',
        align: 'left',
      },
      xAxis: {
        categories: [
          'Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec',
        ],
        crosshair: true,
        accessibility: {
          description: 'Months',
        },
        labels: {
          style: {
            fontSize: '11px', // Adjust xAxis labels font size
          },
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: '',
        },
        labels: {
          style: {
            fontSize: '11px', // Adjust yAxis labels font size
          },
        },
      },
      tooltip: {
        valueSuffix: '',
        style: {
          fontSize: '14px', // Increase tooltip font size
        },
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      legend: {
        itemStyle: {
          fontSize: '11px', // Adjust legend font size for monthly chart
        },
      },
      series: [
        {
          type: 'column',
          name: 'Claims',
          data: [98000, 30000, 60000, 13800, 87000, 108000, 75000, 66000, 69000, 102000, 84000, 60000],
        },
        {
          type: 'column',
          name: 'Settlement',
          data: [60000, 7200, 12000, 48000, 18000, 60000, 90000, 12000, 33000, 36000, 51000, 18000],
        },
      ]
    };

    Highcharts.chart('container8', chartOptions8);
  }

  renderDailyChart1(): void {
    const chartOptions8: Highcharts.Options = {
      chart: {
        type: 'spline',
      },
      title: {
        text: 'Billing vs Earnings',
        style: {
          fontSize: '18px', // Adjust title font size
          fontWeight: 'bold', // Adjust title font weight if needed
        },
      },
      xAxis: {
        categories: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
          '17',
          '18',
          '19',
          '20',
          '21',
          '22',
          '23',
          '24',
          '25',
          '26',
          '27',
          '28',
          '29',
          '30',
        ],
        crosshair: true,
        labels: {
          style: {
            fontSize: '11px', // Adjust xAxis labels font size
          },
        },
      },
      yAxis: {
        title: {
          text: '',
        },
        labels: {
          format: '{value}',
          style: {
            fontSize: '11px', // Adjust yAxis labels font size
          },
        },
        crosshair: true,
      },
      tooltip: {
        shared: true,
        style: {
          fontSize: '15px', // Adjust tooltip font size
        },
      },
      plotOptions: {
        spline: {
          marker: {
            radius: 4,
            lineColor: '#666666',
            lineWidth: 1,
          },
        },
      },
      legend: {
        itemStyle: {
          fontSize: '11px', // Adjust legend font size for monthly chart
        },
      },
      series: [
        {
          type: 'spline',
          name: 'Requests',
          data: [
            3, 4, 3, 5, 4, 10, 12, 7, 8, 6, 5, 10, 15, 14, 9, 8, 7, 6, 10, 12,
            11, 13, 9, 10, 11, 12, 13, 14, 15, 16,
          ],
        },
      ],
    };

    Highcharts.chart('container8', chartOptions8);
  }

  showChart1(type: string): void {
    this.activeChart1 = type;
    if (type === 'monthly1') {
      this.renderMonthlyChart1();
    } else {
      this.renderDailyChart1();
    }
  }
}
