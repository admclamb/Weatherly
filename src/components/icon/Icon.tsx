type Props = {
  icon: string;
  description: string;
  size?: string;
  className?: string;
};

const Icon = ({ icon, description, size = "2x", className = "" }: Props) => {
  return (
    icon && (
      <img
        className={className}
        src={`https://openweathermap.org/img/wn/${icon}@${size}.png`}
        alt={description}
      />
    )
  );
};

export default Icon;
