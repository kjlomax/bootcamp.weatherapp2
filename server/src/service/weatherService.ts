import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  lat: number;
  lon: number;
}

// TODO: Define a class for the Weather object
class Weather {
  temperature: number;
  windSpeed: number;
  humidity: number;

  constructor(temperature: number, windSpeed: number, humidity: number) {
    this.temperature = this.temperature;
    this.windSpeed = this.windSpeed;
    this.humidity = this.humidity;
  }

}

// TODO: Complete the WeatherService class
class WeatherService {
  baseURL: string;
  apiKey: string;
  cityName: string;

  // TODO: Define the baseURL, API key, and city name properties
  constructor() {
    this.baseURL = 'https://api.openweathermap.org/data/2.5/';
    this.apiKey = 'b1b35bba8b434a28a0be2a3e1071ae5b';
    this.cityName = this.cityName;
  }
  
  // TODO: Create fetchLocationData method
  // private async fetchLocationData(query: string) {}
  // TODO: Create destructureLocationData method
  // private destructureLocationData(locationData: Coordinates): Coordinates {}
  // TODO: Create buildGeocodeQuery method
  // private buildGeocodeQuery(): string {}
  // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  // private async fetchAndDestructureLocationData() {}
  // TODO: Create fetchWeatherData method
  // private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string) {
    return city;
  }
}

export default new WeatherService();
