import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    filter: 'SHOW_ALL',
    label: 'Все',
    checked: true,
    show: 'all',
  },
  {
    filter: 'WITHOUT_TRANSFERS',
    label: 'Без пересадок',
    checked: true,
    show: 0,
  },
  {
    filter: 'ONE_TRANSFER',
    label: '1 пересадка',
    checked: true,
    show: 1,
  },
  {
    filter: 'TWO_TRANSFERS',
    label: '2 пересадки',
    checked: true,
    show: 2,
  },
  {
    filter: 'THREE_TRANSFERS',
    label: '3 пересадки',
    checked: true,
    show: 3,
  },
]

const filterSlice = createSlice({
  name: 'filter',

  initialState,

  selectors: {
    selectFilters: (state) => state,
  },

  reducers: (create) => ({
    toggleFilter: create.reducer((state, action) => {
      if (action.payload.filter === 'SHOW_ALL') {
        if (!state[0].checked) {
          return state.map((filter) => ({ ...filter, checked: true }))
        }

        return state.map((filter) => ({ ...filter, checked: false }))
      }

      if (action.payload.filter !== 'SHOW_ALL') {
        if (state[0].checked) {
          return state.map((filter) => {
            if (filter === state[0]) {
              return {
                ...filter,
                checked: false,
              }
            }

            if (filter.filter === action.payload.filter) {
              return {
                ...filter,
                checked: !filter.checked,
              }
            }

            return filter
          })
        }

        if (!state[0].checked) {
          const newState = state.map((filter) =>
            filter.filter === action.payload.filter ? { ...filter, checked: !filter.checked } : filter
          )
          const allChecked = newState.slice(1).filter((f) => f.checked).length === 4

          if (allChecked) {
            return newState.map((filter) => (filter === newState[0] ? { ...filter, checked: true } : filter))
          }

          return newState
        }
      }

      return state
    }),
  }),
})

export const { toggleFilter } = filterSlice.actions

export const { selectFilters } = filterSlice.selectors

export default filterSlice
