import { Component, input } from '@angular/core';
import { HousingLocationInfo } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation1().photo"
        alt="Exterior photo of {{ housingLocation1().name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation1().name }}</h2>
      <p class="listing-location">{{ housingLocation1().city }}, {{ housingLocation1().state }}</p>
      <a [routerLink]="['/details', housingLocation1().id]">Learn more</a>
    </section>`,
  styleUrl: './housing-location.scss'
})
export class HousingLocation {
  housingLocation1 = input.required<HousingLocationInfo>();
}
