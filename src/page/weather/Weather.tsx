import Layout from "@/layout/Layout";
import { useWeatherHooks } from "./Weather.hooks";
import { Card } from "@/components/ui/card";
import Container from "@/layout/container/Container";

const Weather = () => {
  const {} = useWeatherHooks();
  return (
    <Layout>
      <Container>
        <div className="py-5 px-2 flex flex-col gap-5">
          <Card>TESTING</Card>
          <Card>TESTING</Card>
          <Card>TESTING</Card>
        </div>
      </Container>
    </Layout>
  );
};

export default Weather;
