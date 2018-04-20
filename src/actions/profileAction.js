import * as types from './actionTypes'
import { Auth } from '../services/api'
import { getToken } from '../assets/utils/auth'

export function loadProfileSuccess(profile){
  return {type: types.LOAD_PROFILE_SUCCESS, profile}
}

export function loadProfile(){
  if(getToken()){
    return dispatch => {
      Auth(null, {'x-access-token':getToken().token}).getUserProfile()
      .then(res => {
        dispatch(loadProfileSuccess(res.data))
        sessionStorage.setItem("profile", JSON.stringify(res.data));
      })
    }
  }
}
