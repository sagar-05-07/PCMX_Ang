import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-radar-claims',
  templateUrl: './radar-claims.component.html',
  styleUrl: './radar-claims.component.scss'
})
export class RadarClaimsComponent {

  ngOnInit(): void {
    this.billingByType();
    this.visitsByStatus();
    this.claimsbyStatus();
    this.networksByState();
    this.activeversusDormant();
  }
  billingByType(): void {
    const chartOptions2: Highcharts.Options = {
      chart: {
        type: 'column', // Vertical bars
      },
      title: {
        text: 'New Claims Added Every Month (2024)',
        style: {
          fontSize: '14px', // Adjust title font size
        },
      },
      xAxis: {
        categories: [
          'January', 'February', 'March', 'April', 'May', 'June', 'July',
          'August', 'September', 'October', 'November', 'December',
        ],
        title: {
          text: null,
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
          text: 'Case Volume',
          align: 'high',
        },
        labels: {
          overflow: 'justify',
          style: {
            fontSize: '11px', // Adjust yAxis labels font size
          },
        },
        gridLineWidth: 1,
      },
      tooltip: {
        valueSuffix: '',
      },
      plotOptions: {
        column: {
          borderRadius: 12, // Rounded corners for columns
          dataLabels: {
            enabled: true,
          },
          groupPadding: 0.1,
        },
      },
      series: [
        {
          type: 'column',
          data: [12, 15, 18, 20, 25, 22, 16, 22, 6, 8, 14, 10],
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '13px',
              color: 'black',
            },
          },
        },
      ],
    };

    Highcharts.chart('container70', chartOptions2);
  }
  visitsByStatus(): void {
    const chartOptions21: Highcharts.Options = {
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Visits by Status',
        style: {
          fontSize: '14px', // Adjust title font size here
        },
      },
      subtitle: {
        text: '',
      },
      xAxis: {
        categories: [
          'Scheduling',
          'Scheduled',
          'Completed',
          'Processing',
          'Closed',
          'No Show',
          'Cancelled',
        ],
        title: {
          text: null,
        },
        labels: {
          style: {
            fontSize: '12px', // Adjust xAxis labels font size here
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
            fontSize: '12px', // Adjust yAxis labels font size here
          },
        },
        gridLineWidth: 0,
      },
      tooltip: {
        valueSuffix: ' visits',
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          dataLabels: {
            enabled: true,
          },
          groupPadding: 0.1,
        },
      },
      // legend: {
      //   layout: 'horizontal',
      //   align: 'center',
      //   verticalAlign: 'bottom',
      //   x: 0,
      //   y: 10,
      //   floating: true,
      //   borderWidth: 1,
      //   shadow: true,
      // },
      credits: {
        enabled: false,
      },
      series: [
        {
          type: 'bar',
          name: 'Visits',
          data: [2500, 2000, 1800, 1700, 1500, 1400],
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '11px',
              color: 'black',
            },
          },
        },
      ],
    };

    Highcharts.chart('container71', chartOptions21);
  }
  claimsbyStatus(): void {
    const chartOptions21: Highcharts.Options = {
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Claims by Status',
        style: {
          fontSize: '14px', // Adjust title font size here
        },
      },
      subtitle: {
        text: '',
      },
      xAxis: {
        categories: [
          'Initiated',
          'Deposit',
          'Negotiated',
          'Interim',
          'Settled',
        ],
        title: {
          text: null,
        },
        labels: {
          style: {
            fontSize: '12px', // Adjust xAxis labels font size here
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
            fontSize: '12px', // Adjust yAxis labels font size here
          },
        },
        gridLineWidth: 0,
      },
      tooltip: {
        valueSuffix: ' visits',
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          dataLabels: {
            enabled: true,
          },
          groupPadding: 0.1,
        },
      },
      // legend: {
      //   layout: 'horizontal',
      //   align: 'center',
      //   verticalAlign: 'bottom',
      //   x: 0,
      //   y: 10,
      //   floating: true,
      //   borderWidth: 1,
      //   shadow: true,
      // },
      credits: {
        enabled: false,
      },
      series: [
        {
          type: 'bar',
          name: 'Visits',
          data: [1500, 2000, 2300, 1700, 2500],
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '11px',
              color: 'black',
            },
          },
        },
      ],
    };

    Highcharts.chart('container72', chartOptions21);
  }
  networksByState(): void {
    const chartOptions: Highcharts.Options = {
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Claim Distribution  by State',
        style: {
          fontSize: '14px', // Adjust title font size
          fontWeight: 'bold', // Adjust title font weight
        },
      },
      tooltip: {
        valueSuffix: '%',
        style: {
          fontSize: '12px', // Adjust tooltip font size
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
            distance: 30,
            style: {
              fontSize: '13px',
              textOutline: 'none',
              color: 'black',
            },
            format: '{point.name}: {point.percentage:.1f}%',
            filter: {
              operator: '>',
              property: 'percentage',
              value: 5,
            },
          },
          showInLegend: true,
        },
      },
      legend: {
        itemStyle: {
          fontSize: '12px', // Adjust legend font size
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Network Distribution',
          data: [
            { name: 'California', y: 25.0 },
            { name: 'Texas', y: 20.0 },
            { name: 'Florida', y: 15.0 },
            { name: 'New York', y: 10.0 },
            { name: 'Illinois', y: 8.0 },
            { name: 'Georgia', y: 7.0 },
            { name: 'Pennsylvania', y: 6.0 },
          ],
        },
      ],
    };

    Highcharts.chart('container73', chartOptions);
  }
  activeversusDormant(): void {
    const chartOptions: Highcharts.Options = {
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Ageing Analysis for Settlement Period',
        style: {
          fontSize: '14px', // Adjust title font size
          fontWeight: 'bold', // Adjust title font weight
        },
      },
      tooltip: {
        valueSuffix: '%',
        style: {
          fontSize: '12px', // Adjust tooltip font size
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
            distance: 30,
            style: {
              fontSize: '13px',
              textOutline: 'none',
              color: 'black',
            },
            format: '{point.name}: {point.percentage:.1f}%',
          },
          showInLegend: true,
        },
      },
      legend: {
        itemStyle: {
          fontSize: '12px', // Adjust legend font size
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Percentage',
          data: [
            { name: '0-30 Days', y: 5.5 },
            { name: '30-90 Days', y: 15.5 },
            { name: '90-180 Days', y: 39.0 },
            { name: '180+ Days', y: 45.5 },
          ],
        },
      ],
    };

    Highcharts.chart('container74', chartOptions);
  }
}