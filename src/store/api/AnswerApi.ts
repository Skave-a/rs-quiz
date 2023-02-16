import { createApi } from '@reduxjs/toolkit/query/react';
import { customFetchBase } from '.';
import { setAnswers } from '../reducers/answerSlice';

export interface IAnswerCreate {
  id: number;
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
    getAnswers: builder.mutation<IAnswerCreate[], void>({
      query() {
        return {
          url: 'answers',
          method: 'GET',
          //credentials: 'include',
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.error(`response getAnswer =>>>>>>>>>>>>>>>>`, data);
          dispatch(setAnswers(data));
        } catch (error) {}
      },
    }),
  }),
});

export const { useCreateAnswerMutation, useGetAnswersMutation } = answerApi;
