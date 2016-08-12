import { NEW_MESSAGES } from '../actions'

const messages = (state = [], action) => {
  switch (action.type) {
    case NEW_MESSAGES:
      return [...action.payload].reverse()
    default:
      return state
  }
}

export default messages
