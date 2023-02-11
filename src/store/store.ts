import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import cardsReducer from './reducers/cardSlice';
import testsReducer from './reducers/testsSlice';
import usersReducer from './reducers/userSlice';
import { registrationApi } from './api/RegistrationApi';
import { authApi } from './api/AuthApi';

// import { booksApi } from './booksApi';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cards: cardsReducer,
    tests: testsReducer,
    users: usersReducer,
    // [booksApi.reducerPath]: booksApi.reducer,
    [registrationApi.reducerPath]: registrationApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([registrationApi.middleware, authApi.middleware]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
