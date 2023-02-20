import { createApi } from '@reduxjs/toolkit/query/react';
import { customFetchBase } from '.';

export interface IAnswerCreate {
  id: number;
  title: string;
  isCorrect: boolean;
  userId: number;
  questionId: number;
}
export interface IAnswerCreateSend {
  id?: number;
  title: string;
  isCorrect: boolean;
  userId: number;
  questionId: number;
}

export const answerApi = createApi({
  reducerPath: 'answerApi',
  baseQuery: customFetchBase,
  tagTypes: ['Answers'],
  endpoints: (build) => ({
    getAnswers: build.query<IAnswerCreate[], void>({
      query: () => ({ url: 'answers', method: 'GET' }),
      transformResponse: (response: IAnswerCreate[]) => {
        const modQuestions = response.map((item) => {
          return {
            id: item.id,
            title: item.title,
            isCorrect: item.isCorrect,
            userId: item.userId,
            questionId: item.questionId,
          };
        });
        return modQuestions;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Answers' as const, id })),
              { type: 'Answers', id: 'LIST' },
            ]
          : [{ type: 'Answers', id: 'LIST' }],
      /* async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.error(`response getAnswer =>>>>>>>>>>>>>>>>`, data);
          if (data.length) dispatch(setAnswers(data));
        } catch (error) {}
      }, */
    }),

    createAnswer: build.mutation<IAnswerCreate, IAnswerCreateSend>({
      query(data) {
        return {
          url: 'answers/create/one',
          method: 'POST',
          body: data,
          //credentials: 'include',
        };
      },
      /* async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(`response answer =>>>>>>>>>>>>>>>>`, data);
          if (data) {
            //dispatch(setAnswers(data));
          }
        } catch (error) {
          console.log(`error answer response:`, error);
        }
      }, */
      invalidatesTags: [{ type: 'Answers', id: 'LIST' }],
    }),

    deleteAnswer: build.mutation<number, number>({
      query(id) {
        return {
          url: `answers/delete/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: [{ type: 'Answers', id: 'LIST' }],
    }),
  }),
});

export const { useCreateAnswerMutation, useGetAnswersQuery, useDeleteAnswerMutation } = answerApi;
