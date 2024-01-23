import filterReducer from './filterReducer'
import sortReducer from './sortReducer'

import { combineReducers, configureStore } from '@reduxjs/toolkit'

const reducer = combineReducers({
  sorting: sortReducer,
  filters: filterReducer,
})
const store = configureStore({ reducer })

export default store
