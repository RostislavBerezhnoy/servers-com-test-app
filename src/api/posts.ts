import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { preparedBaseQueryFn } from 'utils/preparedBaseQuery'
import { Post } from 'types/api'
import { Filters } from 'hooks/useFilter'

export const POSTS_TYPE = 'POSTS_TYPE'
export const POSTS_TYPE_GET_ALL_POSTS = 'POSTS_TYPE_GET_ALL_POSTS'

export const PostsQueries = createApi({
  reducerPath: POSTS_TYPE,
  baseQuery: preparedBaseQueryFn(),
  tagTypes: [POSTS_TYPE_GET_ALL_POSTS],
  endpoints: build => ({
    getPosts: build.query<Post[], Filters>({
      query: ({ page, rowsPerPage, search }) => ({
        url: `/posts?_limit=${rowsPerPage}&_page=${page}&text_like=${search}`,
        method: 'GET',
      }),
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems, otherArgs) => {
        const {
          arg: { search },
        } = otherArgs

        if (search) {
          currentCache.splice(0, currentCache.length)
          currentCache.push(...newItems)
        } else {
          currentCache.push(...newItems)
        }
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
      providesTags: [POSTS_TYPE_GET_ALL_POSTS],
    }),
  }),
})
