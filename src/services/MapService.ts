import { AxiosRequestConfig } from "axios";
import api from "./Api";
import { ApiResponse } from "@/models/ApiResponseModel";

const getMap = (
  layer = "clouds_new",
  z = 5,
  x = 5,
  y = 5
): Promise<ApiResponse<string>> => {
  console.log(layer);
  const config: AxiosRequestConfig = {
    url: `/map/${encodeURIComponent(layer)}/${encodeURIComponent(
      z
    )}/${encodeURIComponent(x)}/${encodeURIComponent(y)}.png`,
  };

  return api.callExternalApi<string>({ config });
};

const MapService = {
  getMap,
};

Object.freeze(MapService);
export default MapService;
