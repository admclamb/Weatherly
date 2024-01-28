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
import { WeatherHourlyModel } from "@/models/WeatherHourlyModel";
import { calculateDirection } from "@/utils/calculateDirection";
import dayjs from "dayjs";
import { CloudRainWind } from "lucide-react";

type Props = {
  weatherHourly: WeatherHourlyModel;
};

const WeatherHourlyCard = ({ weatherHourly }: Props) => {
  const { units } = useAppSelector((state) => state.units);
  console.log(weatherHourly);
  return (
    <Card className="p-3">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex items-center gap-5">
              <p className="font-semibold">
                {dayjs.unix(weatherHourly.dt).format("h:mm a")}
              </p>
              <div className="flex items-center gap-0">
                <Icon
                  icon={weatherHourly.weather[0].icon}
                  description={weatherHourly.weather[0].description}
                  className="w-20"
                />
                <p className="text-4xl font-semibold relative">
                  {Math.floor(weatherHourly.temp)}°
                  <span className="absolute right-0 -bottom-1 text-lg text-stone-500">
                    {units === Units.IMPERIAL ? "F" : "C"}
                  </span>
                </p>
              </div>
              <p>{weatherHourly.weather[0].description}</p>
              <div className="ml-auto">
                <p className="text-stone-500 flex items-center gap-3">
                  <CloudRainWind size={18} />
                  <span>{(weatherHourly.pop * 100).toFixed(0)}%</span>
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="grid grid-cols-2 gap-5">
            <div className="flex justify-between items-center border-b py-3">
              <span className="font-semibold">Wind</span>
              <p>
                {Math.floor(weatherHourly.wind_speed)}{" "}
                {units === Units.IMPERIAL ? "MPH" : "KPH"}
              </p>
            </div>
            <div className="flex justify-between items-center border-b py-3">
              <span className="font-semibold">Wind Direction</span>
              <p>{calculateDirection(weatherHourly.wind_deg).fullName}</p>
            </div>
            <div className="flex justify-between items-center border-b py-3">
              <span className="font-semibold">Humidity</span>
              <p>{weatherHourly.humidity}%</p>
            </div>
            <div className="flex justify-between items-center border-b py-3">
              <span className="font-semibold">Visibility</span>
              <p>{weatherHourly.visibility} Meters</p>
            </div>
            <div className="flex justify-between items-center border-b py-3">
              <span className="font-semibold">Dew Point</span>
              <p>
                {weatherHourly.dew_point} °
                {units === Units.IMPERIAL ? "F" : "C"}
              </p>
            </div>
            <div className="flex justify-between items-center border-b py-3">
              <span className="font-semibold">UV Index</span>
              <p>{weatherHourly.uvi} UV Index</p>
            </div>
            <div className="flex justify-between items-center border-b py-3">
              <span className="font-semibold">Clouds</span>
              <p>{weatherHourly.clouds}% Cloudy</p>
            </div>
            {weatherHourly?.snow ? (
              <div className="flex justify-between items-center border-b py-3">
                <span className="font-semibold">Snow</span>
                <p>{weatherHourly?.snow} mm/h</p>
              </div>
            ) : null}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default WeatherHourlyCard;
