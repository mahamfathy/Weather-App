import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConversion',
  standalone: true
})
export class TemperatureConversionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
