import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import cardsReducer from './reducers/cardSlice';
import testsReducer from './reducers/testsSlice';
import usersReducer from './reducers/userSlice';
import questionsReducer from './reducers/questionSlice';
import answerReducer from './reducers/answerSlice';
import { registrationApi } from './api/RegistrationApi';
import { authApi } from './api/AuthApi';
import { questionApi } from './api/QuestionApi';
import { answerApi } from './api/AnswerApi';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cards: cardsReducer,
    tests: testsReducer,
    users: usersReducer,
    questions: questionsReducer,
    answers: answerReducer,

    [registrationApi.reducerPath]: registrationApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [questionApi.reducerPath]: questionApi.reducer,
    [answerApi.reducerPath]: answerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      registrationApi.middleware,
      authApi.middleware,
      questionApi.middleware,
      answerApi.middleware,
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
