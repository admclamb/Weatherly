import { useWeatherHourly } from "./WeatherHourly.hooks";
import ErrorAlert from "@/errors/ErrorAlert";
import AirQuality from "@/features/air-quality/AirQuality";
import WeatherHourlyList from "@/features/weather/weather-hourly/WeatherHourlyList";
const WeatherHourly = () => {
  const { weather, error } = useWeatherHourly();

  return (
    <div className="grid grid-cols-12 gap-5">
      <ErrorAlert className="col-span-12" error={error} />
      <div className="flex flex-col gap-5 col-span-12 md:col-span-8">
        <WeatherHourlyList hourlyWeather={weather?.hourly} />
      </div>
      <aside className="col-span-12 md:col-span-4 flex flex-col gap-5">
        <AirQuality />
      </aside>
    </div>
  );
};

export default WeatherHourly;
