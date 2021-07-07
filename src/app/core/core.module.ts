import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './services/weather.service';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [WeatherComponent],
  exports: [WeatherComponent],
  providers: [WeatherService],
  imports: [ReactiveFormsModule, CommonModule],
})
export class CoreModule {}
