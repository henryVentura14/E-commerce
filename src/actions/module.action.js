import {
  ERROR,
  GET_PRODUCTS,
  GET_ZIP,
  SUCCESS,
  POST_CONTACT
} from '../config/types'
import Axios from 'axios'

const contact_request = payload => {
  return {
    type: POST_CONTACT,
    payload
  }
}

const error_fetch = payload => {
  return {
    type: ERROR,
    payload
  }
}

const success_fetch = payload => {
  return {
    type: SUCCESS,
    payload
  }
}

const products_request = payload => {
  return {
    type: GET_PRODUCTS,
    payload
  }
}

const zip_request = payload => {
  return {
    type: GET_ZIP,
    payload
  }
}

const fetch_get_products = () => {
  return dispatch => {
    dispatch(products_request())
    Axios.get('https://blackisp.herokuapp.com/products')
      .then(response => {
        dispatch(products_request(response.data))
      })
      .catch(error => {
        dispatch(error_fetch('No result'))
      })
  }
}
const fetch_get_zip = code => {
  return dispatch => {
    dispatch(zip_request())
    Axios.get(`​ https://blackisp.herokuapp.com/postalCodes/${code}`)
      .then(response => {
        dispatch(success_fetch(response.data))
      })
      .catch(error => {
        dispatch(error_fetch('No result'))
      })
  }
}

const fetch_post_contact = data => {

  return dispatch => {

      return new Promise ( (resolve, reject) => {
          Axios
          .post('https://blackisp.herokuapp.com/contact', data)
          .then(data => {
              dispatch(contact_request())
              resolve(data)
          })
          .catch(error => {
              dispatch(error_fetch(error))
              reject(error)
          });
       });

  }
  
}


export { fetch_get_products, fetch_get_zip, fetch_post_contact }
