import { Component } from '@angular/core';
import { BackGroundColorDirective } from '../../Directives/back-ground-color.directive';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [BackGroundColorDirective],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent {
  temperature: number = 15;
}
