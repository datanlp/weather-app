import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';
import { CityResponse } from '../../interfaces/city-response.interface';
import { WeatherListItem } from '../../interfaces/weather-list-item.interface';
import { Subject } from 'rxjs';
import { WEATHER_ICON_URL } from '../../constants/api.constant';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit, OnDestroy {
  weatherIconUrl: string = WEATHER_ICON_URL;
  destroySource: Subject<boolean> = new Subject<boolean>();
  searchInput: FormControl = new FormControl();
  city: CityResponse | undefined;
  pressure: number = 0;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.searchInput.valueChanges
      .pipe(
        debounceTime(200),
        switchMap((city: string) => this.weatherService.getCityWeather(city))
      )
      .subscribe(
        (res: CityResponse) => {
          this.city = res;
          if (res !== undefined) {
            this.countAveragePressure(res);
          }
        },
        (err: any) => console.log(`Can't get weather. Error code: %s, URL: %s`, err.message, err.url)
      );
  }

  countAveragePressure(res: CityResponse): void {
    const pressures: number[] = res.list.map((item: WeatherListItem) => item.main.pressure);
    this.pressure = pressures.reduce((a: number, b: number) => a + b) / pressures.length;
  }
  ngOnDestroy(): void {
    this.destroySource.next(true);
    this.destroySource.unsubscribe();
  }
}
