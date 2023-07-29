import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { PostsQueries } from 'api'

const rootReducer = combineReducers({
  [PostsQueries.reducerPath]: PostsQueries.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), PostsQueries.middleware],
})
