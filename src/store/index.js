import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export const store = configureStore(
  {
    reducer: {
      //
    },
  },
  composeWithDevTools(applyMiddleware(thunk))
)
