import { Component } from '@angular/core';
import { WeatherListService } from '../weather-list.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  allWeather: any;
  city: string = '';
  weather: any;
  constructor(srv: WeatherListService) {
    this.allWeather = srv.getWeatherList();
    
  }
  searchWeather(city: string){
    this.weather = this.allWeather.find((w:any)=> w.City == city);
    console.log(this.weather);
  }

}
