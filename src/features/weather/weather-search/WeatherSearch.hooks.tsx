import { ChangeEventHandler, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useWeatherSearch = () => {
  const [search, setSearch] = useState<string>("");

  const navigate = useNavigate();

  const searchLocation = (event: FormEvent) => {
    event.preventDefault();
    if (search) {
      navigate(`/search-results?q=${encodeURIComponent(search)}`);
    }
  };

  const changeSearch: ChangeEventHandler = (event) => {
    setSearch((event.target as HTMLInputElement).value);
  };

  return { search, searchLocation, changeSearch };
};
