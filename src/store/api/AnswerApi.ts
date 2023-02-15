import { createApi } from '@reduxjs/toolkit/query/react';
import { customFetchBase } from '.';
import { setAnswers } from '../reducers/answerSlice';
import { addQuestion, setQuestions } from '../reducers/questionSlice';
import { logout, setToken, setIsAuth } from '../reducers/userSlice';

export interface IAnswerCreate {
  id: string;
  title: string;
  isCorrect: boolean;
  userId: number;
  questionId: number;
}

export const answerApi = createApi({
  reducerPath: 'answerApi',
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    createAnswer: builder.mutation<IAnswerCreate[], IAnswerCreate[]>({
      query(data) {
        return {
          url: 'answers/create',
          method: 'POST',
          body: data,
          //credentials: 'include',
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(`response answer =>>>>>>>>>>>>>>>>`, data);
          if (data) {
            //dispatch(setAnswers(data));
          }
        } catch (error) {
          console.log(`error answer response:`, error);
        }
      },
    }),
    /* logoutUser: builder.mutation<void, void>({
      query() {
        return {
          url: 'auth/logout',
          credentials: 'include',
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logout());
        } catch (error) {}
      },
    }), */
  }),
});

export const { useCreateAnswerMutation } = answerApi;
