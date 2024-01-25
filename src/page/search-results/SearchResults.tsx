import LayoutSolid from "@/layout/layout-solid/LayoutSolid";
import { useSearchResults } from "./SearchResults.hooks";
import Container from "@/layout/container/Container";
import { Card } from "@/components/ui/card";
import ErrorAlert from "@/errors/ErrorAlert";
import SearchResultsLoader from "@/features/search-results/search-results-loader/SearchResultsLoader";
import { Link } from "react-router-dom";

const SearchResults = () => {
  const { searchQuery, isLoading, error, locations } = useSearchResults();
  console.log(searchQuery);
  return (
    <LayoutSolid>
      <Container className="py-5 px-2 flex flex-col gap-5">
        <ErrorAlert error={error} />
        {isLoading ? (
          <SearchResultsLoader />
        ) : (
          <Card className="p-5">
            <p className="border-b pb-3">
              Showing <span className="font-semibold">{locations.length}</span>{" "}
              locations for{" "}
              <span className="font-semibold">"{searchQuery}"</span>
            </p>
            <ul>
              {locations.map((location) => (
                <li key={location.lat + location.lon}>
                  <Link
                    to={`/weather?lat=${encodeURIComponent(
                      location.lat
                    )}&lon=${encodeURIComponent(location.lon)}`}
                    className="py-3 border-b block"
                  >
                    <h6 className="font-semibold hover:underline underline-offset-2">
                      {location.name}
                    </h6>
                    <p className="text-sm text-stone-500">
                      {[location.state, location.country].join(", ")}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </Card>
        )}
      </Container>
    </LayoutSolid>
  );
};

export default SearchResults;
