import { WeatherListItemMain } from './weather-list-item-main.interface';
import { Weather } from './weather.interface';

export interface WeatherListItem {
  clouds: object;
  dt: number;
  main: WeatherListItemMain;
  weather: Weather[];
  wind: object;
  visibility: number;
  pop: number;
  rain: object;
  sys: object;
  dt_txt: string;
}
