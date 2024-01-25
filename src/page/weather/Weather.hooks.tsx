import { useAppSelector } from "@/hooks/useAppSelector";
import { ErrorModel } from "@/models/ErrorModel";
import { WeatherModel } from "@/models/WeatherModel";
import WeatherService from "@/services/WeatherService";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const useWeatherHooks = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  const { units } = useAppSelector((state) => state.units);
  const [weather, setWeather] = useState<WeatherModel | null>(null);
  const [error, setError] = useState<ErrorModel | null>(null);

  useEffect(() => {
    console.log("LAT: ", lat, "LON: ", lon);
    if (typeof lat === "number" || typeof lon === "number") {
      navigate("/");
    }
    (async () => {
      const [data, apiError] = await WeatherService.getWeather(
        Number(lat),
        Number(lon),
        units
      );

      if (data) {
        setWeather(data);
      }
      if (apiError) {
        setError(apiError);
      }
    })();
  }, [lat, lon]);

  return { weather, error };
};
