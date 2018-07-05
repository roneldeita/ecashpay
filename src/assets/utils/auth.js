export function getToken() {
  return localStorage.getItem('auth')
  //const auth = localStorage.getItem('auth')
  // if(!auth){
  //   return false
  // }
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
