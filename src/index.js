import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import Store from './store'
import Routes from './routes'

import './index.css'

import { loadLocale } from './actions/localeAction';

const StoreInstance = Store()

StoreInstance.dispatch(loadLocale())

console.log(typeof StoreInstance.getState().locale.toLowerCase())

ReactDOM.render(
  <Routes store={StoreInstance} />,
  document.getElementById('root')
)

// subscribe to store
// StoreInstance.subscribe(() =>
//   console.log(StoreInstance.getState())
// )

// dispatch sample to store
// StoreInstance.dispatch({type:'ADD_TO_CART', item:'testing'})

registerServiceWorker()
