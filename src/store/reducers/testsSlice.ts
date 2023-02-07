import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TestData {
  id: string | undefined;
  score: number;
  date: string;
  passed: boolean;
  failed: boolean;
}

export interface CardList {
  list: TestData[];
}

export const initialState: CardList = {
  list: [],
};

export const testsSlice = createSlice({
  name: 'tests',
  initialState,
  reducers: {
    addTestReduser: (state, action: PayloadAction<TestData>) => {
      state.list.push(action.payload);
    },
  },
});

export const { addTestReduser } = testsSlice.actions;

export default testsSlice.reducer;
