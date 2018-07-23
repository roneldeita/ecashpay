import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import HomePage from './components/home/HomePage'
import TermsAndCondition from './components/legal/TermsAndConditionPage'
import NotFound from './components/notFound'
import Redirecting from './components/redirect'
//auth
import LoginPage from './components/auth/LoginPage'
import TfaPage from './components/auth/TfaPage'
import RequestPasswordPage from './components/auth/RequestPasswordPage'
import ResetPasswordPage from './components/auth/ResetPasswordPage'
//Business Account
import BusinessRegisterPage from './components/auth/business/RegisterPage'
import BusinessVerificationPage from './components/auth/business/VerificationPage'
import BusinessProfilePage from './components/auth/business/ProfilePage'
import BusinessRequirementsPage from './components/auth/business/RequirementsPage'
import BusinessPendingPage from './components/auth/business/PendingPage'
import BusinessRejectedPage from './components/auth/business/RejectedPage'
import BusinessDashboard from './components/business/dashboard/DashboardPage'
//Merchant Account
import MerchantRegisterPage from './components/auth/merchant/RegisterPage'
import MerchantVerificationPage from './components/auth/merchant/VerificationPage'
import MerchantProfilePage from './components/auth/merchant/ProfilePage'
import MerchantRequirementsPage from './components/auth/merchant/RequirementsPage'
import MerchantPendingPage from './components/auth/merchant/PendingPage'
import MerchantRejectedPage from './components/auth/merchant/RejectedPage'
import MerchantDashboard from './components/merchant/dashboard/DashboardPage'
import MerchantHistory from './components/merchant/history/HistoryPage'
import MerchantReports from './components/merchant/reports/ReportsPage'
import MerchantTools from './components/merchant/tools/ToolsPage'
import MerchantCard from './components/merchant/card/CardPage'

//Personal Account
import RegisterPage from './components/auth/personal/RegisterPage'
import VerificationPage from './components/auth/personal/VerificationPage'
import ProfilePage from './components/auth/personal/ProfilePage'
import ClientDashboard from './components/client/dashboard/DashboardPage'
import Settings from './components/client/settings/SettingsPage'
import ClientVerifyPhone from './components/client/phone/VerifyPhonePage'
import ClientUploadValidId from './components/client/identification/ValidIdPage'
import ClientSubmitPob from './components/client/pob/SubmitPobPage'

//common and transactions
import CashIn from './components/transaction/cashin/CashInPage'
import CashInTransaction from './components/transaction/cashin/TransactionPage'
import SendMoney from './components/transaction/sendmoney/SendMoneyPage'
import BuyLoad from './components/transaction/buyload/BuyLoadPage'
import PayBills from './components/transaction/paybills/PayBillsPage'
import BookTravel from './components/transaction/booktravel/BookTravelPage'
import Transfer from './components/transaction/transfer/TransferPage'
import TransferTransaction from './components/transaction/transfer/TransactionPage'
import PaymentTransaction from './components/transaction/payment/TransactionPage'
import Currencies from './components/transaction/currencies/CurrenciesPage'
import KnownAccounts from './components/transaction/knownaccounts/KnownAccountsPage'

//admin
import AdminDashboard from './components/admin/dashboard/DashboardPage'
import AdminLogin from './components/admin/auth/LoginPage'
import AdminRequirementsId from './components/admin/requirements/VerifyIdPage'
import AdminRequirementsPob from './components/admin/requirements/VerifyPobPage'
import AdminTransactionCashIn from './components/admin/transactions/CashInPage'
import AdminBusinessAccounts from './components/admin/business/accounts/AccountsPage'
import AdminMerchantAccounts from './components/admin/merchant/accounts/AccountsPage'
import AdminMerchantPayments from './components/admin/merchant/payments/PaymentsPage'

import { hasToken, getProfile } from './assets/utils/auth'

