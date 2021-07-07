import { City } from './city.interface';
import { WeatherListItem } from './weather-list-item.interface';

export interface CityResponse {
  city: City;
  cnt: number;
  cod: string;
  list: WeatherListItem[];
  message: number;
}
