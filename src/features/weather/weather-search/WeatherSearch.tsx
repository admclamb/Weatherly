import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navigation, Search } from "lucide-react";
import { useWeatherSearch } from "./WeatherSearch.hooks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const WeatherSearch = () => {
  const {
    search,
    searchLocation,
    changeSearch,
    handleFocus,
    handleBlur,
    useLocation,
  } = useWeatherSearch();
  return (
    <form
      onSubmit={searchLocation}
      className="relative"
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full">
          <div className="relative w-full">
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
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Button
              onClick={useLocation}
              variant="ghost"
              className="flex gap-3 items-center justify-start w-full py-3 pr-3 pl-1"
            >
              <Navigation className="text-orange-500" /> Use Current Location
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </form>
  );
};

export default WeatherSearch;
