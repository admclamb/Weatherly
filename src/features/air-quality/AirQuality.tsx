import { Card } from "@/components/ui/card";
import { useAirQuality } from "./AirQuality.hooks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const calculateAirQuality = (
  aqi: 1 | 2 | 3 | 4 | 5
): { name: string; color: string } => {
  const qualites = {
    1: {
      name: "Good",
      color: "text-sky-700",
    },
    2: {
      name: "Fair",
      color: "text-green-700",
    },
    3: {
      name: "Moderate",
      color: "text-yellow-700",
    },
    4: {
      name: "Poor",
      color: "text-red-700",
    },
    5: {
      name: "Very Poor",
      color: "text-red-700",
    },
    unavailable: {
      name: "Unavailable",
      color: "",
    },
  };

  return qualites[aqi] ?? qualites.unavailable;
};

const AirQuality = () => {
  const { airQuality, location } = useAirQuality();

  if (!location || !airQuality) {
    return null;
  }

  const currentAirQuality = airQuality.list[0];
  return (
    <Card className="p-3">
      <h3 className="font-semibold uppercase text-stone-500">Air Quality</h3>
      <p
        className={`text-2xl text-center py-5 ${
          calculateAirQuality(currentAirQuality.main.aqi).color
        }`}
      >
        {calculateAirQuality(currentAirQuality.main.aqi).name}
      </p>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <span className="font-semibold">More Info</span>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-5">
            <p className="text-stone-500">
              Air quality consists of polluting gases, such as Carbon monoxide
              (CO), Nitrogen monoxide (NO), Nitrogen dioxide (NO2), Ozone (O3),
              Sulphur dioxide (SO2), Ammonia (NH3), and particulates (PM2.5 and
              PM10).{" "}
            </p>
            <div className="grid grid-cols-2 gap-x-3 gap-y-4">
              <div>
                <p className="font-semibold">SO2</p>
                <p className="text-stone-500">
                  {currentAirQuality.components.so2}
                </p>
              </div>
              <div>
                <p className="font-semibold">NO2</p>
                <p className="text-stone-500">
                  {currentAirQuality.components.no2}
                </p>
              </div>
              <div>
                <p className="font-semibold">PM10</p>
                <p className="text-stone-500">
                  {currentAirQuality.components.pm10}
                </p>
              </div>
              <div>
                <p className="font-semibold">PM2.5</p>
                <p className="text-stone-500">
                  {currentAirQuality.components.pm2_5}
                </p>
              </div>
              <div>
                <p className="font-semibold">O3</p>
                <p className="text-stone-500">
                  {currentAirQuality.components.o3}
                </p>
              </div>
              <div>
                <p className="font-semibold">CO</p>
                <p className="text-stone-500">
                  {currentAirQuality.components.co}
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default AirQuality;
