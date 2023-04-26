import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IUnsplash } from 'types/Unsplash';

export const unsplashAPI = createApi({
  reducerPath: 'unsplashAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.unsplash.com' }),
  tagTypes: ['Photo'],
  endpoints: (build) => ({
    searchPhotos: build.query<IUnsplash[], string>({
      query: (query) => ({
        url: `/photos/random`,
        params: {
          orientation: 'landscape',
          query: query,
          count: 24,
          client_id: 'Y5Kt-xSrYLtKp5pzuFe7EXHOmSuOrtx11nVTeUZX2MQ',
        },
      }),
      providesTags: () => ['Photo'],
    }),
    getPhoto: build.query<IUnsplash, string>({
      query: (id) => ({
        url: `/photos/${id}`,
        params: {
          client_id: 'Y5Kt-xSrYLtKp5pzuFe7EXHOmSuOrtx11nVTeUZX2MQ',
        },
      }),
    }),
  }),
});
