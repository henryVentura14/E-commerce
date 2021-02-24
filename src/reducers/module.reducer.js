// Reducers config
import { FETCH, SUCCESS, ERROR } from '../config/types'

const initialState = {
  data: [],
  loading: false,
  error: ''
}

const modulesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH: {
      return {
        ...state,
        loading: true
      }
    }
    case SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false
      }
    }
    case ERROR: {
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload      }
    }
    default:
      return state
  }
}
export default modulesReducer
