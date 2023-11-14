import { configureStore } from '@reduxjs/toolkit';
import stateReducer from './planetSlice';
export const store = configureStore({
  reducer: { state: stateReducer },
});
