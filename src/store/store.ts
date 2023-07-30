import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { PostsQueries, AuthorsQueries } from 'api'

const rootReducer = combineReducers({
  [PostsQueries.reducerPath]: PostsQueries.reducer,
  [AuthorsQueries.reducerPath]: AuthorsQueries.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    PostsQueries.middleware,
    AuthorsQueries.middleware,
  ],
})
