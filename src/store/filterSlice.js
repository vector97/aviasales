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
      const { filter } = action.payload

      if (filter === 'SHOW_ALL') {
        return state.map((f) => ({ ...f, checked: !state[0].checked }))
      }

      if (filter !== 'SHOW_ALL') {
        if (state[0].checked) {
          return state.map((f) => {
            if (f === state[0]) {
              return { ...f, checked: false }
            }

            if (f.filter === filter) {
              return { ...f, checked: !f.checked }
            }

            return f
          })
        }

        if (!state[0].checked) {
          const updatedState = state.map((f) => (f.filter === filter ? { ...f, checked: !f.checked } : f))
          const allChecked = updatedState.slice(1).filter((f) => f.checked).length === 4

          if (allChecked) {
            return updatedState.map((f) => (f === updatedState[0] ? { ...f, checked: true } : f))
          }

          return updatedState
        }
      }

      return state
    }),
  }),
})

export const { toggleFilter } = filterSlice.actions

export const { selectFilters } = filterSlice.selectors

export default filterSlice
