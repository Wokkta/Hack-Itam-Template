import { configureStore } from '@reduxjs/toolkit';
import hackatonsReducer from './Slices/hackatonsSlice';

export const store = configureStore({
  reducer: {
    hackatons: hackatonsReducer,
  },
});
