import { useTheme } from "@/context/themeProvider";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { Units } from "@/models/Units";
import { setUnits } from "@/slices/unitSlice";

export const useSettings = () => {
  const { units } = useAppSelector((state) => state.units);
  const dispatch = useAppDispatch();
  const { theme, setTheme } = useTheme();

  const changeUnits = (unit: Units) => {
    dispatch(setUnits(unit));
  };

  const changeTheme = (value: "light" | "dark" | "system") => {
    console.log("VALUE: ", value);
    setTheme(value);
  };

  return { units, changeUnits, theme, changeTheme };
};
