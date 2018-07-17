import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import HomePage from './components/home/HomePage'
import NotFound from './components/notFound'
import Redirecting from './components/redirect'
//auth
import LoginPage from './components/auth/LoginPage'
import TfaPage from './components/auth/TfaPage'
import RequestPasswordPage from './components/auth/RequestPasswordPage'
import ResetPasswordPage from './components/auth/ResetPasswordPage'
//resgister personal
import RegisterPage from './components/auth/personal/RegisterPage'
import VerificationPage from './components/auth/personal/VerificationPage'
import ProfilePage from './components/auth/personal/ProfilePage'
//resgister business
import BusinessRegisterPage from './components/auth/business/RegisterPage'
import BusinessVerificationPage from './components/auth/business/VerificationPage'
import BusinesProfilePage from './components/auth/business/ProfilePage'
import RequirementsPage from './components/auth/business/RequirementsPage'

//individual Account
import ClientDashboard from './components/client/dashboard/DashboardPage'
import Settings from './components/client/settings/SettingsPage'
import CashIn from './components/client/cashin/CashInPage'
import CashInTransaction from './components/client/cashin/TransactionPage'
import SendMoney from './components/client/sendmoney/SendMoneyPage'
import BuyLoad from './components/client/buyload/BuyLoadPage'
import PayBills from './components/client/paybills/PayBillsPage'
import BookTravel from './components/client/booktravel/BookTravelPage'
import Currencies from './components/client/currencies/CurrenciesPage'
import KnownAccounts from './components/client/knownaccounts/KnownAccountsPage'
import VerifyPhone from './components/client/phone/VerifyPhonePage'
import UploadValidId from './components/client/identification/ValidIdPage'
import SubmitPob from './components/client/pob/SubmitPobPage'
import Transfer from './components/client/transfer/TransferPage'
import AdminDashboard from './components/admin/dashboard/DashboardPage'
import AdminLogin from './components/admin/auth/LoginPage'
//import AdminTransactions from './components/admin/transactions/TransactionPage'
import AdminRequirementsId from './components/admin/requirements/VerifyIdPage'
import AdminRequirementsPob from './components/admin/requirements/VerifyPobPage'
import AdminTransactionCashIn from './components/admin/transactions/CashInPage'

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
          <Route path="/login" exact render={ () => ( !isLoggedIn() ? <LoginPage/> : <Redirect to="/redirecting"/> )}/>
          <Route path="/login/tfa" render={ () => ( !isLoggedIn() ? <TfaPage/> : <Redirect to="/redirecting"/> )}/>
          <Route path="/password/request" render={ () => ( !isLoggedIn() ? <RequestPasswordPage/> : <Redirect to="/redirecting"/> )} />
          <Route path="/password/reset" render={ () => ( !isLoggedIn() ? <ResetPasswordPage/> : <Redirect to="/redirecting"/> )} />

          <Route path="/client/register" render={ () => ( !isLoggedIn() ? <RegisterPage/> : <Redirect to="/redirecting"/> )} />
          <Route path="/client/verify" exact render={ (props) => ( isClient(0) ? <VerificationPage/> : <Redirect to="/redirecting"/> )} />
          <Route path="/client/profile" render={ (props) => ( isClient(1) ? <ProfilePage {...props}/> : <Redirect to="/redirecting"/> )} />
          <Route path="/client/dashboard" render={ props => ( isClient(2) ? <ClientDashboard {...props}/> : <Redirect to="/redirecting"/> )}/>
          <Route path="/client/settings" render={ props => ( isClient(2) ? <Settings {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/cashin" render={ props => ( isClient(2) ? <CashIn {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/sendmoney" render={ props => ( isClient(2) ? <SendMoney {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/buyload" render={ props => ( isClient(2) ? <BuyLoad {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/paybills" render={ props => ( isClient(2) ? <PayBills {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/booktravel" render={ props => ( isClient(2) ? <BookTravel {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/transactions/cashin/:no" render={ props => ( isClient(2) ? <CashInTransaction {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/manage/currencies" render={ props => ( isClient(2) ? <Currencies {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/manage/knownaccounts" render={ props => ( isClient(2) ? <KnownAccounts {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/verify/phone" render={ props => ( isClient(2) ? <VerifyPhone {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/upload/id" render={ props => ( isClient(2) ? <UploadValidId {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/upload/pob" render={ props => ( isClient(2) ? <SubmitPob {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/transfer" render={ props => ( isClient(2) ? <Transfer {...props}/> : <Redirect to="/redirecting"/>)} />

          <Route path="/business/register" render={ () => ( !isLoggedIn() ? <BusinessRegisterPage/> : <Redirect to="/redirecting"/>)}/>
          <Route path="/business/verify" render={ (props) => ( !isClient() ? <BusinessVerificationPage/> : <Redirect to="/redirecting"/> )} />
          <Route path="/business/profile" render={ (props) => ( !isClient() ? <BusinesProfilePage {...props}/> : <Redirect to="/redirecting"/> )} />
          <Route path="/business/requirements" render={ (props) => ( !isClient() ? <RequirementsPage {...props}/> : <Redirect to="/redirecting"/> )} />

          <Route path="/admin/login" render={ () => ( !isLoggedIn() ? <AdminLogin/> : <Redirect to="/redirecting"/> )}/>
          <Route path="/admin" exact render={ (props) => ( isAdmin() ? <AdminDashboard {...props}/> : <Redirect to="/redirecting"/> )}/>
          <Route path="/admin/transactions/cashin" render={ () => ( isAdmin() ? <AdminTransactionCashIn/> : <Redirect to="/redirecting"/> )}/>
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
