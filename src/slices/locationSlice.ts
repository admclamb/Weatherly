import { LocationModel } from "@/models/LocationModel";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface LocationState {
  location: LocationModel | null;
}

const initialState: LocationState = {
  location: null,
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<LocationModel>) => {
      state.location = action.payload;
    },
  },
});

export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;
