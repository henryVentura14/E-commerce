import { combineReducers } from 'redux'
import modulesReducer from './module.reducer'

const rootReducers = combineReducers({
  modules: modulesReducer
})

export default rootReducers
