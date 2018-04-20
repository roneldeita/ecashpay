import { combineReducers } from 'redux'
import locale from './localeReducer'
import auth from './authReducer'
import profile from './profileReducer'
// import cart from './cart'

const rootReducer = combineReducers({
  locale,
  auth,
  profile,
  // cart,
})

export default rootReducer;
