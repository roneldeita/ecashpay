import * as types from './actionTypes'

export function saveAuthSuccess(auth){
  return {type: types.SAVE_AUTH_SUCCESS, auth}
}

export function checkAuthSuccess(auth){
  return {type: types.CHECK_AUTH_SUCCESS, auth}
}

export function saveAuth(auth){
  localStorage.setItem("auth", JSON.stringify(auth))
  return saveAuthSuccess({token:auth.token, status: auth.status})
}

export function checkAuth(){
  const GetAuth = localStorage.getItem("auth")
  const ParseAuth = GetAuth ? JSON.parse(GetAuth) : ''

  if(!ParseAuth){
    return checkAuthSuccess({})
  }
  return checkAuthSuccess({token:ParseAuth.token, status: Number(ParseAuth.status)})
}
