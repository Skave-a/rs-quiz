import { createApi } from '@reduxjs/toolkit/query/react';
import { customFetchBase } from '.';
import { LoginInput } from '../../components/utils/types';
import { logout, setToken, setIsAuth } from '../reducers/userSlice';
import { IToken } from './RegistrationApi';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    loginUser: builder.mutation<IToken, LoginInput>({
      query(data) {
        return {
          url: 'auth/login',
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
        } catch (error) {
          console.log(`error auth =>>>>>>>>>>>>>`, error);
        }
      },
    }),
    logoutUser: builder.mutation<void, void>({
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
    }),
  }),
});

export const { useLoginUserMutation, useLogoutUserMutation } = authApi;
