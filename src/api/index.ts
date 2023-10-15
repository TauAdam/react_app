import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiEndpoint } from '../types';

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ApiEndpoint.characters,
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (query) => `/?name=${query}`,
    }),
  }),
});
export const { useGetCharactersQuery } = rickAndMortyApi;
