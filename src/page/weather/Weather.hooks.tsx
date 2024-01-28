import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { ErrorModel } from "@/models/ErrorModel";
import { WeatherModel } from "@/models/WeatherModel";
import { locationService } from "@/services/LocationService";
import { weatherService } from "@/services/WeatherService";
import { setLocation } from "@/slices/locationSlice";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const useWeatherHooks = () => {
  const [searchParams] = useSearchParams();
  const { location } = useAppSelector((state) => state.location);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  const { units } = useAppSelector((state) => state.units);
  const [weather, setWeather] = useState<WeatherModel | null>(null);
  const [error, setError] = useState<ErrorModel | null>(null);

  useEffect(() => {
    if (typeof Number(lat) !== "number" || typeof Number(lon) !== "number") {
      navigate("/");
    }
    (async () => {
      const [data, apiError] = await weatherService.getWeather(
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

    (async () => {
      if (
        !location &&
        typeof Number(lat) === "number" &&
        typeof Number(lon) === "number"
      ) {
        const [data] = await locationService.getLocationByCoords(
          Number(lat),
          Number(lon)
        );

        if (data && data.length) {
          dispatch(setLocation(data[0]));
        }
      }
    })();
  }, [lat, lon]);

  return { weather, error };
};
