import Layout from "@/layout/Layout";
import { useWeatherHooks } from "./Weather.hooks";
import Container from "@/layout/container/Container";
import ErrorAlert from "@/errors/ErrorAlert";
import WeatherNav from "@/features/weather/weather-nav/WeatherNav";
import { Outlet } from "react-router-dom";
import WeatherAlert from "@/features/weather/weather-alert/WeatherAlert";

const Weather = () => {
  const { weather, error } = useWeatherHooks();
  return (
    <Layout>
      <Container className="px-2 flex flex-col gap-5 pb-5">
        <ErrorAlert error={error} />
        <WeatherNav />
        <WeatherAlert weather={weather} />
        <Outlet />
      </Container>
    </Layout>
  );
};

export default Weather;
