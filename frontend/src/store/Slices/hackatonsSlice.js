import { createSlice } from '@reduxjs/toolkit';

const initialState = [{}];

export const hackatonsSlice = createSlice({
  name: 'hackatons',
  initialState,
  reducers: {
    setHackatons: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setHackatons } = hackatonsSlice.actions;

export default hackatonsSlice.reducer;
