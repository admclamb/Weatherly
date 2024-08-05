import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";
import { buttonVariants } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <div
        data-testid="not-found"
        className="flex flex-col justify-center flex-col gap-5 items-center h-80"
      >
        <h3 className="text-7xl font-bold">404</h3>
        <h4 className="text-foreground-muted text-lg font-semibold">
          The page you are looking for cannot be found.
        </h4>
        <Link to="/" className={buttonVariants({ variant: "default" })}>
          Homepage
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
