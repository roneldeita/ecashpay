import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import Store from './store'
import Routes from './routes'

import './index.css'

import { loadLocale } from './actions/localeAction';
import { checkAuth } from './actions/authAction';
// import { loadProfile } from './actions/profileAction';

const StoreInstance = Store()

StoreInstance.dispatch(loadLocale())
StoreInstance.dispatch(checkAuth())
//load profile
// const Token = StoreInstance.getState().auth.token
// if(Token !== undefined){
//   StoreInstance.dispatch(loadProfile(Token))
// }

//console.log(typeof StoreInstance.getState().locale.toLowerCase())

ReactDOM.render(
  <Routes store={StoreInstance} />,
  document.getElementById('root')
)

// subscribe to store
//console.log(StoreInstance.getState())


// dispatch sample to store
// StoreInstance.dispatch({type:'ADD_TO_CART', item:'testing'})

registerServiceWorker()
