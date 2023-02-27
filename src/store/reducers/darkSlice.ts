import { createSlice } from '@reduxjs/toolkit';

export interface IDarkMode {
  darkMode: boolean;
}

export const initialState: IDarkMode = {
  darkMode: false,
};

export const darkSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    switchMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { switchMode } = darkSlice.actions;

export default darkSlice.reducer;
