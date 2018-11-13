import axios from 'axios';
import moment from 'moment';
const CORE_API = process.env.REACT_APP_API;
//const TRANSACTION_API = process.env.REACT_APP_TRANSACTION_API

export function Auth(data, header) {
  return {
    //client
    login: () => axios.post(CORE_API + '/login', data),
    verifyTSV: () => axios.post(CORE_API + '/api/v1/tsvs/verify', data, {headers:header}),
    resendTSV: () => axios.post(CORE_API + '/api/v1/tsvs/resend', data, {headers:header}),
    verifyTFA: () => axios.post(CORE_API + '/api/v1/tfas/verify', data, {headers:header}),
    register: () => axios.post(CORE_API + '/register', data),
    verifyEmail: () => axios.post(CORE_API + '/registrations/verify', data, {headers:header}),
    verificationResend: () => axios.post(CORE_API + '/registrations/resend', data, {headers:header}),
    getUserProfile: () => axios.get(CORE_API + '/api/v1/profiles', {headers: header}),
    completeProfile: () => axios.patch(CORE_API + '/api/v1/profiles', data, {headers:header}),
    recoveryRequest: () => axios.post(CORE_API + '/recoveries/request', data),
    recoveryReset: () => axios.post(CORE_API + '/recoveries/reset', data),
    //business
    BusinessRegister: () => axios.post(CORE_API + '/register/businesses', data),
    BusinessProfile: () => axios.patch(CORE_API + '/api/v1/profiles/businesses', data, {headers:header}),
    BusinessRequirementsProfile: () => axios.post(CORE_API + '/api/v1/profiles/businesses/requirements', data, {headers:header}),
    //merchant
    MerchantRegister: () => axios.post(CORE_API + '/register/merchants', data),
    MerchantProfile: () => axios.patch(CORE_API + '/api/v1/profiles/merchants', data, {headers:header}),
    MerchantsRequirementsProfile: () => axios.post(CORE_API + '/api/v1/profiles/merchants/requirements', data, {headers:header}),
    //admin
    AdminLogin: () => axios.post(CORE_API + '/admins/login', data),
    GetAccount: () => axios.get(CORE_API + '/users/'+data.id),
    AdminBusinessNewAccounts: () => axios.get(CORE_API + '/businesses?status=pending', data),
    HandleBusinessAccount: () => axios.patch(CORE_API + '/businesses/'+data.id, data),
    AdminMerchantNewAccounts: () => axios.get(CORE_API + '/merchants?status=pending', data),
    HandleMerchantAccount: () => axios.patch(CORE_API + '/merchants/'+data.id, data),
  }
}

export function Email(data, header){
  return {
    Request: () => axios.post(CORE_API + '/api/v1/users/email/request', data, {headers:header}),
    Verify: () => axios.post(CORE_API + '/api/v1/users/email/reset', data, {headers:header})
  }
}

export function Phone(data, header){
  return {
    Request: () => axios.patch(CORE_API + '/api/v1/profiles/individuals/phone', data, {headers:header}),
    Verify: () => axios.post(CORE_API + '/api/v1/profiles/individuals/phone', data, {headers:header})
  }
}

export function Password(data, header){
  return {
    Request: () => axios.post(CORE_API + '/api/v1/users/password/request', data, {headers:header}),
    Reset: () => axios.post(CORE_API + '/api/v1/users/password/change', data, {headers:header})
  }
}

export function Tfa(data, header){
  return {
    Request: () => axios.get(CORE_API + '/api/v1/tfas', {headers:header}),
    Enable: () => axios.post(CORE_API + '/api/v1/tfas', data, {headers:header}),
    Disable: () => axios.delete(CORE_API + '/api/v1/tfas', {headers:header})
  }
}

export function Id(data, header){
  return {
    SubmitId: () => axios.post(CORE_API + '/api/v1/profiles/individuals/kycs/level-one', data, {headers:header}),
    Check: () => axios.get(CORE_API + '/api/v1/profiles/individuals/kycs/level-one', {headers:header}),
    Cancel: () => axios.delete(CORE_API + '/api/v1/profiles/individuals/kycs/level-one', {headers:header}),
    //admin
    GetAllIdRequest: () => axios.get(CORE_API + '/api/v1/requirements?type=ids&sort=-createdAt', {headers:header}),
    Verify: () => axios.patch(CORE_API + '/api/v1/requirements/'+data.id, data, {headers:header}),
  }
}

