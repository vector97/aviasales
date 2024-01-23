import { SET_SORTING } from './actionTypes'

const defaultState = 'cheapest'

// eslint-disable-next-line default-param-last
const sortReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SORTING:
      return action.payload.sorting
    default:
      return state
  }
}

export default sortReducer
