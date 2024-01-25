import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAppSelector } from "@/hooks/useAppSelector";
import { WeatherDailyModel } from "@/models/WeatherDailyModel";
import dayjs from "dayjs";
import { CloudRainWind, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  dailyWeather: WeatherDailyModel[] | null | undefined;
};

const DailyWeather = ({ dailyWeather }: Props) => {
  const { units } = useAppSelector((state) => state.units);
  const { location } = useAppSelector((state) => state.location);

  if (!dailyWeather) {
    return null;
  }

  console.log(dailyWeather);

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
                  {index === 0 ? "Today" : dayjs(day.dt).format("ddd")}
                </p>
                <p>{dayjs(day.dt).format("M/DD")}</p>
              </div>
              <div></div>
              <div className="ml-auto">
                <p className="text-stone-500 flex items-center gap-3">
                  <CloudRainWind size={18} />
                  <span>{day.pop * 100}%</span>
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
