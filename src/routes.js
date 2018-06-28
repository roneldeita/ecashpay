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
import Settings from './components/client/settings/SettingsPage'
import AddFunds from './components/client/addfunds/AddFundsPage'
import Transaction from './components/client/addfunds/TransactionPage'
import SendMoney from './components/client/sendmoney/SendMoney'
import Currencies from './components/client/currencies/CurrenciesPage'
import VerifyPhone from './components/client/phone/VerifyPhonePage'
import UploadValidId from './components/client/identification/ValidIdPage'
import SubmitPob from './components/client/pob/SubmitPobPage'

import AdminDashboard from './components/admin/dashboard/DashboardPage'
import AdminLogin from './components/admin/auth/LoginPage'
import AdminTransactions from './components/admin/transactions/TransactionPage'
import AdminRequirementsId from './components/admin/requirements/VerifyIdPage'
import AdminRequirementsPob from './components/admin/requirements/VerifyPobPage'

import { hasToken, getProfile } from './assets/utils/auth'

const isLoggedIn = () => {
  return hasToken()
}
const isClient = (status) => {
  return hasToken() && getProfile().status === status && getProfile().type === "individual"
}
const isAdmin = () => {
  return hasToken() && getProfile().type === "admin"
}

const Routes = ({ store }) => (
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route path="/" exact render={ props => ( !isLoggedIn() ? <HomePage/> : <Redirect to="redirecting"/> )}/>
          <Route path="/login" render={ () => ( !isLoggedIn() ? <LoginPage/> : <Redirect to="/redirecting"/> )}/>
          <Route path="/register" render={ () => ( !isLoggedIn() ? <RegisterPage/> : <Redirect to="/redirecting"/> )} />
          <Route path="/password/request" render={ () => ( !isLoggedIn() ? <RequestPasswordPage/> : <Redirect to="/redirecting"/> )} />
          <Route path="/password/reset" render={ () => ( !isLoggedIn() ? <ResetPasswordPage/> : <Redirect to="/redirecting"/> )} />
          <Route path="/verify" render={ (props) => ( isClient(0) ? <VerificationPage/> : <Redirect to="/redirecting"/> )} />
          <Route path="/profile" render={ (props) => ( isClient(1) ? <ProfilePage {...props}/> : <Redirect to="/redirecting"/> )} />
          <Route path="/client/dashboard" render={ props => ( isClient(2) ? <ClientDashboard {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/settings" render={ props => ( isClient(2) ? <Settings {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/addfunds" render={ props => ( isClient(2) ? <AddFunds {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/sendmoney" render={ props => ( isClient(2) ? <SendMoney {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/transactions/:no" render={ props => ( isClient(2) ? <Transaction {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/manage/currencies" render={ props => ( isClient(2) ? <Currencies {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/verify/phone" render={ props => ( isClient(2) ? <VerifyPhone {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/upload/id" render={ props => ( isClient(2) ? <UploadValidId {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/upload/pob" render={ props => ( isClient(2) ? <SubmitPob {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/admin/login" render={ () => ( !isLoggedIn() ? <AdminLogin/> : <Redirect to="/redirecting"/> )}/>
          <Route path="/admin" exact render={ (props) => ( isAdmin() ? <AdminDashboard {...props}/> : <Redirect to="/redirecting"/> )}/>
          <Route path="/admin/transactions" render={ () => ( isAdmin() ? <AdminTransactions/> : <Redirect to="/redirecting"/> )}/>
          <Route path="/admin/requirements/id" render={ () => ( isAdmin() ? <AdminRequirementsId/> : <Redirect to="/redirecting"/> )}/>
          <Route path="/admin/requirements/pob" render={ () => ( isAdmin() ? <AdminRequirementsPob/> : <Redirect to="/redirecting"/> )}/>
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
