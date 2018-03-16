import axios from 'axios'

export async function Login(credentials){
  return await axios.post(process.env.REACT_APP_API + '/login', credentials).then( response => response )
}

export async function Register(Data){
  return await axios.post(process.env.REACT_APP_API + '/register', Data).then( response => response )
}

export async function VerifyEmail(Data, Token){
  return await axios.post(process.env.REACT_APP_API + '/verification', Data, {headers:{token:Token}}).then( response => response )
}

export async function VerificationResend(Data, Token){
  return await axios.post(process.env.REACT_APP_API + '/verification/resend', Data, {headers:{token:Token}}).then( response => response )
}

export async function CompleteProfile(Data, Token){
  return await axios.post(process.env.REACT_APP_API + '/profile', Data, {headers:{token:Token}}).then( response => response )
}

export async function GetUserProfile(Token){
  return await axios.get(process.env.REACT_APP_API + '/profile', {headers: {token:Token}}).then(response => response )
}
