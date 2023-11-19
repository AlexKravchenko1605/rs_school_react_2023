import { configureStore } from '@reduxjs/toolkit';
import stateReducer from './stateSlice';
import { planetAPI } from './planetsAPI';
export const store = configureStore({
  reducer: { state: stateReducer, [planetAPI.reducerPath]: planetAPI.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(planetAPI.middleware),
});
