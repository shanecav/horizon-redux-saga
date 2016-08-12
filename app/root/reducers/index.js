import { combineReducers } from 'redux'

import messages from '../../chat/reducers'
import horizon from '../../horizon/reducers'

const rootReducer = combineReducers({
  messages,
  horizon
})

export default rootReducer
