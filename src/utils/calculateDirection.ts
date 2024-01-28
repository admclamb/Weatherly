export const calculateDirection = (
  degree: number
): { abbreviation: string; fullName: string } => {
  if (degree < 0 || degree > 360) {
    return { abbreviation: "Invalid", fullName: "Invalid degree" };
  }

  const directions = [
    { abbreviation: "N", fullName: "North" },
    { abbreviation: "NE", fullName: "Northeast" },
    { abbreviation: "E", fullName: "East" },
    { abbreviation: "SE", fullName: "Southeast" },
    { abbreviation: "S", fullName: "South" },
    { abbreviation: "SW", fullName: "Southwest" },
    { abbreviation: "W", fullName: "West" },
    { abbreviation: "NW", fullName: "Northwest" },
  ];

  const index = Math.round((degree % 360) / 45) % 8;
  return directions[index];
};
