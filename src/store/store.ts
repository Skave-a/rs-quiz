import { configureStore } from '@reduxjs/toolkit';
import { booksApi } from './booksApi';

export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(booksApi.middleware),
});