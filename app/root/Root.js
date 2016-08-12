/**
*
* Root
*
*/
'use strict'

import React from 'react'

import MessageList from '../chat/containers/MessageList'
import MessageInput from '../chat/containers/MessageInput'

const Root = () => {
  return (
    <div>
      <MessageList />
      <MessageInput />
    </div>
  )
}

export default Root
