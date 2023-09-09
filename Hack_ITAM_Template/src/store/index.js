import { configureStore } from '@reduxjs/toolkit';
import hackatonsReducer from './Slices/hackatonsSlice';
import userReducer from './Slices/userSlice';
export const store = configureStore({
  reducer: {
    hackatons: hackatonsReducer,
    user: userReducer,
  },
});