export function Ftf(data, header){
  return {
    GetDisabledDates: () => axios.get(CORE_API + '/api/v1/schedules-date', {headers:header}),
    GetAvailableTime: () => axios.get(CORE_API + '/api/v1/schedules-date/'+data.date, {headers:header}),
    SubmitFtf: () => axios.post(CORE_API + '/api/v1/profiles/individuals/kycs/level-two', data, {headers:header}),
    Check: () => axios.get(CORE_API + '/api/v1/profiles/individuals/kycs/level-two', {headers:header}),
    Cancel: () => axios.delete(CORE_API + '/api/v1/profiles/individuals/kycs/level-two', {headers:header}),
    //admin
    GetAllIdRequest: () => axios.get(CORE_API + '/api/v1/requirements?type=faceToface&sort=-createdAt', {headers:header}),
    ManageSchedule: () =>axios.post(CORE_API + '/api/v1/schedules', data, {headers:header}),
    GetAllSchedule: () =>axios.get(CORE_API + '/api/v1/schedules', {headers:header}),
    Verify: () => axios.patch(CORE_API + '/api/v1/requirements/'+data.id, data, {headers:header}),
  }
}

export function Pob(data, header){
  return {
    SubmitPob: () => axios.post(CORE_API + '/api/v1/profiles/individuals/kycs/level-three', data, {headers:header}),
    Check: () => axios.get(CORE_API + '/api/v1/profiles/individuals/kycs/level-three', {headers:header}),
    Cancel: () => axios.delete(CORE_API + '/api/v1/profiles/individuals/kycs/level-three', {headers:header}),
    //admin
    GetAllPobRequest: () => axios.get(CORE_API + '/api/v1/requirements?type=proofOfBilling', {headers:header}),
    Verify: () => axios.patch(CORE_API + '/api/v1/requirements/'+data.id, data, {headers:header}),
  }
}

export function Wallet(data, header) {
  return {
    GetAll: () => axios.get(CORE_API + '/api/v1/wallets', {headers:header}),
    Add: () => axios.post(CORE_API + '/api/v1/wallets/currencies', data, {headers:header}),
    Update: () => axios.patch(CORE_API + '/api/v1/wallets/currencies', data, {headers:header}),
    CashFlow: () => axios.get(CORE_API + '/api/v1/transactions/cashFlows', {headers:header}),
  }
}

export function Outlets(data, header){
  return {
    GetAll: () => axios.get(CORE_API + '/api/v1/outlets'),
    Featured: () => axios.get(CORE_API + '/api/v1/outlets?isFeatured=true')
  }
}

export function Transaction(data, header){
  let FirstDateOfPrevTwoMonth = moment().subtract(2, 'months').startOf('month').format("YYYY-MM-DD")
  let FirstDateOftheMonth = moment().startOf('month').format("YYYY-MM-DD")
  let LastDateOftheMonth = moment().endOf('month').format("YYYY-MM-DD")
  return {
    Recent: () => axios.get(CORE_API + `/api/v1/transactions?limit=30&sort=-createdAt`, {headers:header}),//resolved
    All: () => axios.get(CORE_API + `/api/v1/transactions?from=${FirstDateOfPrevTwoMonth}&to=${LastDateOftheMonth}&sort=-createdAt`, {headers:header}),
    CashInBreakdown: () => axios.get(CORE_API + `/api/v1/transactions?from=${FirstDateOftheMonth}&to=${LastDateOftheMonth}&sort=-createdAt&entryType=debit&status=completed`, {headers:header}),
    CashIn: () => axios.post(CORE_API + '/api/v1/transactions/cashIn', data, {headers:header}),
    Transfer: () => axios.post(CORE_API + '/api/v1/transactions/transfer', data, {headers:header}),
    Get: () => axios.get(CORE_API + `/api/v1/transactions/${data.transaction}`, {headers:header}),
    Cancel: () => axios.delete(CORE_API + `/api/v1/transactions/${data.transaction}`, {headers:header}),
    Upload: () => axios.patch(CORE_API + `/api/v1/transactions/${data.get('transaction')}`, data, {headers:header}),
    //merchant
    UploadPOD: () => axios.patch(CORE_API + `/payments/${data.get('transaction')}`, data, {headers:header}),
    //Admin
    GetAllCashIn: () => axios.get(CORE_API + '/api/v1/payments', {headers:header}),
    AcceptCashIn: () => axios.patch(CORE_API + '/api/v1/payments/'+data.id, {headers:header}),
    RejectCashIn: () => axios.delete(CORE_API + '/api/v1/payments/'+data.id, {headers:header}),
    GetAllPayments: () => axios.get(CORE_API + '/payments/transactions', {headers:header}),
    AcceptPayment: () => axios.patch(CORE_API + `/payments/transactions/${data.id}`, {headers:header}),
    RejectPayment: () => axios.delete(CORE_API + `/payments/transactions/${data.id}`, {headers:header}),
  }
}

export function Country(){
  return {
    All: () => axios.get(process.env.REACT_APP_COUNTRIES)
  }
}