import { SET_SORTING, TOGGLE_FILTER } from './actionTypes'

export const setSorting = (sorting) => ({
  type: SET_SORTING,
  payload: {
    sorting,
  },
})

export const setVisibilityFilters = (filter) => ({
  type: TOGGLE_FILTER,
  payload: {
    filter,
  },
})
