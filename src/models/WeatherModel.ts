import { WeatherCurrentModel } from "./WeatherCurrentModel";
import { WeatherDailyModel } from "./WeatherDailyModel";
import { WeatherHourlyModel } from "./WeatherHourlyModel";

export interface WeatherModel {
  current?: WeatherCurrentModel;
  hourly?: WeatherHourlyModel;
  daily?: WeatherDailyModel;
}
