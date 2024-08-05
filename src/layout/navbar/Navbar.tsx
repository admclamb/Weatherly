import { Link } from "react-router-dom";
import Container from "../container/Container";
import ThemeToggle from "@/components/button/ThemeToggle";
import NavbarMobile from "./navbar-mobile/NavbarMobile";
import WeatherSearch from "@/features/weather/weather-search/WeatherSearch";

type Props = {
  bgColor?: string;
  position?: string;
};
const Navbar = ({
  position = "fixed top-0 w-full z-50",
  bgColor = "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
}: Props) => {
  return (
    <nav className={`${position} border-b shadow-sm ${bgColor}`}>
      <Container className="p-2 flex justify-between items-center relative">
        <ul className="flex items-center gap-1 sm:gap-2 md:gap-3">
          <li className="md:hidden">
            <NavbarMobile />
          </li>
          <li>
            <Link to="/" className="flex items-center">
              <img src="https://openweathermap.org/img/wn/02d.png" />
              <h1 className="text-lg font-semibold py-2">Weatherly</h1>
            </Link>
          </li>
        </ul>
        <ul className="items-center flex gap-5">
          <li className="hidden md:block">
            <WeatherSearch />
          </li>
          <li className="hidden md:block">
            <Link to="/" className="py-2 px-2 block">
              Home
            </Link>
          </li>
          {/* <li className="hidden md:block">
            <Link to="/settings" className="py-2 px-2 block">
              Settings
            </Link>
          </li> */}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
