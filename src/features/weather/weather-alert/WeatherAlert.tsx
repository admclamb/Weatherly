import { Alert } from "@/components/ui/alert";
import { WeatherModel } from "@/models/WeatherModel";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

type Props = {
  weather?: WeatherModel | null;
};

const WeatherAlert = ({ weather }: Props) => {
  if (!weather?.alerts) {
    return null;
  }

  const alert = weather.alerts[0];

  return (
    <Alert className="flex flex-col gap-3" variant="destructive">
      <div className="flex items-center gap-3">
        <h4 className="text-xl font-semibold">{alert.event}</h4>
        <p className="text-sm font-semibold">
          In effect from: {dayjs.unix(alert.start).format("ddd, hh:MM a")} to{" "}
          {dayjs.unix(alert.end).format("ddd, hh:MM a")}
        </p>
        <Link
          to="alerts"
          className="hover:underline underline-offset-2 ml-auto text-sm"
        >
          Learn More
        </Link>
      </div>

      <p className="truncate capitalize">{alert.description}</p>
    </Alert>
  );
};

export default WeatherAlert;
