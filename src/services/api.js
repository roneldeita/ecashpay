import axios from 'axios'

export function Auth(data, header) {
  return {
    //client
    login: () => axios.post(process.env.REACT_APP_API + '/login', data),
    verifyTSV: () => axios.post(process.env.REACT_APP_API + '/api/v1/tsvs/verify', data, {headers:header}),
    resendTSV: () => axios.post(process.env.REACT_APP_API + '/api/v1/tsvs/resend', data, {headers:header}),
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
    AdminLogin: () => axios.post(process.env.REACT_APP_API + '/admins/login', data),
    GetAccount: () => axios.get(process.env.REACT_APP_API + '/users/'+data.id),
    AdminBusinessNewAccounts: () => axios.get(process.env.REACT_APP_API + '/businesses?status=pending', data),
    HandleBusinessAccount: () => axios.patch(process.env.REACT_APP_API + '/businesses/'+data.id, data),
    AdminMerchantNewAccounts: () => axios.get(process.env.REACT_APP_API + '/merchants?status=pending', data),
    HandleMerchantAccount: () => axios.patch(process.env.REACT_APP_API + '/merchants/'+data.id, data),
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
    Request: () => axios.patch(process.env.REACT_APP_API + '/api/v1/profiles/individuals/phone', data, {headers:header}),
    Verify: () => axios.post(process.env.REACT_APP_API + '/api/v1/profiles/individuals/phone', data, {headers:header})
  }
}

export function Password(data, header){
  return {
    Request: () => axios.post(process.env.REACT_APP_API + '/api/v1/users/password/request', data, {headers:header}),
    Reset: () => axios.post(process.env.REACT_APP_API + '/api/v1/users/password/reset', data, {headers:header})
  }
}

export function Tfa(data, header){
  return {
    Request: () => axios.get(process.env.REACT_APP_API + '/api/v1/tfas', {headers:header}),
    Enable: () => axios.post(process.env.REACT_APP_API + '/api/v1/tfas', data, {headers:header}),
    Disable: () => axios.delete(process.env.REACT_APP_API + '/api/v1/tfas', {headers:header})
  }
}

export function Id(data, header){
  return {
    SubmitId: () => axios.post(process.env.REACT_APP_API + '/api/v1/profiles/individuals/kycs/level-one', data, {headers:header}),
    Check: () => axios.get(process.env.REACT_APP_API + '/api/v1/profiles/individuals/kycs/level-one', {headers:header}),
    Cancel: () => axios.delete(process.env.REACT_APP_API + '/api/v1/profiles/individuals/kycs/level-one', {headers:header}),
    //admin
    GetAllIdRequest: () => axios.get(process.env.REACT_APP_API + '/api/v1/requirements?type=ids&sort=-createdAt', {headers:header}),
    Verify: () => axios.patch(process.env.REACT_APP_API + '/api/v1/requirements/'+data.id, data, {headers:header}),
  }
}

export function Ftf(data, header){
  return {
    GetDisabledDates: () => axios.get(process.env.REACT_APP_API + '/api/v1/schedules-date', {headers:header}),
    GetAvailableTime: () => axios.get(process.env.REACT_APP_API + '/api/v1/schedules-date/'+data.date, {headers:header}),
    SubmitFtf: () => axios.post(process.env.REACT_APP_API + '/api/v1/profiles/individuals/kycs/level-two', data, {headers:header}),
    Check: () => axios.get(process.env.REACT_APP_API + '/api/v1/profiles/individuals/kycs/level-two', {headers:header}),
    Cancel: () => axios.delete(process.env.REACT_APP_API + '/api/v1/profiles/individuals/kycs/level-two', {headers:header}),
    //admin
    GetAllIdRequest: () => axios.get(process.env.REACT_APP_API + '/api/v1/requirements?type=faceToface&sort=-createdAt', {headers:header}),
    ManageSchedule: () =>axios.post(process.env.REACT_APP_API + '/api/v1/schedules', data, {headers:header}),
    GetAllSchedule: () =>axios.get(process.env.REACT_APP_API + '/api/v1/schedules', {headers:header}),
    Verify: () => axios.patch(process.env.REACT_APP_API + '/api/v1/requirements/'+data.id, data, {headers:header}),
  }
}

export function Pob(data, header){
  return {
    SubmitPob: () => axios.post(process.env.REACT_APP_API + '/api/v1/profiles/individuals/kycs/level-three', data, {headers:header}),
    Check: () => axios.get(process.env.REACT_APP_API + '/api/v1/profiles/individuals/kycs/level-three', {headers:header}),
    Cancel: () => axios.delete(process.env.REACT_APP_API + '/api/v1/profiles/individuals/kycs/level-three', {headers:header}),
    //admin
    GetAllPobRequest: () => axios.get(process.env.REACT_APP_API + '/api/v1/requirements?type=proofOfBilling', {headers:header}),
    Verify: () => axios.patch(process.env.REACT_APP_API + '/api/v1/requirements/'+data.id, data, {headers:header}),
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
    //merchant
    UploadPOD: () => axios.patch(process.env.REACT_APP_API + '/payments/'+data.get('transaction'), data, {headers:header}),
    //Admin
    GetAllCashIn: () => axios.get(process.env.REACT_APP_API + '/api/v1/payments', {headers:header}),
    AcceptCashIn: () => axios.patch(process.env.REACT_APP_API + '/api/v1/payments/'+data.id, {headers:header}),
    RejectCashIn: () => axios.delete(process.env.REACT_APP_API + '/api/v1/payments/'+data.id, {headers:header}),
    GetAllPayments: () => axios.get(process.env.REACT_APP_API + '/payments/transactions', {headers:header}),
    AcceptPayment: () => axios.patch(process.env.REACT_APP_API + '/payments/transactions/'+data.id, {headers:header}),
    RejectPayment: () => axios.delete(process.env.REACT_APP_API + '/payments/transactions/'+data.id, {headers:header}),
  }
}

export function Country(){
  return {
    All: () => axios.get(process.env.REACT_APP_COUNTRIES)
  }
}
