import axios from 'axios'

export function Auth(data, header) {
  return {
    login: () => axios.post(process.env.REACT_APP_API + '/login', data),
    register: () => axios.post(process.env.REACT_APP_API + '/register', data),
    verifyEmail: () => axios.post(process.env.REACT_APP_API + '/verification', data, {headers:header}),
    verificationResend: () => axios.post(process.env.REACT_APP_API + '/verification/resend', data, {headers:header}),
    getUserProfile: () => axios.get(process.env.REACT_APP_API + '/profile', {headers: header}),
    completeProfile: () => axios.post(process.env.REACT_APP_API + '/profile', data, {headers:header})
  }
}

export function Wallet(data, header) {
  return {
    GetAll: () => axios.get(process.env.REACT_APP_API + '/wallets', {headers:header}),
    Add: () => axios.post(process.env.REACT_APP_API + '/wallets/currencies?action=add', data, {headers:header})
  }
}

export function Country(){
  return {
    All: () => axios.get(process.env.REACT_APP_COUNTRIES)
  }
}
