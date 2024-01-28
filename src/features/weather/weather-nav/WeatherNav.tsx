import { Link, useLocation, useSearchParams } from "react-router-dom";

const WeatherNav = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  const isActive = (path: string): boolean => {
    if (path === "/weather") {
      return location.pathname === path;
    }
    return location.pathname.includes(path);
  };

  return (
    <ul className="flex items-center gap-3 border-b">
      <li>
        <Link
          to={`/weather?lat=${lat}&lon=${lon}`}
          className={`p-3 block ${
            isActive("/weather") ? "border-b-2 border-orange-500" : ""
          }`}
        >
          Today
        </Link>
      </li>
      <li>
        <Link
          to={`/weather/hourly?lat=${lat}&lon=${lon}`}
          className={`p-3 block ${
            isActive("/weather/hourly") ? "border-b-2 border-orange-500" : ""
          }`}
        >
          Hourly
        </Link>
      </li>
      <li>
        <Link
          to={`/weather/daily?lat=${lat}&lon=${lon}`}
          className={`p-3 block ${
            isActive("/weather/daily") ? "border-b-2 border-orange-500" : ""
          }`}
        >
          Daily
        </Link>
      </li>
    </ul>
  );
};

export default WeatherNav;
