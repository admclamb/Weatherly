import { combineReducers, configureStore } from "@reduxjs/toolkit";
import unitReducer from "../slices/unitSlice";
import locationReducer from "../slices/locationSlice";

const rootReducer = combineReducers({
  units: unitReducer,
  location: locationReducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
