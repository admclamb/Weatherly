import { Card } from "@/components/ui/card";
import { useWeatherHourly } from "./WeatherHourly.hooks";

const WeatherHourly = () => {
  const { weather, error } = useWeatherHourly();

  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="flex flex-col gap-5 col-span-12 md:col-span-9">
        <p>BOI</p>
      </div>
      <aside className="col-span-12 md:col-span-3 flex flex-col gap-5">
        <Card>TESTING</Card>
      </aside>
    </div>
  );
};

export default WeatherHourly;
