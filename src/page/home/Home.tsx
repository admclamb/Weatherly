import Container from "@/layout/container/Container";
import Hero from "@/components/hero/Hero";
import LayoutSolid from "@/layout/layout-solid/LayoutSolid";

const Home = () => {
  return (
    <LayoutSolid>
      <div data-testid="home">
        <Hero />
        <Container className="px-3 lg:px-0 py-5 grid-cols-9 grid gap-5">
          <section className="col-span-9 lg:col-span-6 flex flex-col gap-5"></section>
          <aside className="col-span-3 "></aside>
        </Container>
      </div>
    </LayoutSolid>
  );
};

export default Home;
