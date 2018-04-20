import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import HomePage from './components/home/HomePage'
import LoginPage from './components/auth/LoginPage'
import RegisterPage from './components/auth/RegisterPage'
import RequestPasswordPage from './components/auth/RequestPasswordPage'
import ResetPasswordPage from './components/auth/ResetPasswordPage'
import VerificationPage from './components/auth/VerificationPage'
import ProfilePage from './components/auth/ProfilePage'
import NotFound from './components/notFound'
import Redirecting from './components/redirect'

import ClientDashboard from './components/client/dashboard/DashboardPage'
import AddFunds from './components/client/addfunds/AddFundsPage'
import SendMoney from './components/client/sendmoney/SendMoney'
import Currencies from './components/client/currencies/CurrenciesPage'
import VerifyPhone from './components/client/phone/VerifyPhonePage'

import AdminDashboard from './components/admin/dashboard/DashboardPage'
import AdminTransactions from './components/admin/transactions/TransactionPage'

import Cart from './components/cart'

import { hasToken, getProfile } from './assets/utils/auth'

const isLoggedIn = (status) => {
  return status ? hasToken() && getProfile().status === status : hasToken()
}

const Routes = ({ store }) => (
  <Provider store={store}>
    <Router>
      <App loggedIn={isLoggedIn()}>
        <Switch>
          <Route path="/" exact render={ props => ( !isLoggedIn() ? <HomePage/> : <Redirect to="redirecting"/> )}/>
          <Route path="/login" render={ () => ( !isLoggedIn() ? <LoginPage/> : <Redirect to="/redirecting"/> )}/>
          <Route path="/register" render={ () => ( !isLoggedIn() ? <RegisterPage/> : <Redirect to="/redirecting"/> )} />
          <Route path="/password/request" render={ () => ( !isLoggedIn() ? <RequestPasswordPage/> : <Redirect to="/redirecting"/> )} />
          <Route path="/password/reset" render={ () => ( !isLoggedIn() ? <ResetPasswordPage/> : <Redirect to="/redirecting"/> )} />
          <Route path="/verify" render={ (props) => ( isLoggedIn(0)? <VerificationPage/> : <Redirect to="/redirecting"/> )} />
          <Route path="/profile" render={ (props) => ( isLoggedIn(1) ? <ProfilePage {...props}/> : <Redirect to="/redirecting"/> )} />
          <Route path="/client/dashboard" render={ ()=> ( isLoggedIn(2) ? <ClientDashboard/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/addfunds" render={ props => ( isLoggedIn(2) ? <AddFunds {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/sendmoney" render={ props => ( isLoggedIn(2) ? <SendMoney {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/manage/currencies" render={ props => ( isLoggedIn(2) ? <Currencies {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/verify/phone" render={ props => ( isLoggedIn(2) ? <VerifyPhone {...props}/> : <Redirect to="/redirecting"/>)} />
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
