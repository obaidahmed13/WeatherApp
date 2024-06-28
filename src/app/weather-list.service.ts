export class WeatherListService {
  getWeatherList() {
    return [
      {
        City: "Tampa",
        Weather: "Cloudy - 86 deg",
        Image: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
      },
      {
        City: "Orlando",
        Weather: "Rain - 88 deg",
        Image: "https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png"
      },
      {
        City: "Houston",
        Weather: "Cloudy - 75 deg",
        Image: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
      },
      {
        City: "Dallas",
        Weather: "Sunny - 92 deg",
        Image: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"
      },
      {
        City: "Los Angeles",
        Weather: "Cloudy - 66 deg",
        Image: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
      }
    ]
  }
}
