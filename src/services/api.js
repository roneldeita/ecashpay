import axios from 'axios'

export function Auth(data, header) {
  return {
    //client
    login: () => axios.post(process.env.REACT_APP_API + '/login', data),
    register: () => axios.post(process.env.REACT_APP_API + '/register', data),
    verifyEmail: () => axios.post(process.env.REACT_APP_API + '/verifications', data, {headers:header}),
    verificationResend: () => axios.post(process.env.REACT_APP_API + '/verifications/resend', data, {headers:header}),
    getUserProfile: () => axios.get(process.env.REACT_APP_API + '/api/v1/profiles', {headers: header}),
    completeProfile: () => axios.patch(process.env.REACT_APP_API + '/api/v1/profiles', data, {headers:header}),
    recoveryRequest: () => axios.post(process.env.REACT_APP_API + '/recoveries/request', data),
    recoveryReset: () => axios.post(process.env.REACT_APP_API + '/recoveries/reset', data),
    //admin
    AdminLogin: () => axios.post(process.env.REACT_APP_API + '/login?role=admin', data),
  }
}

export function Phone(data, header){
  return {
    Request: () => axios.patch(process.env.REACT_APP_API + '/api/v1/profiles/phones/verifications', data, {headers:header}),
    Verify: () => axios.post(process.env.REACT_APP_API + '/api/v1/profiles/phones/verifications', data, {headers:header})
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
    Make: () => axios.post(process.env.REACT_APP_API + '/api/v1/transactions/cashIn', data, {headers:header}),
    Get: () => axios.get(process.env.REACT_APP_API + '/api/v1/transactions/'+data.transaction, {headers:header})
  }
}

export function Country(){
  return {
    All: () => axios.get(process.env.REACT_APP_COUNTRIES)
  }
}
