import { WeatherModel } from "@/models/WeatherModel";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface WeatherState {
  weather: WeatherModel | null;
}

const initialState: WeatherState = {
  weather: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather: (state, action: PayloadAction<WeatherModel | null>) => {
      state.weather = action.payload;
    },
  },
});

export const { setWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
