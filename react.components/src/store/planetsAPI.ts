import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PlanetList } from '../assets/types';

export const planetAPI = createApi({
  reducerPath: 'planetAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://swapi.dev/api/',
  }),
  endpoints: (build) => ({
    getPlanets: build.query<PlanetList, ''>({
      query: () => ({
        url: 'planets',
      }),
    }),
    changePage: build.query<PlanetList, string>({
      query: (queryString: string) => ({
        url: `${queryString}`,
      }),
    }),
    doSearch: build.query({
      query: (queryString: string) => ({
        url: `https://swapi.dev/api/planets/?search=${queryString}`,
      }),
    }),
  }),
});

export const {
  useGetPlanetsQuery,
  useLazyChangePageQuery,
  useDoSearchQuery,
  useLazyDoSearchQuery,
} = planetAPI;
