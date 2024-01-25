type Props = {
  children?: React.ReactNode;
  className?: string;
  margin?: string;
};

const Container = ({ children, className = "", margin = "mx-auto" }: Props) => {
  return (
    <div className={`${className && className + " "}max-w-5xl ${margin}`}>
      {children}
    </div>
  );
};

export default Container;
