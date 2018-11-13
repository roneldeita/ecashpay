import * as types from './actionTypes'
//import { isEmpty } from 'lodash'
import { getToken } from '../assets/utils/auth'

export function saveAuthSuccess(auth){
  return {type: types.SAVE_AUTH_SUCCESS, auth}
}

export function checkAuthSuccess(auth){
  return {type: types.CHECK_AUTH_SUCCESS, auth}
}

export function saveAuth(auth){
  localStorage.setItem("auth", auth)
  //Call AuthVerify using token
  //return saveAuthSuccess({token:auth.token, status: auth.status})
  return saveAuthSuccess({token:auth})
}

export function checkAuth(){
//  const GetAuth = localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")) : {}
  if(getToken() === ''){
    return checkAuthSuccess({})
  }
  return checkAuthSuccess({token:getToken()})
}