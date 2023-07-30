import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { PostsQueries, AuthorsQueries } from 'api'
import { userSlice, filtersSlice } from './slices'
import { isDev } from 'configs/env'

const rootReducer = combineReducers({
  user: userSlice.reducer,
  filter: filtersSlice.reducer,
  [PostsQueries.reducerPath]: PostsQueries.reducer,
  [AuthorsQueries.reducerPath]: AuthorsQueries.reducer,
})

export const store = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware(),
      PostsQueries.middleware,
      AuthorsQueries.middleware,
    ],
    devTools: isDev,
  })
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
