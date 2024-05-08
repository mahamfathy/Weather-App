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
  weatherList: any[] = [
    { city: 'Palastine', temperature: 22 },
    { city: 'Cairo', temperature: 50 },
    { city: 'New York', temperature: 5 },
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
}
