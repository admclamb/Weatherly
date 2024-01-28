import Icon from "@/components/icon/Icon";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
// import { useAppSelector } from "@/hooks/useAppSelector";
import { WeatherDailyModel } from "@/models/WeatherDailyModel";
import dayjs from "dayjs";
import { CloudRainWind, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  dailyWeather: WeatherDailyModel[] | null | undefined;
};

const DailyWeather = ({ dailyWeather }: Props) => {
  if (!dailyWeather) {
    return null;
  }

  return (
    <Card>
      <div className="flex justify-between items-center border-b p-3">
        <h6 className="font-semibold uppercase text-stone-500">
          Daily Forecast
        </h6>
      </div>
      <ul>
        {dailyWeather.map((day, index) => (
          <li key={day.dt} className="border-b">
            <Link
              to="weather/daily"
              className="block flex items-center    ` gap-5 p-3"
            >
              <div>
                <p className="font-semibold hover:underline underline-offset-3">
                  {index === 0 ? "Today" : dayjs.unix(day.dt).format("ddd")}
                </p>
                <p>{dayjs.unix(day.dt).format("M/DD")}</p>
              </div>
              <div className="flex gap-1 items-center">
                <Icon
                  icon={day.weather[0].icon}
                  description={day.weather[0].description}
                  className="w-14"
                />
                <div className="flex gap-1 items-end">
                  <p className="font-semibold text-2xl">
                    {day.temp.max.toFixed(0)}°
                  </p>
                  <p className="text-stone-500 text-lg">
                    {day.temp.min.toFixed(0)}°
                  </p>
                </div>
              </div>
              <div>
                <p className="text-semibold">{day.weather[0].description}</p>
              </div>
              <div className="ml-auto">
                <p className="text-stone-500 flex items-center gap-3">
                  <CloudRainWind size={18} />
                  <span>{(day.pop * 100).toFixed(0)}%</span>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex items-center border-t p-3">
        <li>
          <p>{}</p>
        </li>
        <li className="ml-auto">
          <Link to="current" className={buttonVariants({ variant: "ghost" })}>
            Show More <MoveRight className="ml-1" />
          </Link>
        </li>
      </ul>
    </Card>
  );
};

export default DailyWeather;
