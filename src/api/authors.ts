import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { preparedBaseQueryFn } from 'utils/preparedBaseQuery'
import { Author } from 'types/api'

export const AUTHORS_TYPE = 'AUTHORS_TYPE'

export const AuthorsQueries = createApi({
  reducerPath: AUTHORS_TYPE,
  baseQuery: preparedBaseQueryFn(),
  endpoints: build => ({
    getAuthors: build.query<Author[], void>({
      query: () => ({
        url: '/authors',
        method: 'GET',
      }),
    }),
    getAuthorById: build.query<Author, number | string>({
      query: id => ({
        url: `/authors/${id}`,
        method: 'GET',
      }),
    }),
  }),
})
