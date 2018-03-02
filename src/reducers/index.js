import { combineReducers } from 'redux';
import cart from './cart';
import locale from './localeReducer';

const rootReducer = combineReducers({
  cart,
  locale
})

export default rootReducer;
