import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, API_LINK, TITLES_BOOKS } from '../components/utils/constants';

export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({baseUrl: `${API_LINK}/v1/volumes?q=${TITLES_BOOKS.bestsellers}&key=${API_KEY}`}),
    endpoints: (build) => ({
        getBooks: build.query({
            query: (maxResults = '10') => `${maxResults && `&maxResults=${maxResults}`}`,
        })
    })
});

export const { useGetBooksQuery } = booksApi;