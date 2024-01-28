import { AxiosRequestConfig } from "axios";
import api from "./Api";
import { ApiResponse } from "@/models/ApiResponseModel";

const getMap = (
  layer = "clouds_new",
  z = 5,
  x = 5,
  y = 5
): Promise<ApiResponse<string>> => {
  const config: AxiosRequestConfig = {
    url: `/map/${encodeURIComponent(layer)}/${encodeURIComponent(
      z
    )}/${encodeURIComponent(x)}/${encodeURIComponent(y)}.png`,
  };

  return api.callExternalApi<string>({ config });
};

const mapService = {
  getMap,
};

Object.freeze(mapService);
export { mapService };
