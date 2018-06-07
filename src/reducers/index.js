import { combineReducers } from 'redux'
import locale from './localeReducer'
import auth from './authReducer'
import profile from './profileReducer'

const rootReducer = combineReducers({
  locale,
  auth,
  profile,
})

export default rootReducer;
