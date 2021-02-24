import { createStore, applyMiddleware } from 'redux'
import rootReducers from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const composer = (middleware) => process.env.NODE_ENV === 'production' ?
  middleware :
  composeWithDevTools(middleware)

const STORE = createStore(
  rootReducers,
  composer(applyMiddleware(thunk))
)

export default STORE;