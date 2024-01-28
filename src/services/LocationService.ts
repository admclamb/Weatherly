import { ApiResponse } from "@/models/ApiResponseModel";
import { LocationModel } from "@/models/LocationModel";
import api from "./Api";
import { AxiosRequestConfig } from "axios";

const getLocationByName = (
  location: string
): Promise<ApiResponse<LocationModel[]>> => {
  const locationFormatted = parseLocation(location);
  const config: AxiosRequestConfig = {
    url: "/geo/1.0/direct",
    params: {
      q: encodeURIComponent(locationFormatted),
      limit: import.meta.env.VITE_LOCATION_LIMIT ?? "5",
    },
  };

  return api.callExternalApi<LocationModel[]>({ config });
};

const getLocationByCoords = (
  lat: number,
  lon: number
): Promise<ApiResponse<LocationModel[]>> => {
  const config: AxiosRequestConfig = {
    url: "/geo/1.0/reverse",
    params: {
      lat,
      lon,
      limit: 5,
    },
  };

  return api.callExternalApi<LocationModel[]>({ config });
};

const getLocalLocation = (): Promise<{ lat: number; lon: number }> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          resolve({ lat: coords.latitude, lon: coords.longitude });
        },
        (err) => {
          reject(err.message);
        }
      );
    }
  });
};

const parseLocation = (searchString: string) => {
  // Split the input string by commas and trim each part
  const parts = searchString.split(",").map((part) => part.trim());

  let city, state, country;

  switch (parts.length) {
    case 1:
      // Only city is provided
      [city] = parts;
      break;
    case 2:
      // City and state, or city and country provided
      [city, state] = parts;
      // If state is longer than 2 characters, assume it's a country
      if (state.length > 2) {
        country = state;
        state = undefined;
      }
      break;
    case 3:
      // City, state, and country provided
      [city, state, country] = parts;
      break;
    default:
      // Handle cases where more than 3 parts are provided
      throw new Error(
        "Invalid input format. Please provide a string in 'City, State, Country' format."
      );
  }

  // Create an array and filter out undefined values
  const locationParts = [city, state, country].filter(
    (part) => part !== undefined
  );

  // Join the parts with a comma and return the result
  return locationParts.join(", ");
};

const locationService = {
  getLocationByName,
  getLocationByCoords,
  getLocalLocation,
};

Object.freeze(locationService);
export { locationService };
