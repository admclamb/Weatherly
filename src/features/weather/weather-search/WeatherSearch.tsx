import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useWeatherSearch } from "./WeatherSearch.hooks";

const WeatherSearch = () => {
  const { search, searchLocation, changeSearch } = useWeatherSearch();
  return (
    <form onSubmit={searchLocation}>
      <div className="relative">
        <Input
          className="pr-16"
          type="search"
          placeholder="Search a city"
          value={search}
          onChange={changeSearch}
        />
        <Button
          className="absolute right-0 top-1/2 -translate-y-1/2"
          variant="ghost"
        >
          <Search />
        </Button>
      </div>
    </form>
  );
};

export default WeatherSearch;
