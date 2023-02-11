import { createApi } from '@reduxjs/toolkit/query/react';
import { customFetchBase } from '.';
import { LoginInput } from '../../components/utils/types';
import { setIsAuth, setToken } from '../reducers/userSlice';

type IToken = {
  token: string;
};

export const registrationApi = createApi({
  reducerPath: 'registrationApi',
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    registrationUser: builder.mutation<IToken, LoginInput>({
      query(data) {
        return {
          url: 'auth/registration',
          method: 'POST',
          body: data,
          //credentials: 'include',
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setToken(data.token));
          dispatch(setIsAuth(true));
          //console.log(`data =>>>>>>>>`, data.token);
          //localStorage.setItem('token', data.token);
        } catch (error) {
          console.log(`error =>>>>>>>>>>`, error);
        }
      },
    }),
  }),
});

export const { useRegistrationUserMutation } = registrationApi;
