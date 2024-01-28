import Icon from "@/components/icon/Icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { useAppSelector } from "@/hooks/useAppSelector";
import { Units } from "@/models/Units";
import { WeatherDailyModel } from "@/models/WeatherDailyModel";
import { calculateDirection } from "@/utils/calculateDirection";
import dayjs from "dayjs";
import { CloudRainWind } from "lucide-react";

type Props = {
  weatherDaily: WeatherDailyModel;
};

const WeatherDailyCard = ({ weatherDaily }: Props) => {
  const { units } = useAppSelector((state) => state.units);

  return (
    <Card className="p-3">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex items-center gap-5 w-full">
            <div className="flex items-center gap-5 w-full">
              <div>
                <p className="font-semibold">
                  {dayjs.unix(weatherDaily.dt).format("ddd")}
                </p>
                <p className="text-stone-500">
                  {dayjs.unix(weatherDaily.dt).format("M/D")}
                </p>
              </div>

              <div className="flex items-center gap-0">
                <Icon
                  icon={weatherDaily.weather[0].icon}
                  description={weatherDaily.weather[0].description}
                  className="w-20"
                />
                <p className="text-4xl font-semibold relative">
                  {Math.floor(weatherDaily.temp.max)}°
                  <span className="text-base text-stone-500">
                    /{Math.floor(weatherDaily.temp.min)}
                  </span>
                </p>
              </div>
              <p className="capitalize">
                {weatherDaily.weather[0].description}
              </p>
              <div className="ml-auto">
                <p className="text-stone-500 flex items-center gap-3">
                  <CloudRainWind size={18} />
                  <span>{(weatherDaily.pop * 100).toFixed(0)}%</span>
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-5">
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold">Summary</h4>
              <p>{weatherDaily.summary}</p>
            </div>
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold">Information</h4>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex justify-between items-center border-b py-3">
                  <span className="font-semibold">Wind</span>
                  <p>
                    {Math.floor(weatherDaily.wind_speed)}{" "}
                    {units === Units.IMPERIAL ? "MPH" : "KPH"}
                  </p>
                </div>
                <div className="flex justify-between items-center border-b py-3">
                  <span className="font-semibold">Wind Direction</span>
                  <p>{calculateDirection(weatherDaily.wind_deg).fullName}</p>
                </div>
                <div className="flex justify-between items-center border-b py-3">
                  <span className="font-semibold">Humidity</span>
                  <p>{weatherDaily.humidity}%</p>
                </div>
                <div className="flex justify-between items-center border-b py-3">
                  <span className="font-semibold">Visibility</span>
                  {/* <p>{weatherDaily.visibility} Meters</p> */}
                </div>
                <div className="flex justify-between items-center border-b py-3">
                  <span className="font-semibold">Dew Point</span>
                  <p>{weatherDaily.dew_point} °</p>
                </div>
                <div className="flex justify-between items-center border-b py-3">
                  <span className="font-semibold">UV Index</span>
                  <p>{weatherDaily.uvi} UV Index</p>
                </div>
                <div className="flex justify-between items-center border-b py-3">
                  <span className="font-semibold">Clouds</span>
                  <p>{weatherDaily.clouds}% Cloudy</p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default WeatherDailyCard;
