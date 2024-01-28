import { useAppSelector } from "@/hooks/useAppSelector";
import { AirQualityModel } from "@/models/AirQualityModel";
import { ErrorModel } from "@/models/ErrorModel";
import { airPollutionService } from "@/services/AirPollutionService";
import { useEffect, useState } from "react";

export const useAirQuality = () => {
  const { location } = useAppSelector((state) => state.location);
  const [airQuality, setAirQuality] = useState<AirQualityModel | null>(null);

  useEffect(() => {
    (async () => {
      if (location?.lat && location?.lon) {
        const [data] = await airPollutionService.getAirQuality(
          location?.lat,
          location?.lon
        );
        if (data) {
          setAirQuality(data);
        }
      }
    })();
  }, [location]);

  return { airQuality, location };
};
