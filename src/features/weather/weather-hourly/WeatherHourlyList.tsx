import { WeatherHourlyModel } from "@/models/WeatherHourlyModel";
import WeatherHourlyCard from "./weather-hourly-card/WeatherHourlyCard";

type Props = {
  hourlyWeather?: WeatherHourlyModel[] | null;
};

const WeatherHourlyList = ({ hourlyWeather }: Props) => {
  if (!hourlyWeather) {
    return null;
  }
  return (
    <ul className="flex flex-col gap-5">
      {hourlyWeather.map((hour) => (
        <li key={hour.dt}>
          <WeatherHourlyCard weatherHourly={hour} />
        </li>
      ))}
    </ul>
  );
};

export default WeatherHourlyList;
