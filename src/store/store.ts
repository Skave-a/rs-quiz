import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import cardsReducer from './reducers/cardSlice';
// import testsReducer from './reducers/testsSlice';

// import { booksApi } from './booksApi';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cards: cardsReducer,
    // tests: testsReducer,
    // [booksApi.reducerPath]: booksApi.reducer,
  },
  // middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(booksApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
