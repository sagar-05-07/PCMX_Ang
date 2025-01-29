import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-lender-analytics',
  templateUrl: './lender-analytics.component.html',
  styleUrl: './lender-analytics.component.scss'
})
export class LenderAnalyticsComponent {

  ngOnInit(): void {
    this.billingByType();
    this.visitsByStatus();
    this.claimsbyStatus();
    this.networksByState();
    this.distributionbyNetwork();
  }

  billingByType(): void {
    const chartOptions2: Highcharts.Options = {
      chart: {
        type: 'column', // Vertical bars
      },
      title: {
        text: 'Monthly Funding (2024)',
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
          data: [12000, 15000, 18000, 20000, 25000, 22000, 16000, 22000, 6000, 8000, 14000, 10000],
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

    Highcharts.chart('container30', chartOptions2);
  }

  visitsByStatus(): void {
    const chartOptions21: Highcharts.Options = {
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Monthly Payback',
        style: {
          fontSize: '14px', // Adjust title font size here
        },
      },
      subtitle: {
        text: '',
      },
      xAxis: {
        categories: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
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
      credits: {
        enabled: false,
      },
      series: [
        {
          type: 'bar',
          name: 'Visits',
          data: [2500, 2000, 1800, 1700, 1500, 1400, 1200, 1300, 1100, 1900, 1800, 1700],
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

    Highcharts.chart('container31', chartOptions21);
  }

  claimsbyStatus(): void {
    const chartOptions21: Highcharts.Options = {
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Ageing Analysis for Payments',
        style: {
          fontSize: '14px', // Adjust title font size here
        },
      },
      subtitle: {
        text: '',
      },
      xAxis: {
        categories: [
          'ADH Houston',
          'Dallas',
          'River Oaks',
          'East Houston',
          'Capital Care',
        ],
        title: {
          text: null,
        },
        labels: {
          style: {
            fontSize: '16px', // Adjust xAxis labels font size here
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
          type: 'pie',
          name: 'Percentage',
          data: [
            { name: '0-30 Days', y: 5.5 },
            { name: '30-90 Days', y: 15.5 },
            { name: '90-180 Days', y: 39.0 },
            { name: '180+ Days', y: 45.5 },
          ],
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '13px', // Adjust font size for data labels
              fontWeight: 'bold', // Optionally make it bold
              color: 'black', // Optionally adjust color
            },
          },
        },
      ],

    };

    Highcharts.chart('container32', chartOptions21);
  }

  networksByState(): void {
    const chartOptions21: Highcharts.Options = {
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Ageing Analysis for Funding',
        style: {
          fontSize: '14px', // Adjust title font size here
        },
      },
      subtitle: {
        text: '',
      },
      xAxis: {
        categories: [
          'ADH Houston',
          'Dallas',
          'River Oaks',
          'East Houston',
          'Capital Care',
        ],
        title: {
          text: null,
        },
        labels: {
          style: {
            fontSize: '16px', // Adjust xAxis labels font size here
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
          type: 'pie',
          name: 'Percentage',
          data: [
            { name: '0-3 Days', y: 15.5 },
            { name: '3-6 Days', y: 15.5 },
            { name: '6-15 Days', y: 39.0 },
            { name: '15-30 Days', y: 19.0 },
            { name: '30+ Days', y: 45.5 },
          ],
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '13px', // Adjust font size for data labels
              fontWeight: 'bold', // Optionally make it bold
              color: 'black', // Optionally adjust color
            },
          },
        },
      ],

    };

    Highcharts.chart('container33', chartOptions21);
  }

  distributionbyNetwork(): void {
    const chartOptions21: Highcharts.Options = {
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Ageing Analysis for Payback',
        style: {
          fontSize: '14px', // Adjust title font size here
        },
      },
      subtitle: {
        text: '',
      },
      xAxis: {
        categories: [
          'ADH Houston',
          'Dallas',
          'River Oaks',
          'East Houston',
          'Capital Care',
        ],
        title: {
          text: null,
        },
        labels: {
          style: {
            fontSize: '16px', // Adjust xAxis labels font size here
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
          type: 'pie',
          name: 'Percentage',
          data: [
            { name: '0-3 Days', y: 15.5 },
            { name: '3-6 Days', y: 25.5 },
            { name: '6-15 Days', y: 19.0 },
            { name: '15-30 Days', y: 29.0 },
            { name: '30+ Days', y: 15.5 },
          ],
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '13px', // Adjust font size for data labels
              fontWeight: 'bold', // Optionally make it bold
              color: 'black', // Optionally adjust color
            },
          },
        },
      ],

    };

    Highcharts.chart('container34', chartOptions21);
  }

}

