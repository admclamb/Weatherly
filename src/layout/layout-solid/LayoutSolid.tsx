import { ReactNode } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

type Props = {
  children?: ReactNode;
  bgColor?: string;
  mainClassName?: string;
  headerColor?: string;
};

const LayoutSolid = ({
  children,
  bgColor = "bg-white dark:bg-stone-950 dark:text-white",
  mainClassName = "",
}: Props) => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-y-[unset]">
      <header>
        <Navbar bgColor={bgColor} position="sticky top-0 z-50" />
      </header>

      <main className={`grow ${bgColor} ${mainClassName}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSolid;
