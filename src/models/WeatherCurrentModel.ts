export interface WeatherCurrentModel {
  cloud: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: {
    id: number;
    icon: string;
    main: string;
    description: string;
  }[];
  wind_deg: number;
  wind_speed: number;
}
