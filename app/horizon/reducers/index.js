import { HORIZON_STATUS } from '../actions'

const initialState = {
  status: 'unconnected'
}

const horizon = (state = initialState, action) => {
  if (action.type === HORIZON_STATUS) {
    return Object.assign({}, state, { status: action.payload })
  }
  return state
}

export default horizon