const isLoggedIn = () => {
  return hasToken()
}
const isClient = (status) => {
  return hasToken() && getProfile().status === status && getProfile().type === "individual"
}
const isBusiness = (status) => {
  return hasToken() && getProfile().status === status && getProfile().type === "business"
}
const isMerchant = (status) => {
  return hasToken() && getProfile().status === status && getProfile().type === "merchant"
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
          <Route path="/termsandconditions" exact component={TermsAndCondition}/>
          <Route path="/redirecting" component={Redirecting} />
          <Route path="/login" exact render={ () => ( !isLoggedIn() ? <LoginPage/> : <Redirect to="/redirecting"/> )}/>
          <Route path="/login/tfa" render={ () => ( !isLoggedIn() ? <TfaPage/> : <Redirect to="/redirecting"/> )}/>
          <Route path="/password/request" render={ () => ( !isLoggedIn() ? <RequestPasswordPage/> : <Redirect to="/redirecting"/> )} />
          <Route path="/password/reset" render={ () => ( !isLoggedIn() ? <ResetPasswordPage/> : <Redirect to="/redirecting"/> )} />

          <Route path="/cashin" exact render={ props => ( isLoggedIn('completed') ? <CashIn {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/cashin/transactions/:no" render={ props => ( isLoggedIn('completed') ? <CashInTransaction {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/sendmoney" render={ props => ( isLoggedIn('completed') ? <SendMoney {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/buyload" render={ props => ( isLoggedIn('completed') ? <BuyLoad {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/paybills" render={ props => ( isLoggedIn('completed') ? <PayBills {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/booktravel" render={ props => ( isLoggedIn('completed') ? <BookTravel {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/transfer" exact render={ props => ( isLoggedIn('completed') ? <Transfer {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/transfer/transactions/:no" render={ props => ( isLoggedIn('completed') ? <TransferTransaction {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/payment/transactions/:no" render={ props => ( isLoggedIn('completed') ? <PaymentTransaction {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/currencies" render={ props => ( isLoggedIn('completed') ? <Currencies {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/knownaccounts" render={ props => ( isLoggedIn('completed') ? <KnownAccounts {...props}/> : <Redirect to="/redirecting"/>)} />

          <Route path="/client/register" render={ () => ( !isLoggedIn() ? <RegisterPage/> : <Redirect to="/redirecting"/> )} />
          <Route path="/client/verify" exact render={ (props) => ( isClient('unverified') ? <VerificationPage/> : <Redirect to="/redirecting"/> )} />
          <Route path="/client/profile" render={ (props) => ( isClient('verified') ? <ProfilePage {...props}/> : <Redirect to="/redirecting"/> )} />
          <Route path="/client/dashboard" render={ props => ( isClient('completed') ? <ClientDashboard {...props}/> : <Redirect to="/redirecting"/> )}/>
          <Route path="/client/settings" render={ props => ( isLoggedIn('completed') ? <Settings {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/verify/phone" render={ props => ( isClient('completed') ? <ClientVerifyPhone {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/upload/id" render={ props => ( isClient('completed') ? <ClientUploadValidId {...props}/> : <Redirect to="/redirecting"/>)} />
          <Route path="/client/upload/pob" render={ props => ( isClient('completed') ? <ClientSubmitPob {...props}/> : <Redirect to="/redirecting"/>)} />

          <Route path="/business/register" render={ () => ( !isLoggedIn() ? <BusinessRegisterPage/> : <Redirect to="/redirecting"/>)}/>
          <Route path="/business/verify" render={ (props) => ( isBusiness('unverified') ? <BusinessVerificationPage/> : <Redirect to="/redirecting"/> )} />
          <Route path="/business/profile" render={ (props) => ( isBusiness('verified') ? <BusinessProfilePage {...props}/> : <Redirect to="/redirecting"/> )} />
          <Route path="/business/requirements" render={ (props) => ( isBusiness('submissionOfRequirements') ? <BusinessRequirementsPage {...props}/> : <Redirect to="/redirecting"/> )} />
          <Route path="/business/pending" render={ (props) => ( isBusiness('pending') ? <BusinessPendingPage {...props}/> : <Redirect to="/redirecting"/> )} />
          <Route path="/business/rejected" render={ (props) => ( isBusiness('rejected') ? <BusinessRejectedPage {...props}/> : <Redirect to="/redirecting"/> )} />
          <Route path="/business/dashboard" render={ props => ( isBusiness('completed') ? <BusinessDashboard {...props}/> : <Redirect to="/redirecting"/> )}/>

          <Route path="/merchant/register" render={ () => ( !isLoggedIn() ? <MerchantRegisterPage/> : <Redirect to="/redirecting"/>)}/>
          <Route path="/merchant/verify" render={ (props) => ( isMerchant('unverified') ? <MerchantVerificationPage/> : <Redirect to="/redirecting"/> )} />
          <Route path="/merchant/profile" render={ (props) => ( isMerchant('verified') ? <MerchantProfilePage {...props}/> : <Redirect to="/redirecting"/> )} />
          <Route path="/merchant/requirements" render={ (props) => ( isMerchant('submissionOfRequirements') ? <MerchantRequirementsPage {...props}/> : <Redirect to="/redirecting"/> )} />
          <Route path="/merchant/pending" render={ (props) => ( isMerchant('pending') ? <MerchantPendingPage {...props}/> : <Redirect to="/redirecting"/> )} />
          <Route path="/merchant/rejected" render={ (props) => ( isMerchant('rejected') ? <MerchantRejectedPage {...props}/> : <Redirect to="/redirecting"/> )} />
          <Route path="/merchant/dashboard" render={ props => ( isMerchant('completed') ? <MerchantDashboard {...props}/> : <Redirect to="/redirecting"/> )}/>
          <Route path="/merchant/history" render={ props => ( isMerchant('completed') ? <MerchantHistory {...props}/> : <Redirect to="/redirecting"/> )}/>
          <Route path="/merchant/reports" render={ props => ( isMerchant('completed') ? <MerchantReports {...props}/> : <Redirect to="/redirecting"/> )}/>
          <Route path="/merchant/tools" render={ props => ( isMerchant('completed') ? <MerchantTools {...props}/> : <Redirect to="/redirecting"/> )}/>
          <Route path="/merchant/card" render={ props => ( isMerchant('completed') ? <MerchantCard {...props}/> : <Redirect to="/redirecting"/> )}/>

          <Route path="/admin/login" render={ () => ( !isLoggedIn() ? <AdminLogin/> : <Redirect to="/redirecting"/> )}/>
          <Route path="/admin" exact render={ (props) => ( isAdmin() ? <AdminDashboard {...props}/> : <Redirect to="/redirecting"/> )}/>
          <Route path="/admin/transactions/cashin" render={ () => ( isAdmin() ? <AdminTransactionCashIn/> : <Redirect to="/redirecting"/> )}/>
          <Route path="/admin/requirements/id" render={ () => ( isAdmin() ? <AdminRequirementsId/> : <Redirect to="/redirecting"/> )}/>
          <Route path="/admin/business/accounts" render={ () => ( isAdmin() ? <AdminBusinessAccounts/> : <Redirect to="/redirecting"/> )}/>
          <Route path="/admin/merchant/accounts" render={ () => ( isAdmin() ? <AdminMerchantAccounts/> : <Redirect to="/redirecting"/> )}/>
          <Route path="/admin/merchant/payments" render={ () => ( isAdmin() ? <AdminMerchantPayments/> : <Redirect to="/redirecting"/> )}/>
          <Route path="/admin/requirements/pob" render={ () => ( isAdmin() ? <AdminRequirementsPob/> : <Redirect to="/redirecting"/> )}/>
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
