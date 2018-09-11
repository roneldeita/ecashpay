export function getToken() {
  return localStorage.getItem('auth')
}

export function hasToken(){
  const Token = getToken()
  return !!Token
}

export function getProfile(){
  const profile = sessionStorage.getItem('profile')
  if(!profile || profile === undefined){
    return false
  }
  return JSON.parse(profile)
}
