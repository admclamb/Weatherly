import { useWeatherDaily } from "./WeatherDaily.hooks";

const WeatherDaily = () => {
  const { weather, error } = useWeatherDaily();

  return <div>WeatherDaily</div>;
};

export default WeatherDaily;
