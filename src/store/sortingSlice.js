import { createSlice } from '@reduxjs/toolkit'

const sortingSlice = createSlice({
  name: 'sorting',

  initialState: {
    sorting: 'cheapest',
  },

  selectors: {
    selectSorting: (state) => state.sorting,
  },

  reducers: (create) => ({
    setSorting: create.reducer((state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.sorting = action.payload.sorting
    }),
  }),
})

export const { setSorting } = sortingSlice.actions

export const { selectSorting } = sortingSlice.selectors

export default sortingSlice
