import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query';
import { RootState } from '../store';

export interface IGenericResponse {
  status: string;
  message: string;
}

export const baseUrl = `${process.env.REACT_APP_SERVER_ENDPOINT}/`;
export const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).users.token;

    if (!headers.has('authorization') && token) {
      //console.log(`test token =>>>>>>>>>>`, token);
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  return await baseQuery(args, api, extraOptions);
};
