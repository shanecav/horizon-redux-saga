import { createAction } from 'redux-actions'

// Tell horizon-redux to start watching for new messages in the 'messages' table
// Payload = limit - determines the max number of messages to return
export const WATCH_MESSAGES = 'WATCH_MESSAGES'
export const watchMessages = createAction(WATCH_MESSAGES)

// A new complete set of messages has been fetched from Horizon
export const NEW_MESSAGES = 'NEW_MESSAGES'
export const newMessages = createAction(NEW_MESSAGES)

// Add a new message and handle results
export const ADD_MESSAGE_REQUEST = 'ADD_MESSAGE_REQUEST'
export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS'
export const ADD_MESSAGE_FAILURE = 'ADD_MESSAGE_FAILURE'
export const addMessageRequest = createAction(ADD_MESSAGE_REQUEST)
export const addMessageSuccess = createAction(
  ADD_MESSAGE_SUCCESS,
  (id, message) => ({
    id,
    message
  })
)
export const addMessageFailure = createAction(
  ADD_MESSAGE_FAILURE,
  (err, message) => ({
    err,
    message
  })
)
