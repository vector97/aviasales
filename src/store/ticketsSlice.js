/* eslint-disable no-param-reassign */
import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit'

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

const ticketsSlice = createSliceWithThunks({
  name: 'tickets',

  initialState: {
    searchId: '',
    tickets: [],
    status: null,
    isLoaded: false,
    error: null,
    shownCount: 5,
    shownTickets: [],
  },

  selectors: {
    selectTicketState: (state) => state,
  },

  reducers: (create) => ({
    fetchSearchID: create.asyncThunk(
      async (_, { rejectWithValue }) => {
        try {
          const response = await fetch('https://aviasales-test-api.kata.academy/search')

          if (!response.ok) {
            throw new Error('Не удалось отправить запрос, попробуйте позже или свяжитесь с администратором')
          }

          const data = await response.json()

          return data
        } catch (error) {
          return rejectWithValue(error.message)
        }
      },

      {
        pending: (state) => {
          state.status = 'loading'
          state.error = null
        },
        rejected: (state, action) => {
          state.status = 'rejected'
          state.error = action.payload
        },
        fulfilled: (state, action) => {
          state.status = 'resolved'
          state.error = null
          state.searchId = action.payload.searchId
        },
        settled: () => {},
      }
    ),

    fetchTickets: create.asyncThunk(
      async (_, { rejectWithValue, getState }) => {
        const { searchId } = getState().tickets

        try {
          const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)

          if (!response.ok) {
            throw new Error('Не удалось получить часть билетов билетов')
          }

          const data = await response.json()

          return data
        } catch (error) {
          return rejectWithValue(error.message)
        }
      },

      {
        pending: (state) => {
          state.status = 'loading'
          state.error = null
        },
        rejected: (state, action) => {
          state.status = 'rejected'
          state.error = action.payload
        },
        fulfilled: (state, action) => {
          state.status = 'resolved'
          state.error = null
          state.tickets.push(...action.payload.tickets)
          state.isLoaded = action.payload.stop
        },
        settled: () => {},
      }
    ),

    showMore: create.reducer((state) => {
      state.shownCount += 5
    }),
  }),
})

export const { fetchSearchID, fetchTickets, showMore } = ticketsSlice.actions

export const { selectTicketState, selectAllTickets, selectShownTickets } = ticketsSlice.selectors

export default ticketsSlice
