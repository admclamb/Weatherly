import { Card } from "@/components/ui/card";
import { WeatherModel } from "@/models/WeatherModel";

type Props = {
  weather: WeatherModel;
};

const WeatherHourly = ({ weather }: Props) => {
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
