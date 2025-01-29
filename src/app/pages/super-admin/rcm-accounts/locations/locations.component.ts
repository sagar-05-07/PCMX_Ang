import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent {

  locations = [
    { name: 'APOLLO HOSPITALS', address: '10333 HARWIN DR#435', cityState: 'HOUSTON,TX' },
    { name: 'CLEVLAND CLINIC', address: '11301 FALLBROOK DR.#120', cityState: 'HOUSTON,TX' },
    { name: 'JOHNS HOPKINS HOSPITAL', address: '6699 CHIMNEY ROCK RD.#201', cityState: 'HOUSTON,TX' },
    { name: 'EVOLVE HEALTHCARE', address: '5445 ALMEDA ROAD SUITE 312', cityState: 'HOUSTON,TX' },
    { name: 'EXALTING HOSPICE AND PALLIATIVE CARE LLC', address: '9701 RICHMOND AVE', cityState: 'HOUSTON,TX' },
    { name: 'OFFICE OF DR.ARTURO BRAVO', address: '2120 ASHLAND ST', cityState: 'HOUSTON,TX' },
    { name: 'JOHNS HOPKINS HOSPITAL', address: '6699 CHIMNEY ROCK RD.#201', cityState: 'HOUSTON,TX' },
    { name: 'EXCEL DIAGNOSTIC IMAGING CLINICS', address: '9701 RICHMOND AVE', cityState: 'HOUSTON,TX' },
    { name: 'OFFICE OF DR.LEILA G.VIZIROV,MD', address: '10333 HARWIN DR#435', cityState: 'HOUSTON,TX' },

    { name: 'EXCEPTIONAL FSER', address: '5445 ALMEDA ROAD SUITE 312', cityState: 'HOUSTON,TX' },
    { name: 'EXALTING HOSPICE AND PALLIATIVE CARE LLC', address: '9701 RICHMOND AVE', cityState: 'HOUSTON,TX' },
    { name: 'EXCEL THERAPY', address: '2120 ASHLAND ST', cityState: 'HOUSTON,TX' },
    { name: 'APOLLO HOSPITALS', address: '6699 CHIMNEY ROCK RD.#201', cityState: 'HOUSTON,TX' },
    { name: 'EXCEL DIAGNOSTIC IMAGING CLINICS', address: '9701 RICHMOND AVE', cityState: 'HOUSTON,TX' },
    { name: 'MAYO CLINIC', address: '10333 HARWIN DR#435', cityState: 'HOUSTON,TX' },

    { name: 'EXALTING HOSPICE AND PALLIATIVE CARE LLC', address: '9701 RICHMOND AVE', cityState: 'HOUSTON,TX' },
    { name: 'EXCEL THERAPY', address: '2120 ASHLAND ST', cityState: 'HOUSTON,TX' },
    { name: 'APOLLO HOSPITALS', address: '6699 CHIMNEY ROCK RD.#201', cityState: 'HOUSTON,TX' },
    { name: 'EXCEL DIAGNOSTIC IMAGING CLINICS', address: '9701 RICHMOND AVE', cityState: 'HOUSTON,TX' },
    { name: 'MAYO CLINIC', address: '10333 HARWIN DR#435', cityState: 'HOUSTON,TX' },
    { name: 'CLEVLAND CLINIC', address: '11301 FALLBROOK DR.#120', cityState: 'HOUSTON,TX' },

  ];
  // State for toggling
  isExpanded = false;

  // Initially displayed locations
  displayedLocations = this.locations.slice(0, 6);

  constructor(private location: Location) { }

  // Go back to the previous page
  goBack(): void {
    this.location.back();
  }

  // Handle location click
  openLocation(location: any): void {
    console.log('Selected Location:', location);
  }

  // Toggle Show More / Show Less
  toggleLocations(): void {
    this.isExpanded = !this.isExpanded;
    this.displayedLocations = this.isExpanded
      ? this.locations
      : this.locations.slice(0, 5);
  }
}