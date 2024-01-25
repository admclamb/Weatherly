import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const useWeatherHooks = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  useEffect(() => {
    console.log("LAT: ", lat, "LON: ", lon);
    if (!lat || !lon) {
      navigate("/");
    }
    (async () => {})();
  }, [lat, lon]);

  return { lat, lon };
};
