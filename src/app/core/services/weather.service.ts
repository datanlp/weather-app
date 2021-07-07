import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ErrorHandleHelper } from '../../helpers/error-handle.helper';
import { WEATHER_API_KEY, WEATHER_MAIN_URL, WEATHER_SUFFIX_URL } from '../../constants/api.constant';
import { CityResponse } from '../../interfaces/city-response.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getCityWeather(city: string): Observable<CityResponse> {
    return this.http
      .get<CityResponse>(WEATHER_MAIN_URL + city + WEATHER_SUFFIX_URL + WEATHER_API_KEY)
      .pipe(catchError(ErrorHandleHelper.handleError<CityResponse>('getCityWeather')));
  }
}
