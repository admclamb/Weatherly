import { AirQualityModel } from "@/models/AirQualityModel";
import { ApiResponse } from "@/models/ApiResponseModel";
import { AxiosRequestConfig } from "axios";
import api from "./Api";

const getAirQuality = (
  lat: number,
  lon: number
): Promise<ApiResponse<AirQualityModel>> => {
  const config: AxiosRequestConfig = {
    url: "/data/2.5/air_pollution/forecast",
    params: {
      lat,
      lon,
    },
  };

  return api.callExternalApi<AirQualityModel>({ config });
};

const airPollutionService = {
  getAirQuality,
};

Object.freeze(airPollutionService);
export { airPollutionService };
