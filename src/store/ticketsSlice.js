import { getSearchId, getTickets } from '../services/aviasalesService'

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
  },

  selectors: {
    selectTicketState: (state) => state,
  },

  reducers: (create) => ({
    fetchSearchID: create.asyncThunk(
      async (_, { rejectWithValue }) => getSearchId(rejectWithValue),

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
      }
    ),

    fetchTickets: create.asyncThunk(
      async (_, { rejectWithValue, getState, dispatch }) => {
        const { searchId } = getState().tickets
        let stop = false

        do {
          const data = await getTickets(searchId, rejectWithValue)
          if (data) {
            dispatch(addTickets(data))
            stop = data.stop
          }
        } while (!stop)
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
        fulfilled: (state) => {
          state.status = 'resolved'
          state.error = null
        },
      }
    ),

    addTickets: create.reducer((state, action) => {
      state.tickets.push(...action.payload.tickets)
      state.isLoaded = action.payload.stop
    }),

    showMore: create.reducer((state) => {
      state.shownCount += 5
    }),
  }),
})

export const { fetchSearchID, fetchTickets, addTickets, showMore } = ticketsSlice.actions

export const { selectTicketState, selectAllTickets, selectShownTickets } = ticketsSlice.selectors

export default ticketsSlice
