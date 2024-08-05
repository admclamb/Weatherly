import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import NotFound from "./not-found/NotFound";
import SearchResults from "./search-results/SearchResults";
import Weather from "./weather/Weather";
import WeatherDaily from "./weather/weather-daily/WeatherDaily";
import WeatherHourly from "./weather/weather-hourly/WeatherHourly";
import WeatherToday from "./weather/weather-today/WeatherToday";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="weather" element={<Weather />}>
        <Route index element={<WeatherToday />} />
        <Route path="daily" element={<WeatherDaily />} />
        <Route path="hourly" element={<WeatherHourly />} />
      </Route>
      {/* <Route path="settings" element={<Settings />} /> */}
      <Route path="search-results" element={<SearchResults />} />
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PageRoutes;
