import AirQuality from "@/features/air-quality/AirQuality";
import CurrentWeather from "@/features/weather/current-weather/CurrentWeather";
import DailyWeather from "@/features/weather/daily-weather/DailyWeather";
import { useWeatherToday } from "./WeatherToday.hooks";
import ErrorAlert from "@/errors/ErrorAlert";

const WeatherToday = () => {
  const { weather, error } = useWeatherToday();

  return (
    <div className="grid grid-cols-12 gap-5">
      <ErrorAlert className="col-span-12" error={error} />
      <div className="flex flex-col gap-5 col-span-12 md:col-span-8">
        <CurrentWeather currentWeather={weather?.current} />
        <DailyWeather dailyWeather={weather?.daily} />
      </div>
      <aside className="col-span-12 md:col-span-4 flex flex-col gap-5">
        <AirQuality />
      </aside>
    </div>
  );
};

export default WeatherToday;
