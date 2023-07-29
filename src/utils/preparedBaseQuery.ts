import { BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/dist/query'
import { API_URL } from 'configs/api'

export const preparedBaseQueryFn = (apiUrl: string = API_URL): BaseQueryFn =>
  fetchBaseQuery({
    baseUrl: apiUrl,
    mode: 'cors',
  })
