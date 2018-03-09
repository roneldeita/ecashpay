import { combineReducers } from 'redux'
import cart from './cart'
import locale from './localeReducer'
import auth from './authReducer'
import profile from './profileReducer'

const rootReducer = combineReducers({
  cart,
  locale,
  auth,
  profile
})

export default rootReducer;
