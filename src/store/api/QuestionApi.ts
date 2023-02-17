import { createApi } from '@reduxjs/toolkit/query/react';
import { customFetchBase } from '.';

export interface IQuestionCerate {
  id: number;
  image: string;
  description: string;
  userId: number;
}

export const questionApi = createApi({
  reducerPath: 'questionApi',
  baseQuery: customFetchBase,
  tagTypes: ['Questions'],
  endpoints: (build) => ({
    getQuestions: build.query<IQuestionCerate[], void>({
      query: () => ({ url: 'questions', method: 'GET' }),
      transformResponse: (response: IQuestionCerate[]) => {
        const modQuestions = response.map((item) => {
          return {
            id: item.id,
            image: item.image,
            description: item.description,
            userId: item.userId,
          };
        });
        return modQuestions;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Questions' as const, id })),
              { type: 'Questions', id: 'LIST' },
            ]
          : [{ type: 'Questions', id: 'LIST' }],
      /* async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.error(`response getQuestions =>>>>>>>>>>>>>>>>`, data);
          if (data.length) dispatch(setQuestions(data));
        } catch (error) {
          console.log(`error question response:`, error);
        }
      }, */
    }),

    createQuestion: build.mutation<IQuestionCerate[], IQuestionCerate[]>({
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
      invalidatesTags: [{ type: 'Questions', id: 'LIST' }],
    }),
  }),
});

export const { useCreateQuestionMutation, useGetQuestionsQuery } = questionApi;
