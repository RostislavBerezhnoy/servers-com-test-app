import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { preparedBaseQueryFn } from 'utils/preparedBaseQuery'
import { Filters, DEFAULT_FILTERS } from 'hooks/useFilter'
import { resetFilters } from 'store/slices'
import { Post, CreatePost } from 'types/api'

export const POSTS_TYPE = 'POSTS_TYPE'
export const POSTS_TYPE_GET_ALL_POSTS = 'POSTS_TYPE_GET_ALL_POSTS'

export const PostsQueries = createApi({
  reducerPath: POSTS_TYPE,
  baseQuery: preparedBaseQueryFn(),
  tagTypes: [POSTS_TYPE_GET_ALL_POSTS],
  endpoints: build => ({
    getPosts: build.query<Post[], Filters>({
      query: ({ page, rowsPerPage, search, author, date }) => ({
        url: '/posts',
        method: 'GET',
        params: {
          _limit: rowsPerPage,
          _page: page,
          authorId: author,
          date_like: date,
          text_like: search,
        },
      }),
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems, otherArgs) => {
        const {
          arg: { page = DEFAULT_FILTERS.defaultPage, ...rest },
        } = otherArgs

        const argsArray = Object.keys(rest).map(el => rest[el])

        const fullResponse = page === DEFAULT_FILTERS.defaultPage && newItems.length !== 0
        const emptyResponse = page === DEFAULT_FILTERS.defaultPage && newItems.length === 0

        if ((!argsArray.includes(false) && emptyResponse) || emptyResponse) {
          currentCache.splice(0, currentCache.length)
        } else if ((!argsArray.includes(false) && fullResponse) || fullResponse) {
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
    createPost: build.mutation<Post, CreatePost>({
      query: body => ({
        url: '/posts',
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled
        dispatch(resetFilters(true))
      },
    }),
  }),
})
