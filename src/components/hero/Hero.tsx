import WeatherSearch from "@/features/weather/weather-search/WeatherSearch";
import Container from "@/layout/container/Container";

const Hero = () => {
  return (
    <section
      className="h-[40vh] bg-black bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(${"/hero.jpg"})`,
      }}
    >
      <div className="h-full  backdrop-blur backdrop-brightness-50">
        <Container className="flex flex-col justify-center h-full -mt-5 p-2">
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Get Your Local Weather and News
              </h2>
              <p className="text-stone-400">
                Better understand your local forecast
              </p>
            </div>
            <WeatherSearch />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
