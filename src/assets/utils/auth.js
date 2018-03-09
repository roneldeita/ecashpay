export function getToken() {
  return localStorage.getItem('token');
}

export function hasToken(){
  const Token = getToken();
  return !!Token;
}
