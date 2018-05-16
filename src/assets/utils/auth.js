export function getToken() {
  const auth = localStorage.getItem('auth')
  if(!auth){
    return false
  }
  return JSON.parse(auth)
}

export function hasToken(){
  const Token = getToken().token
  return !!Token
}

export function getProfile(){
  const profile = sessionStorage.getItem('profile')
  if(!profile || profile === undefined){
    return false
  }
  return JSON.parse(profile)
}
