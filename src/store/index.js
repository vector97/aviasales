import filterReducer from './filterSlice'
import sortingReducer from './sortingSlice'
import ticketsReducer from './ticketsSlice'

import { combineSlices, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineSlices(filterReducer, sortingReducer, ticketsReducer)

export default configureStore({
  reducer: rootReducer,
})
