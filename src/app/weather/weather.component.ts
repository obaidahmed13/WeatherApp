import { Component } from '@angular/core';
import { Weather } from '../weather.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  allWeather: Weather [] = [];
  oneWeather: Weather[] = [];
  city: string = '';
  constructor(private weatherService: WeatherService) {
  
    
  }
  ngOnInit() : void {
    this.weatherService.getWeather().subscribe(data => {
      console.log(data)
      this.allWeather = data;
    })
  }

  searchWeather() : void {
    if(this.city) {
      this.oneWeather = this.allWeather.filter(weather => weather.city.includes(this.city))
    }
  }
}
