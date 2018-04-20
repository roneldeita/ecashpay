import * as types from './actionTypes'
import { isEmpty } from 'lodash'

export function saveAuthSuccess(auth){
  return {type: types.SAVE_AUTH_SUCCESS, auth}
}

export function checkAuthSuccess(auth){
  return {type: types.CHECK_AUTH_SUCCESS, auth}
}

export function saveAuth(auth){
  localStorage.setItem("auth", JSON.stringify(auth))
  //Call AuthVerify using token
  //return saveAuthSuccess({token:auth.token, status: auth.status})
  return saveAuthSuccess({token:auth.token})
}

export function checkAuth(){
  const GetAuth = localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")) : {}
  if(isEmpty(GetAuth)){
    return checkAuthSuccess({})
  }
  return checkAuthSuccess({token:GetAuth.token})
}
