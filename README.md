# Horizon + redux-saga example

This example implements the chat-app example from [Horizon.io](http://horizon.io/) with [Redux](http://redux.js.org/) and [redux-saga](http://yelouafi.github.io/redux-saga/index.html).

This example is pretty over-engineered for a tiny chat app, but I wanted to structure it how I would a real Redux app. For a quick view of how the Horizon/redux-saga relationship works, jump over to [app/chat/sagas/watchMessages.js](app/chat/sagas/watchMessages.js). It's pretty straight-forward: you just create a [redux-saga eventChannel](http://yelouafi.github.io/redux-saga/docs/api/index.html#eventchannelsubscribe-buffer-matcher) that subscribes to a Horizon query Observable as its event source, and then have a saga `take()` that channel and respond to its events accordingly.

## Installation + Usage

You'll need to have [Horizon](http://horizon.io/install/) installed first.

1. `git clone git@github.com:shanecav/horizon-redux-saga.git`
2. `cd horizon-redux-saga && npm install`
3. `hz serve --dev`
4. In a new terminal in the same directory: `npm start`

## Alternatives

If you're looking for a simpler alternative that doesn't depend on redux-saga, you might want to check out my [horizon-redux](https://github.com/shanecav/horizon-redux) library. It's not as powerful as redux-saga, but it's a lot smaller and easier to implement (in my opinion) if your needs are basic.

You can also check out [redux-observable](https://redux-observable.js.org/) if RxJS is more your thing.

## Feedback

If you have any problems running this example, or have some suggestions, open an issue and I'll respond pretty quickly. Thanks!
