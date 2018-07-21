import axios from 'axios'

export function Auth(data, header) {
  return {
    //client
    login: () => axios.post(process.env.REACT_APP_API + '/login', data),
    verifyTFA: () => axios.post(process.env.REACT_APP_API + '/api/v1/tfas/verify', data, {headers:header}),
    resendTFA: () => axios.post(process.env.REACT_APP_API + '/api/v1/tfas/resend', data, {headers:header}),
    register: () => axios.post(process.env.REACT_APP_API + '/register', data),
    verifyEmail: () => axios.post(process.env.REACT_APP_API + '/registrations/verify', data, {headers:header}),
    verificationResend: () => axios.post(process.env.REACT_APP_API + '/registrations/resend', data, {headers:header}),
    getUserProfile: () => axios.get(process.env.REACT_APP_API + '/api/v1/profiles', {headers: header}),
    completeProfile: () => axios.patch(process.env.REACT_APP_API + '/api/v1/profiles', data, {headers:header}),
    recoveryRequest: () => axios.post(process.env.REACT_APP_API + '/recoveries/request', data),
    recoveryReset: () => axios.post(process.env.REACT_APP_API + '/recoveries/reset', data),
    //business
    BusinessRegister: () => axios.post(process.env.REACT_APP_API + '/register/businesses', data),
    BusinessProfile: () => axios.patch(process.env.REACT_APP_API + '/api/v1/profiles/businesses', data, {headers:header}),
    BusinessRequirementsProfile: () => axios.post(process.env.REACT_APP_API + '/api/v1/profiles/businesses/requirements', data, {headers:header}),
    //merchant
    MerchantRegister: () => axios.post(process.env.REACT_APP_API + '/register/merchants', data),
    MerchantProfile: () => axios.patch(process.env.REACT_APP_API + '/api/v1/profiles/merchants', data, {headers:header}),
    MerchantsRequirementsProfile: () => axios.post(process.env.REACT_APP_API + '/api/v1/profiles/merchants/requirements', data, {headers:header}),
    //admin
    AdminLogin: () => axios.post(process.env.REACT_APP_API + '/login?role=admin', data),
    AdminBusinessNewAccounts: () => axios.get(process.env.REACT_APP_API + '/businesses?status=pending', data),
    AdminAcceptNewBusinessAccount: () => axios.patch(process.env.REACT_APP_API + '/businesses/'+data.id, data),
    AdminMerchantNewAccounts: () => axios.get(process.env.REACT_APP_API + '/merchants?status=pending', data),
    AdminAcceptNewMerchantAccount: () => axios.patch(process.env.REACT_APP_API + '/merchants/'+data.id, data),
  }
}

export function Email(data, header){
  return {
    Request: () => axios.post(process.env.REACT_APP_API + '/api/v1/users/email/request', data, {headers:header}),
    Verify: () => axios.post(process.env.REACT_APP_API + '/api/v1/users/email/reset', data, {headers:header})
  }
}

export function Phone(data, header){
  return {
    Request: () => axios.patch(process.env.REACT_APP_API + '/api/v1/profiles/phones/verifications', data, {headers:header}),
    Verify: () => axios.post(process.env.REACT_APP_API + '/api/v1/profiles/phones/verifications', data, {headers:header})
  }
}

export function Password(data, header){
  return {
    Request: () => axios.post(process.env.REACT_APP_API + '/api/v1/users/password/request', data, {headers:header}),
    Reset: () => axios.post(process.env.REACT_APP_API + '/api/v1/users/password/reset', data, {headers:header})
  }
}

export function Id(data, header){
  return {
    SubmitId: () => axios.post(process.env.REACT_APP_API + '/api/v1/profiles/kyc?level=1', data, {headers:header}),
    Check: () => axios.get(process.env.REACT_APP_API + '/api/v1/profiles/kyc?level=1', {headers:header}),
    Cancel: () => axios.delete(process.env.REACT_APP_API + '/api/v1/profiles/kyc?level=1', {headers:header}),
    //admin
    GetAllIdRequest: () => axios.get(process.env.REACT_APP_API + '/api/v1/requirements?level=1', {headers:header}),
    GetAllPobRequest: () => axios.get(process.env.REACT_APP_API + '/api/v1/requirements?level=2', {headers:header}),
    Verify: () => axios.patch(process.env.REACT_APP_API + '/api/v1/requirements/'+data.id, data, {headers:header}),
  }
}

export function Pob(data, header){
  return {
    SubmitPob: () => axios.post(process.env.REACT_APP_API + '/api/v1/profiles/kyc?level=2', data, {headers:header}),
    Check: () => axios.get(process.env.REACT_APP_API + '/api/v1/profiles/kyc?level=2', {headers:header}),
    Cancel: () => axios.delete(process.env.REACT_APP_API + '/api/v1/profiles/kyc?level=2', {headers:header})
  }
}

export function Wallet(data, header) {
  return {
    GetAll: () => axios.get(process.env.REACT_APP_API + '/api/v1/wallets', {headers:header}),
    Add: () => axios.post(process.env.REACT_APP_API + '/api/v1/wallets/currencies', data, {headers:header}),
    Update: () => axios.patch(process.env.REACT_APP_API + '/api/v1/wallets/currencies', data, {headers:header})
  }
}

export function Outlets(data, header){
  return {
    GetAll: () => axios.get(process.env.REACT_APP_API + '/api/v1/outlets'),
    Featured: () => axios.get(process.env.REACT_APP_API + '/api/v1/outlets?isFeatured=true')
  }
}

export function Transaction(data, header){
  return {
    All: () => axios.get(process.env.REACT_APP_API + '/api/v1/transactions', {headers:header}),
    CashIn: () => axios.post(process.env.REACT_APP_API + '/api/v1/transactions/cashIn', data, {headers:header}),
    Transfer: () => axios.post(process.env.REACT_APP_API + '/api/v1/transactions/transfer', data, {headers:header}),
    Get: () => axios.get(process.env.REACT_APP_API + '/api/v1/transactions/'+data.transaction, {headers:header}),
    Cancel: () => axios.delete(process.env.REACT_APP_API + '/api/v1/transactions/'+data.transaction, {headers:header}),
    Upload: () => axios.patch(process.env.REACT_APP_API + '/api/v1/transactions/'+data.get('transaction'), data, {headers:header}),
    //Admin
    GetAllCashIn: () => axios.get(process.env.REACT_APP_API + '/api/v1/payments', {headers:header}),
    AcceptCashIn: () => axios.patch(process.env.REACT_APP_API + '/api/v1/payments/'+data.id, {headers:header}),
    RejectCashIn: () => axios.delete(process.env.REACT_APP_API + '/api/v1/payments/'+data.id, {headers:header})
  }
}

export function Country(){
  return {
    All: () => axios.get(process.env.REACT_APP_COUNTRIES)
  }
}
