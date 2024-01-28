import Icon from "@/components/icon/Icon";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAppSelector } from "@/hooks/useAppSelector";
import { Units } from "@/models/Units";
import { WeatherCurrentModel } from "@/models/WeatherCurrentModel";
import dayjs from "dayjs";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  currentWeather: WeatherCurrentModel | null | undefined;
};

const CurrentWeather = ({ currentWeather }: Props) => {
  const { units } = useAppSelector((state) => state.units);

  if (!currentWeather) {
    return null;
  }

  return (
    <Card>
      <div className="flex justify-between items-center border-b p-3">
        <h6 className="font-semibold uppercase text-stone-500">
          Current Weather
        </h6>
        <p className="text-stone-500">
          {dayjs(currentWeather.dt).format("HH:mm a")}
        </p>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex items-center">
          <Icon
            icon={currentWeather.weather[0].icon}
            description={currentWeather.weather[0].description}
          />
          <div>
            <p className="text-4xl font-semibold relative">
              {Math.floor(currentWeather.temp)}
              <span>°</span>
              <span className="absolute text-lg text-stone-500 bottom-0 right-0 translate-y-1">
                {units === Units.IMPERIAL ? "F" : "C"}
              </span>
            </p>
          </div>
        </div>
        <ul>
          <li className="flex justify-between items-center py-3 pr-3 border-b">
            Wind{" "}
            <span className="font-semibold">{`${currentWeather.wind_speed} ${
              units === Units.IMPERIAL ? "MPH" : "KPH"
            }`}</span>
          </li>
          <li className="flex justify-between items-center py-3 pr-3 border-b">
            Humidity{" "}
            <span className="font-semibold">{currentWeather.humidity}%</span>
          </li>
          <li className="flex justify-between items-center py-3 pr-3">
            UV Index <span className="font-semibold">{currentWeather.uvi}</span>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-center border-t p-3">
        <p className="font-semibold">{currentWeather.weather[0].description}</p>
        <Link to="current" className={buttonVariants({ variant: "ghost" })}>
          Show More <MoveRight className="ml-1" />
        </Link>
      </div>
    </Card>
  );
};

export default CurrentWeather;
