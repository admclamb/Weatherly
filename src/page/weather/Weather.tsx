import Layout from "@/layout/Layout";
import { useWeatherHooks } from "./Weather.hooks";
import Container from "@/layout/container/Container";
import ErrorAlert from "@/errors/ErrorAlert";
import WeatherNav from "@/features/weather/weather-nav/WeatherNav";
import { Route, Routes } from "react-router-dom";
import WeatherToday from "./weather-today/WeatherToday";

const Weather = () => {
  const { weather, error } = useWeatherHooks();
  return (
    <Layout>
      <Container className="px-2 flex flex-col gap-5">
        <ErrorAlert error={error} />
        <WeatherNav />
        <Routes>
          <Route index element={<WeatherToday weather={weather} />} />
        </Routes>
      </Container>
    </Layout>
  );
};

export default Weather;
