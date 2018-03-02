import * as types from './actionTypes'

export function loadLocaleSuccess(locale){
  return {type: types.LOAD_LOCALE_SUCCESS, locale}
}

export function changeLocaleSuccess(locale){
  return {type: types.CHANGE_LOCALE_SUCCESS, locale}
}

export function loadLocale(){
  const locale = localStorage.getItem("locale");
  if(!locale){
    localStorage.setItem("locale", "EN")
    return loadLocaleSuccess("EN")
  }
  return loadLocaleSuccess(locale)
}

export function changeLocale(locale){
  localStorage.setItem("locale", locale);
  return changeLocaleSuccess(locale)
}
