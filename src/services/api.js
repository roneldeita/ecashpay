import axios from 'axios'

export function Auth(data, header) {
  return {
    //verifyUser: () => axios.get(process.env.REACT_APP_API + '/profiles', {headers:header}),
    login: () => axios.post(process.env.REACT_APP_API + '/login', data),
    register: () => axios.post(process.env.REACT_APP_API + '/register', data),
    verifyEmail: () => axios.post(process.env.REACT_APP_API + '/verification', data, {headers:header}),
    verificationResend: () => axios.post(process.env.REACT_APP_API + '/verification/resend', data, {headers:header}),
    getUserProfile: () => axios.get(process.env.REACT_APP_API + '/profiles', {headers: header}),
    completeProfile: () => axios.put(process.env.REACT_APP_API + '/profiles', data, {headers:header}),
    recoveryRequest: () => axios.post(process.env.REACT_APP_API + '/recovery/request', data),
    recoveryReset: () => axios.post(process.env.REACT_APP_API + '/recovery/reset', data)
  }
}

export function Phone(data, header){
  return {
    Request: () => axios.post(process.env.REACT_APP_API + '/profiles/kyc/requirements/phone', data, {headers:header}),
    Verify: () => axios.put(process.env.REACT_APP_API + '/profiles/kyc/requirements/phone', data, {headers:header})
  }
}

export function Wallet(data, header) {
  return {
    GetAll: () => axios.get(process.env.REACT_APP_API + '/wallets', {headers:header}),
    Add: () => axios.post(process.env.REACT_APP_API + '/wallets/currencies?action=add', data, {headers:header}),
    MakePrimary: () => axios.post(process.env.REACT_APP_API + '/wallets/currencies?action=setPrimary', data, {headers:header}),
    CloseCurrency: () => axios.post(process.env.REACT_APP_API + '/wallets/currencies?action=remove', data, {headers:header})
  }
}

export function Country(){
  return {
    All: () => axios.get(process.env.REACT_APP_COUNTRIES)
  }
}
