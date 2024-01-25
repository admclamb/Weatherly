import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import NotFound from "./not-found/NotFound";
import SearchResults from "./search-results/SearchResults";
import Weather from "./weather/Weather";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="weather" element={<Weather />} />
      <Route path="search-results" element={<SearchResults />} />
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PageRoutes;
