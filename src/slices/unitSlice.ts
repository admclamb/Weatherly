import { Units } from "@/models/Units";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UnitState {
  units: Units;
}

const initialState: UnitState = {
  units: Units.IMPERIAL,
};

export const unitSlice = createSlice({
  name: "units",
  initialState,
  reducers: {
    setUnits: (state, action: PayloadAction<Units>) => {
      state.units = action.payload;
    },
  },
});

export const { setUnits } = unitSlice.actions;

export default unitSlice.reducer;
