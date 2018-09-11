import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import HomePage from './components/home/HomePage'
import TermsAndCondition from './components/general/legal/TermsAndConditionPage'
import NotFound from './components/general/notFound'
import Redirecting from './components/redirect'
//auth
import LoginPage from './components/auth/LoginPage'
import TsvPage from './components/auth/TsvPage'
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
import Schedulef2f from './components/client/f2f/Schedulef2fPage'
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
import AdminRequirementsF2f from './components/admin/requirements/FaceToFacePage'
import AdminTransactionCashIn from './components/admin/transactions/CashInPage'
import AdminBusinessAccounts from './components/admin/business/accounts/AccountsPage'
import AdminMerchantAccounts from './components/admin/merchant/accounts/AccountsPage'
import AdminMerchantPayments from './components/admin/merchant/payments/PaymentsPage'

import { hasToken, getProfile } from './assets/utils/auth'

const AllTypes = ["individual", "business", "merchant"]
const Individual = AllTypes.slice(0,1)
const Business = AllTypes.slice(1,2)
const Merchant = AllTypes.slice(2,3)

const Routes = ({ store }) => (
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <PublicRoutes path="/" exact component={HomePage}/>
          <Route path="/redirecting" component={Redirecting}/>
          <PublicRoutes path="/termsandconditions" exact component={TermsAndCondition}/>
          <PublicRoutes path="/login" exact component={LoginPage}/>
          <PublicRoutes path="/login/tsv" component={TsvPage}/>
          <PublicRoutes path="/password/request" component={RequestPasswordPage}/>
          <PublicRoutes path="/password/reset" component={ResetPasswordPage}/>

          <PrivateRoutes path="/cash-in" exact component={CashIn} client={{status:'completed', type:AllTypes}}/>
          <PrivateRoutes path="/cash-in/transactions/:no" component={CashInTransaction} client={{status:'completed', type:AllTypes}}/>
          <PrivateRoutes path="/send-money" component={SendMoney} client={{status:'completed', type:AllTypes}}/>
          <PrivateRoutes path="/buy-load" component={BuyLoad} client={{status:'completed', type:AllTypes}}/>
          <PrivateRoutes path="/pay-bills" component={PayBills} client={{status:'completed', type:AllTypes}}/>
          <PrivateRoutes path="/book-travel" component={BookTravel} client={{status:'completed', type:AllTypes}}/>
          <PrivateRoutes path="/transfer" exact component={Transfer} client={{status:'completed', type:AllTypes}}/>
          <PrivateRoutes path="/transfer/transactions/:no" component={ TransferTransaction} client={{status:'completed', type:AllTypes}}/>
          <PrivateRoutes path="/payment/transactions/:no" component={PaymentTransaction} client={{status:'completed', type:AllTypes}}/>
          <PrivateRoutes path="/currencies" component={Currencies} client={{status:'completed', type:AllTypes}}/>
          <PrivateRoutes path="/knownaccounts" component={KnownAccounts} client={{status:'completed', type:AllTypes}}/>

          <PublicRoutes path="/client/register" component={RegisterPage} />
          <PrivateRoutes path="/client/verify" exact component={VerificationPage} client={{status:'unverified', type:Individual}}/>
          <PrivateRoutes path="/client/profile" component={ProfilePage} client={{status:'verified', type:Individual}}/>
          <PrivateRoutes path="/client/dashboard" component={ClientDashboard} client={{status:'completed', type:Individual}}/>
          <PrivateRoutes path="/client/settings" component={Settings} client={{status:'completed', type:AllTypes}}/>
          <PrivateRoutes path="/client/verify/phone" component={ClientVerifyPhone} client={{status:'completed', type:Individual}}/>
          <PrivateRoutes path="/client/upload/id" component={ClientUploadValidId} client={{status:'completed', type:Individual}}/>
          <PrivateRoutes path="/client/schedule/f2f" component={Schedulef2f} client={{status:'completed', type:Individual}}/>
          <PrivateRoutes path="/client/upload/pob" component={ClientSubmitPob} client={{status:'completed', type:Individual}}/>

          <PublicRoutes path="/business/register" component={BusinessRegisterPage}/>
          <PrivateRoutes path="/business/verify" component={BusinessVerificationPage} client={{status:'unverified', type:Business}}/>
          <PrivateRoutes path="/business/profile" component={BusinessProfilePage} client={{status:'verified', type:Business}}/>
          <PrivateRoutes path="/business/requirements" component={BusinessRequirementsPage} client={{status:'submissionOfRequirements', type:Business}}/>
          <PrivateRoutes path="/business/pending" component={BusinessPendingPage} client={{status:'pending', type:Business}}/>
          <PrivateRoutes path="/business/rejected" component={BusinessRejectedPage} client={{status:'rejected', type:Business}}/>
          <PrivateRoutes path="/business/dashboard" component={BusinessDashboard} client={{status:'completed', type:Business}}/>

          <PublicRoutes path="/merchant/register" component={MerchantRegisterPage}/>
          <PrivateRoutes path="/merchant/verify" component={MerchantVerificationPage} client={{status:'unverified', type:Merchant}}/>
          <PrivateRoutes path="/merchant/profile" component={MerchantProfilePage} client={{status:'verified', type:Merchant}}/>
          <PrivateRoutes path="/merchant/requirements" component={MerchantRequirementsPage} client={{status:'submissionOfRequirements', type:Merchant}}/>
          <PrivateRoutes path="/merchant/pending" component={MerchantPendingPage} client={{status:'pending', type:Merchant}}/>
          <PrivateRoutes path="/merchant/rejected" component={MerchantRejectedPage} client={{status:'rejected', type:Merchant}}/>
          <PrivateRoutes path="/merchant/dashboard" component={MerchantDashboard} client={{status:'completed', type:Merchant}}/>
          <PrivateRoutes path="/merchant/history" component={MerchantHistory} client={{status:'completed', type:Merchant}}/>
          <PrivateRoutes path="/merchant/reports" component={MerchantReports} client={{status:'completed', type:Merchant}}/>
          <PrivateRoutes path="/merchant/tools" component={MerchantTools} client={{status:'completed', type:Merchant}}/>
          <PrivateRoutes path="/merchant/card" component={MerchantCard} client={{status:'completed', type:Merchant}}/>

          <PublicRoutes path="/admin/login" component={AdminLogin}/>
          <PrivateRoutes path="/admin" exact component={AdminDashboard} client={{type:['admin']}}/>
          <PrivateRoutes path="/admin/transactions/cashin" component={AdminTransactionCashIn} client={{type:['admin']}}/>
          <PrivateRoutes path="/admin/requirements/id" component={AdminRequirementsId} client={{type:['admin']}}/>
          <PrivateRoutes path="/admin/requirements/pob" component={AdminRequirementsPob} client={{type:['admin']}}/>
          <PrivateRoutes path="/admin/manage/f2f" component={AdminRequirementsF2f} client={{type:['admin']}}/>
          <PrivateRoutes path="/admin/business/accounts" component={AdminBusinessAccounts} client={{type:['admin']}}/>
          <PrivateRoutes path="/admin/merchant/accounts" component={AdminMerchantAccounts} client={{type:['admin']}}/>
          <PrivateRoutes path="/admin/merchant/payments" component={AdminMerchantPayments} client={{type:['admin']}}/>
          <Route path="*" component={NotFound} />
        </Switch>
      </App>
    </Router>
  </Provider>
)
const PublicRoutes = ({ component: Component, ...rest}) => {
  return(
    <Route
      {...rest}
      render = { props =>
        !hasToken() ? <Component {...props}/> : <Redirect to="/redirecting"/>
      }
    />
  )
}

const PrivateRoutes = ({ component: Component, ...rest}) => {
  const Profile = getProfile()
  const Client = rest.client
  return(
    <Route
      {...rest}
      render = { props =>{
          if(hasToken()){
            let ReturnComponent = null
            switch(Profile.role){
              case 'admin':
                ReturnComponent = <Component {...props}/>
              break;
              case 'individual':
                ReturnComponent = Client.type.includes('individual') && Profile.status === Client.status ?
                <Component {...props}/> : <Redirect to="/redirecting"/>
              break;
              case 'business':
                ReturnComponent = Client.type.includes('business') && Profile.status === Client.status ?
                <Component {...props}/> : <Redirect to="/redirecting"/>
              break;
              case 'merchant':
                ReturnComponent = Client.type.includes('merchant') && Profile.status === Client.status ?
                <Component {...props}/> : <Redirect to="/redirecting"/>
              break;
              default:
              //
            }
            return ReturnComponent
          }else{
            window.location.href = '/'
          }
        }
      }
    />
  )
}

Routes.propTypes = {
  store: PropTypes.object.isRequired
}

export default Routes
