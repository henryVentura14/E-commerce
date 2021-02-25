// Reducers config
import {
  ERROR,
  GET_PRODUCTS,
  GET_ZIP,
  SUCCESS,
  POST_CONTACT
} from '../config/types'
const initialState = {
  zipdata: [],
  products:[],
  error: '',
  success: ''
}

const modulesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        products:action.payload,
        success: 'Consulta exitosa'
      }
    }
    case GET_ZIP: {
      return {
        ...state,
        zipdata:action.payload,
        success: 'Consulta exitosa'
      }
    }
    case POST_CONTACT: {
      return {
        ...state,
        success:'Enviado con exito',
      }
    }
    case SUCCESS: {
      return {
        ...state,
        success: action.payload
      }
    }
    case ERROR: {
      return {
        ...state,
        error: action.payload
      }
    }
    default:
      return state
  }
}
export default modulesReducer
