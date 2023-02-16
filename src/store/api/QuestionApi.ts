import { createApi } from '@reduxjs/toolkit/query/react';
import { customFetchBase } from '.';
import { setQuestions } from '../reducers/questionSlice';

export interface IQuestionCerate {
  id: number;
  image: string;
  description: string;
  userId: number;
}

export const questionApi = createApi({
  reducerPath: 'questionApi',
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    createQuestion: builder.mutation<IQuestionCerate[], IQuestionCerate[]>({
      query(data) {
        return {
          url: 'questions/create',
          method: 'POST',
          body: data,
          //credentials: 'include',
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(`response questions =>>>>>>>>>>>>>>>>`, data);
          if (data) {
            //dispatch(setQuestions(data));
          }
        } catch (error) {
          console.log(`error question response:`, error);
        }
      },
    }),
    getQuestions: builder.mutation<IQuestionCerate[], void>({
      query() {
        return {
          url: 'questions',
          method: 'GET',
          //credentials: 'include',
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.error(`response getQuestions =>>>>>>>>>>>>>>>>`, data);
          dispatch(setQuestions(data));
        } catch (error) {
          console.log(`error question response:`, error);
        }
      },
    }),
  }),
});

export const { useCreateQuestionMutation, useGetQuestionsMutation } = questionApi;
