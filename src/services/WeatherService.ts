import { ApiResponse } from "@/models/ApiResponseModel";
import { WeatherModel } from "@/models/WeatherModel";
import { AxiosRequestConfig } from "axios";
import api from "./Api";

const getWeather = (
  lat: number,
  lon: number,
  units: string
): Promise<ApiResponse<WeatherModel>> => {
  const config: AxiosRequestConfig = {
    url: "/data/3.0/onecall",
    params: { lat, lon, units, limit: 5 },
  };

  return api.callExternalApi<WeatherModel>({ config });
};

const WeatherService = {
  getWeather,
};

Object.freeze(WeatherService);
export default WeatherService;
