import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingService } from '../housing.services';
import { HousingLocationInfo } from '../housinglocation';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  template: `
    <section class="home">
      <form>
        <input type="text" placeholder="Filter by city" #filter/>
        <button type="submit" class="primary" (click)="filterResults(filter.value)">Search</button>
      </form>      
    </section>
    <section class="results">
      @for(housingLocation2 of filteredLocationList; track $index) {
        <app-housing-location [housingLocation1]="housingLocation2"></app-housing-location>
      }
    </section>
  `,
  styleUrl: './home.scss'
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  filteredLocationList: HousingLocationInfo[] = [];
  housingService: HousingService = inject(HousingService);
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }
  filterResults(text: string) {
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}

