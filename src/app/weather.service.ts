import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiurl = "http://localhost:3000/weather";
  constructor(private http:HttpClient) {}

  getWeather(): Observable<Weather[]> {
    return this.http.get<Weather[]>(this.apiurl);
  }
}
