import { WeatherDailyModel } from "@/models/WeatherDailyModel";
import WeatherDailyCard from "../weather-daily-card/WeatherDailyCard";

type Props = {
  dailyWeather?: WeatherDailyModel[] | null;
};

const WeatherDailyList = ({ dailyWeather }: Props) => {
  if (!dailyWeather) {
    return null;
  }

  return (
    <ul className="flex flex-col gap-5">
      {dailyWeather.map((day) => (
        <li key={day.dt}>
          <WeatherDailyCard weatherDaily={day} />
        </li>
      ))}
    </ul>
  );
};

export default WeatherDailyList;
