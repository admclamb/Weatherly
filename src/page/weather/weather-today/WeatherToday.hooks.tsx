import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { ErrorModel } from "@/models/ErrorModel";
import { locationService } from "@/services/LocationService";
import { weatherService } from "@/services/WeatherService";
import { setLocation } from "@/slices/locationSlice";
import { setWeather } from "@/slices/weatherSlice";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const useWeatherToday = () => {
  const { weather } = useAppSelector((state) => state.weather);
  const { location } = useAppSelector((state) => state.location);
  const { units } = useAppSelector((state) => state.units);

  const [searchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  const [error, setError] = useState<ErrorModel | null>(null);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!weather) {
      (async () => {
        console.log("NOT IN HERE");
        if (
          typeof Number(lat) !== "number" ||
          typeof Number(lon) !== "number"
        ) {
          console.log("NOT A NUMBER");
          navigate("/");
        }
        const [data, apiError] = await weatherService.getWeather(
          Number(lat),
          Number(lon),
          units
        );

        console.log(data);

        if (data) {
          dispatch(setWeather(data));
        }
        if (apiError) {
          setError(apiError);
        }
      })();
    }

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
  }, []);
  return { weather, error };
};
