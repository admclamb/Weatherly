import ErrorAlert from "@/errors/ErrorAlert";
import AirQuality from "@/features/air-quality/AirQuality";
import { useWeatherDaily } from "./WeatherDaily.hooks";
import WeatherDailyList from "@/features/weather/weather-daily/weather-daily-list/WeatherDailyList";

const WeatherDaily = () => {
  const { weather, error } = useWeatherDaily();

  return (
    <div className="grid grid-cols-12 gap-5">
      <ErrorAlert className="col-span-12" error={error} />
      <div className="flex flex-col gap-5 col-span-12 md:col-span-8">
        <WeatherDailyList dailyWeather={weather?.daily} />
      </div>
      <aside className="col-span-12 md:col-span-4 flex flex-col gap-5">
        <AirQuality />
      </aside>
    </div>
  );
};

export default WeatherDaily;
