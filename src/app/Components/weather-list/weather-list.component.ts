import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-weather-list',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './weather-list.component.html',
  styleUrl: './weather-list.component.css',
})
export class WeatherListComponent {
  searchCity: string = '';
  filterSearchList: any[];
  sortBy: string = '';
  sortAscending: boolean = false;
  weatherList: any[] = [
    { city: 'Palastine', temperature: 22 },
    { city: 'Cairo', temperature: 50 },
    { city: 'New York', temperature: 5 },
    { city: 'Tokyo', temperature: 15 },
    { city: 'Italy', temperature: 30 },
    { city: 'Belguim', temperature: 7 },
  ];
  constructor(private router: Router) {
    this.filterSearchList = this.weatherList;
  }
  navigateToWeather(temperature: number) {
    this.router.navigate(['weather'], { queryParams: { temperature } });
  }
  filterWeatherList() {
    if (!this.searchCity) {
      this.filterSearchList = this.weatherList;
    } else {
      this.filterSearchList = this.weatherList.filter((cityWeather) => {
        return cityWeather.city
          .toLowerCase()
          .includes(this.searchCity.toLowerCase());
      });
    }
  }
  sortWeatherList(property: string) {
    this.sortBy = property;
    this.sortAscending = !this.sortAscending;
    this.filterSearchList.sort((a, b) => {
      const aValue = a[property];
      const bValue = b[property];
      if (aValue > bValue) {
        return this.sortAscending ? 1 : -1;
      } else if (bValue > aValue) {
        return this.sortAscending ? -1 : 1;
      }
      return 0;
    });
  }
}
