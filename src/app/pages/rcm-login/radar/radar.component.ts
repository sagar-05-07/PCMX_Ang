import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrl: './radar.component.scss'
})
export class RadarComponent {

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
        text: 'Monthly Trend for New Cases',
        style: {
          fontSize: '12px', // Adjust title font size
          fontWeight: 'bold', // Adjust title font weight if needed
        },
      },
      subtitle: {
        text: '',
        align: 'left',
      },
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'March',
          'April',
          'May',
          'June',
          'July',
          'Aug',
          'Sept',
          'Oct',
          'Nov',
          'Dec',
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
          data: [3, 4, 3, 5, 4, 10, 12, 3, 5, 4, 10, 12],
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
          fontSize: '12px', // Adjust title font size
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
          fontSize: '11px', // Adjust tooltip font size
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
        text: 'Case Type Distribution',
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
            { name: 'Subacute Trauma', y: 35.5 },
            { name: 'Self Pay', sliced: true, selected: true, y: 45.5 },
            { name: 'Insurance', sliced: true, selected: true, y: 19.0 },
            { name: 'Worker Comp', sliced: true, selected: true, y: 45.5 },
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
        text: 'Ageing Analysis',
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
            { name: '0-30 Days', y: 35.5 },
            { name: '30-60 Days', sliced: true, selected: true, y: 45.5 },
            { name: '60-80 Days', sliced: true, selected: true, y: 19.0 },
            { name: '80-100 Days', sliced: true, selected: true, y: 15.5 },
            { name: '100+ Days', sliced: true, selected: true, y: 45.5 },
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
            { name: 'Progress', y: 24.5 },
            { name: 'Settled', sliced: true, selected: true, y: 44.25 },
            { name: 'Authorization', sliced: true, selected: true, y: 29.25 },
            { name: 'Verification', sliced: true, selected: true, y: 44.25 },
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
        text: 'Monthly Trends of Claims Versus Settlment',
        style: {
          fontSize: '12px', // Adjust title font size
          fontWeight: 'bold', // Adjust title font weight if needed
        },
      },
      subtitle: {
        text: '',
        align: 'left',
      },
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'March',
          'April',
          'May',
          'June',
          'July',
          'Aug',
          'Sept',
          'Oct',
          'Nov',
          'Dec',
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
          data: [300, 500, 1000, 2300, 1450, 1800, 1250, 1100, 1150, 1700, 1400, 1000],
        },
        {
          type: 'column',
          name: 'Settlement',
          data: [100, 120, 200, 800, 300, 1000, 150, 200, 550, 600, 350, 300],
        },
      ],
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
          fontSize: '12px', // Adjust title font size
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
          fontSize: '11px', // Adjust tooltip font size
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
