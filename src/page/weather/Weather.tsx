import Layout from "@/layout/Layout";
import { useWeatherHooks } from "./Weather.hooks";
import { Card } from "@/components/ui/card";
import Container from "@/layout/container/Container";
import ErrorAlert from "@/errors/ErrorAlert";

const Weather = () => {
  const { weather, error } = useWeatherHooks();
  console.log(weather);
  return (
    <Layout>
      <Container className="py-5 px-2 grid grid-cols-12 gap-5">
        <div className="flex flex-col gap-5 col-span-12 md:col-span-9">
          <ErrorAlert error={error} />
          <Card>TESTING</Card>
          <Card>TESTING</Card>
          <Card>TESTING</Card>
        </div>
        <aside className="col-span-12 md:col-span-3 flex flex-col gap-5">
          <Card>TESTING</Card>
        </aside>
      </Container>
    </Layout>
  );
};

export default Weather;
