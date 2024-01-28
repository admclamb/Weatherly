export interface WeatherHourlyModel {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  uvi: number;
  visibility: number;
  pop: number;
  weather: {
    id: number;
    icon: string;
    main: string;
    description: string;
  }[];
  wind_deg: number;
  wind_speed: number;
  rain: number;
  snow: number;
}
