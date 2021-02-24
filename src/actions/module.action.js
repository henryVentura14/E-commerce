import { FETCH, SUCCESS, ERROR } from '../config/types'
import Axios from 'axios'

const fetch_request = () => {
  return {
    type: FETCH
  }
}

const success_fetch = payload => {
  return {
    type: SUCCESS,
    payload
  }
}

const error_fetch = payload => {
  return {
    type: ERROR,
    payload
  }
}
const fetch = () => {
  let value = 'pikachu'
  return dispatch => {
    dispatch(fetch_request())
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${value}/`)
      .then(response => {
        dispatch(success_fetch([response.data]))
      })
      .catch(error => {
        dispatch(error_fetch('No result'))
      })
  }
}

export { fetch }
