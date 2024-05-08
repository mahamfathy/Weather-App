import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-weather-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './weather-list.component.html',
  styleUrl: './weather-list.component.css',
})
export class WeatherListComponent {

  weatherList: any[] = [
    { city: 'Palastine', temperature: 22 },
    { city: 'Cairo', temperature: 50 },
    { city: 'New York', temperature: 5 },
  ];
  constructor(private router: Router) {}
  navigateToWeather(temperature: number) {
    this.router.navigate(['weather'], { queryParams: { temperature } });
  }
}
