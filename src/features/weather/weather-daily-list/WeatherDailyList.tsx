import { WeatherDailyModel } from "@/models/WeatherDailyModel";

type Props = {
  dailyWeather?: WeatherDailyModel[] | null;
};

const WeatherDailyList = ({ dailyWeather }: Props) => {
  if (!dailyWeather) {
    return null;
  }
  return <ul className="flex flex-col gap-5"></ul>;
};

export default WeatherDailyList;
