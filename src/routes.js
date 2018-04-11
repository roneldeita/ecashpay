import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import HomePage from './components/home/HomePage'
import LoginPage from './components/auth/LoginPage'
import RegisterPage from './components/auth/RegisterPage'
import VerificationPage from './components/auth/VerificationPage'
import ProfilePage from './components/auth/ProfilePage'
import NotFound from './components/notFound'
import Redirecting from './components/redirect'

import ClientDashboard from './components/client/dashboard/ClientDashboard'
import AddFunds from './components/client/addfunds/AddFunds'
import SendMoney from './components/client/sendmoney/SendMoney'
import ManageCurrencies from './components/client/currencies/ManageCurrencies'

import AdminDashboard from './components/admin/dashboard/AdminDashboard'
import AdminTransactions from './components/admin/transactions/AdminTransactions'

import Cart from './components/cart'

//route middleware
const isLoggedIn = (store) => {
  const Store = store.getState()
  return !!Store.auth.token
}

const Routes = ({ store }) => (
  <Provider store={store}>
    <Router>
      <App loggedIn={isLoggedIn(store)}>
        <Switch>
          <Route path="/" exact render={ props => ( !isLoggedIn(store) ? <HomePage/> : <Redirect to={{ pathname: '/redirecting', state:{loggedIn:isLoggedIn(store)} }} /> )}/>
          <Route path="/login" render={ () => ( !isLoggedIn(store) ? <LoginPage/> : <Redirect to="/redirecting"/> )}/>
          <Route path="/register" render={ () => ( !isLoggedIn(store) ? <RegisterPage/> : <Redirect to="/redirecting"/> )} />
          <Route path="/verify" render={ (props) => ( isLoggedIn(store) ? <VerificationPage/> : <Redirect to={{ pathname: '/redirecting', state:{loggedIn:isLoggedIn(store)} }} /> )} />
          <Route path="/profile" render={ (props) => ( isLoggedIn(store) ? <ProfilePage {...props}/> : <Redirect to="/redirecting"/> )} />
          <Route path="/client/dashboard" render={ ()=> ( isLoggedIn(store) ? <ClientDashboard/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/addfunds" render={ props => ( isLoggedIn(store) ? <AddFunds {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/sendmoney" render={ props => ( isLoggedIn(store) ? <SendMoney {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/manage/currencies" render={ props => ( isLoggedIn(store) ? <ManageCurrencies {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/admin" exact component={AdminDashboard}/>
          <Route path="/admin/transactions" component={AdminTransactions}/>
          <Route path="/cart" component={Cart} />
          <Route path="/redirecting" component={Redirecting} />
          <Route path="*" component={NotFound} />
        </Switch>
      </App>
    </Router>
  </Provider>
)

Routes.propTypes = {
  store: PropTypes.object.isRequired
}

export default Routes
