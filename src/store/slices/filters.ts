import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: { clear: boolean } = {
  clear: false,
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    clearFilter(state, action: PayloadAction<boolean>) {
      state.clear = action.payload
    },
  },
})

export const { clearFilter } = filtersSlice.actions
export default filtersSlice.reducer
