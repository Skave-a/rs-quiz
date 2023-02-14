import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import cardsReducer from './reducers/cardSlice';
import testsReducer from './reducers/testsSlice';
import usersReducer from './reducers/userSlice';
import questionsReducer from './reducers/questionSlice';
import { registrationApi } from './api/RegistrationApi';
import { authApi } from './api/AuthApi';
import { questionApi } from './api/QuestionApi';

// import { booksApi } from './booksApi';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cards: cardsReducer,
    tests: testsReducer,
    users: usersReducer,
    questions: questionsReducer,
    // [booksApi.reducerPath]: booksApi.reducer,
    [registrationApi.reducerPath]: registrationApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [questionApi.reducerPath]: questionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      registrationApi.middleware,
      authApi.middleware,
      questionApi.middleware,
    ]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
