import { ErrorModel } from "@/models/ErrorModel";
import { LocationModel } from "@/models/LocationModel";
import { locationService } from "@/services/LocationService";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useSearchResults = () => {
  const [searchParams] = useSearchParams();
  const [locations, setLocations] = useState<LocationModel[]>([]);

  const [error, setError] = useState<ErrorModel | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchQuery = searchParams.get("q");

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(null);
      if (!searchQuery) {
        setError({ message: "A search query is required." });
        return;
      }
      const [data, apiError] = await locationService.getLocationByName(
        searchQuery
      );
      if (data) {
        setLocations(data);
      }
      if (apiError) {
        setError(apiError);
      }
      setIsLoading(false);
    })();
  }, [searchQuery]);

  return { searchQuery, error, isLoading, locations };
};
