import { locationService } from "@/services/LocationService";
import { ChangeEventHandler, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useWeatherSearch = () => {
  const [search, setSearch] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const searchLocation = (event: FormEvent) => {
    event.preventDefault();
    if (search) {
      navigate(`/search-results?q=${encodeURIComponent(search)}`);
    }
  };

  const handleFocus = () => {
    setIsDropdownOpen(true);
  };

  const handleBlur = () => {
    setIsDropdownOpen(false);
  };

  const changeSearch: ChangeEventHandler = (event) => {
    setSearch((event.target as HTMLInputElement).value);
  };

  const useLocation = async () => {
    const { lat, lon } = await locationService.getLocalLocation();
    if (lat && lon) {
      navigate(`/weather?lat=${lat}&lon=${lon}`);
    }
  };

  return {
    search,
    searchLocation,
    changeSearch,
    handleFocus,
    handleBlur,
    isDropdownOpen,
    useLocation,
  };
};
