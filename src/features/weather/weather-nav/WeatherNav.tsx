import { Link } from "react-router-dom";

const WeatherNav = () => {
  return (
    <ul className="flex items-center gap-3 border-b">
      <li>
        <Link to="/" className="p-3 block border-b-2 border-orange-500">
          Today
        </Link>
      </li>
      <li>
        <Link to="hourly" className="p-3 block">
          Hourly
        </Link>
      </li>
      <li>
        <Link to="daily" className="p-3 block">
          Daily
        </Link>
      </li>
    </ul>
  );
};

export default WeatherNav;
