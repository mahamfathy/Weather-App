import { Component, OnInit } from '@angular/core';
import { BackGroundColorDirective } from '../../Directives/back-ground-color.directive';
import { ActivatedRoute } from '@angular/router';
import { TemperatureConversionPipe } from '../../Pipes/temperature-conversion.pipe';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [BackGroundColorDirective, TemperatureConversionPipe],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent implements OnInit {
  temperature: number = 15;
  unit: string = '℃';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const temperatureParam = params['temperature'];
      if (temperatureParam) {
        this.temperature = +temperatureParam;
      }
    });
  }

  toggleUnit() {
    this.unit = this.unit === '℃' ? '℉' : '℃';
    
  }
}
